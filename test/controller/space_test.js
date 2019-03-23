/* globals api, expect describe afterEach beforeEach it*/

require('../spec_helper')

const Space = require('../../models/space')

describe('Space tests', () => {

  beforeEach(done => {
    Space.collection.remove()
    done()
  })

  afterEach(done => {
    Space.collection.remove()
    done()
  })

  describe('GET /api/spaces', () => {

    beforeEach(done => {
      Space.create({
        location: '83 Upper St, London, N1 0NU',
        type: 'Sheletered drive-way',
        suitability: 'Motorcyle, Car, Bicycle, Van',
        images: ['https://static.yourparkingspace.co.uk/large/3584d3ecb8f045f2c538d3886b663e7b.jpeg', 'https://static.yourparkingspace.co.uk/large/8813c357bbcdbe36010e350d7ffadd2d.jpeg', 'https://static.yourparkingspace.co.uk/large/e7ae6513832863ccf5838aa72d053612.jpeg'],
        availability: true,
        price: 4,
        description: 'One space located on Upper Street in London. The space is close to Central London tube stations allowing easy access to most places. The space is suitable for vehicles up to the size of a Van. On-site there is Electric Charging and Disabled Access. The space is available 24 hours on all days. The parking is available alongside our street (Upper Street) and many neighbouring areas (Highbury & Islington) and there is usually plenty of parking space available.',
        electricChargingPoint: true,
        comments: { text: ['Perfect parking spot in a good location, highly recommend', 'Desperatly needed a parking spot, found this one and booked it in less than 10 seconds.', 'Nice driveway, felt like I knew my car will be safe when I first saw it', 'Bit of a tight squeeze, but well sheltered']}
      })
        .then(() => done())
        .catch(done)
    })

    it('should return a 200 response', done => {
      api
        .get('/api/spaces')
        .set('Accept', 'application/json')
        .expect(200, done)
    })

    it('should respond with a JSON object', done => {
      api
        .get('/api/spaces')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.header['content-type'])
            .to.be.eq('application/json; charset=utf-8')
          done()
        })
    })

    it('should return an array of spaces', done => {
      api
        .get('/api/spaces')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body).to.be.an('array')
          done()
        })
    })

    it('should return an array of space objects', done => {
      api.get('/api/spaces')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body)
            .and.be.an('array')
            .and.have.property(0)
            .and.have.all.keys([
              '__v',
              '_id',
              'location',
              'type',
              'suitability',
              'images',
              'availability',
              'description',
              'electricChargingPoint',
              'comments',
              'price'
            ])
          done()
        })
    })

    it('space objects should have properities: _id, location, type, suitability, images, availability, description, electricChargingPoint', 'comments', 'price', done => {
      api.get('/api/spaces')
        .set('Accept', 'application/json')
        .end((err, res) => {
          const firstSpace = res.body[0]

          expect(firstSpace)
            .to.have.property('_id')
            .and.to.be.a('string')

          expect(firstSpace)
            .to.have.property('location')
            .and.to.be.a('string')

          expect(firstSpace)
            .to.have.property('type')
            .and.to.be.a('string')

          expect(firstSpace)
            .to.have.property('suitability')
            .and.to.be.a('string')

          expect(firstSpace)
            .to.have.property('images')
            .and.to.be.a('array')

          expect(firstSpace)
            .to.have.property('availability')
            .and.to.be.a('boolean')

          expect(firstSpace)
            .to.have.property('price')
            .and.to.be.a('number')

          expect(firstSpace)
            .to.have.property('description')
            .and.to.be.a('string')

          expect(firstSpace)
            .to.have.property('electricChargingPoint')
            .and.to.be.a('boolean')

          expect(firstSpace)
            .to.have.property('comments')
            .and.to.be.a('object')

          done()
        })
    })

    describe('Make more than one space', () => {

      beforeEach(done => {
        Space.create([
          {
            location: '83 Upper St, London, N1 0NU',
            type: 'Sheletered drive-way',
            suitability: 'Motorcyle, Car, Bicycle, Van',
            images: ['https://static.yourparkingspace.co.uk/large/3584d3ecb8f045f2c538d3886b663e7b.jpeg', 'https://static.yourparkingspace.co.uk/large/8813c357bbcdbe36010e350d7ffadd2d.jpeg', 'https://static.yourparkingspace.co.uk/large/e7ae6513832863ccf5838aa72d053612.jpeg'],
            availability: true,
            price: 4,
            description: 'One space located on Upper Street in London. The space is close to Central London tube stations allowing easy access to most places. The space is suitable for vehicles up to the size of a Van. On-site there is Electric Charging and Disabled Access. The space is available 24 hours on all days. The parking is available alongside our street (Upper Street) and many neighbouring areas (Highbury & Islington) and there is usually plenty of parking space available.',
            electricChargingPoint: true,
            comments: { text: ['Perfect parking spot in a good location, highly recommend', 'Desperatly needed a parking spot, found this one and booked it in less than 10 seconds.', 'Nice driveway, felt like I knew my car will be safe when I first saw it', 'Bit of a tight squeeze, but well sheltered']}
          },
          {
            location: '47, FLAT 6, Hollycroft Avenue, Camden Town, Greater London, London, NW3 7QJ',
            type: 'Roadside parking',
            suitability: 'Car, Motorcyle, Small van',
            images: ['https://static.yourparkingspace.co.uk/large/676c3655480fdaf8df01c82972271c2e.png', 'https://static.yourparkingspace.co.uk/large/f9bddbc00a7aaf64b68c9ca961e177fe.png'],
            availability: true,
            price: 3,
            description: 'Parking spaces located on Shaping Change Ltd in Camden London. The spaces are close to St Bedes Hall. The spaces are suitable for vehicles up to the size of a Large - (4x4). On-site there is Allocated Space and Security Lighting. The spaces are available 24 hours on all days.',
            electricChargingPoint: true,
            comments: { text: ['Had a problem with fitting my car into this small place, surrounding houses make it hard to fit your car in to.', 'good price for where its located, found it hard to reverse park into but happy with what i paid for']}
          }
        ])
          .then(() => done())
          .catch(done)
      })

      it('should return ten spaces', done => {
        api
          .get('/api/spaces')
          .set('Accept', 'application/json')
          .end((err, res) => {
            expect(res.body.length).to.equal(3)
            done()
          })
      })
    })
  })

  describe('POST /api/spaces', () => {

    it('should return a 201 response', done => {
      api
        .post('/api/spaces')
        .set('Accept', 'application/json')
        .send({
          space: {
            location: '32-37 Cowper St, London EC2A 4AP',
            type: 'Roadside parking',
            suitability: 'Car, Motorcyle, Small van',
            images: ['https://static.yourparkingspace.co.uk/large/676c3655480fdaf8df01c82972271c2e.png', 'https://static.yourparkingspace.co.uk/large/f9bddbc00a7aaf64b68c9ca961e177fe.png'],
            availability: true,
            price: 10,
            description: 'Parking spaces located on Shaping Change Ltd in Camden London. The spaces are close to St Bedes Hall. The spaces are suitable for vehicles up to the size of a Large - (4x4). On-site there is Allocated Space and Security Lighting. The spaces are available 24 hours on all days.',
            electricChargingPoint: true,
            comments: { text: ['Had a problem with fitting my car into this small place, surrounding houses make it hard to fit your car in to.', 'good price for where its located, found it hard to reverse park into but happy with what i paid for']}
          }
        })
        .expect(201, done)
    })

    it('should create a space', done => {
      api
        .post('/api/spaces')
        .set('Accept', 'application/json')
        .send({
          space: {
            location: '32-37 Cowper St, London EC2A 4AP',
            type: 'Roadside parking',
            suitability: 'Car, Motorcyle, Small van',
            images: ['https://static.yourparkingspace.co.uk/large/676c3655480fdaf8df01c82972271c2e.png', 'https://static.yourparkingspace.co.uk/large/f9bddbc00a7aaf64b68c9ca961e177fe.png'],
            availability: true,
            price: 10,
            description: 'Parking spaces located on Shaping Change Ltd in Camden London. The spaces are close to St Bedes Hall. The spaces are suitable for vehicles up to the size of a Large - (4x4). On-site there is Allocated Space and Security Lighting. The spaces are available 24 hours on all days.',
            electricChargingPoint: true,
            comments: { text: ['Had a problem with fitting my car into this small place, surrounding houses make it hard to fit your car in to.', 'good price for where its located, found it hard to reverse park into but happy with what i paid for']}
          }
        })
        .end((err, res) => {
          const space = res.body

          expect(space)
            .to.have.property('_id')
            .and.to.be.a('string')

          expect(space)
            .to.have.property('location')
            .and.to.be.a('string')

          expect(space)
            .to.have.property('type')
            .and.to.be.a('string')

          expect(space)
            .to.have.property('suitability')
            .and.to.be.a('string')

          expect(space)
            .to.have.property('images')
            .and.to.be.a('array')

          expect(space)
            .to.have.property('availability')
            .and.to.be.a('boolean')

          expect(space)
            .to.have.property('price')
            .and.to.be.a('number')

          expect(space)
            .to.have.property('description')
            .and.to.be.a('string')

          expect(space)
            .to.have.property('electricChargingPoint')
            .and.to.be.a('boolean')

          expect(space)
            .to.have.property('comments')
            .and.to.be.a('object')

          done()
        })
    })

  })

  describe('GET /api/spaces/:id', () => {

    let space

    beforeEach(done => {
      Space.create({
        location: '32-37 Cowper St, London EC2A 4AP',
        type: 'Roadside parking',
        suitability: 'Car, Motorcyle, Small van',
        images: ['https://static.yourparkingspace.co.uk/large/676c3655480fdaf8df01c82972271c2e.png', 'https://static.yourparkingspace.co.uk/large/f9bddbc00a7aaf64b68c9ca961e177fe.png'],
        availability: true,
        price: 10,
        description: 'Parking spaces located on Shaping Change Ltd in Camden London. The spaces are close to St Bedes Hall. The spaces are suitable for vehicles up to the size of a Large - (4x4). On-site there is Allocated Space and Security Lighting. The spaces are available 24 hours on all days.',
        electricChargingPoint: true,
        comments: { text: ['Had a problem with fitting my car into this small place, surrounding houses make it hard to fit your car in to.', 'good price for where its located, found it hard to reverse park into but happy with what i paid for']}
      })
        .then(spaceData => {
          space = spaceData
          done()
        })
        .catch(done)
    })

    it('should return a 200 response', done => {
      api
        .get(`/api/spaces/${space.id}`)
        .set('Accept', 'application/json')
        .expect(200, done)
    })
  })

  describe('DELETE /api/spaces/:id', () => {

    let space

    beforeEach(done => {
      Space.create({
        location: '32-37 Cowper St, London EC2A 4AP',
        type: 'Roadside parking',
        suitability: 'Car, Motorcyle, Small van',
        images: ['https://static.yourparkingspace.co.uk/large/676c3655480fdaf8df01c82972271c2e.png', 'https://static.yourparkingspace.co.uk/large/f9bddbc00a7aaf64b68c9ca961e177fe.png'],
        availability: true,
        price: 10,
        description: 'Parking spaces located on Shaping Change Ltd in Camden London. The spaces are close to St Bedes Hall. The spaces are suitable for vehicles up to the size of a Large - (4x4). On-site there is Allocated Space and Security Lighting. The spaces are available 24 hours on all days.',
        electricChargingPoint: true,
        comments: { text: ['Had a problem with fitting my car into this small place, surrounding houses make it hard to fit your car in to.', 'good price for where its located, found it hard to reverse park into but happy with what i paid for']}
      })
        .then(spaceData => {
          space = spaceData
          done()
        })
        .catch(done)
    })

    it('should return a 204 response', done => {
      api
        .delete(`/api/spaces/${space.id}`)
        .set('Accept', 'application/json')
        .expect(204, done)
    })
  })
})
