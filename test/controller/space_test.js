/* globals api, expect describe afterEach beforeEach it*/

require('../spec_helper')

const Space = require('../../models/space')
const User = require('../../models/user')

const env = require('../../config/environment')
const secret = env.secret

const jwt = require('jsonwebtoken')

const spaceData =
{
  location: '83 Upper St, London, N1 0NU',
  geometry: {
    type: 'Point',
    coordinates: [-0.101490, 51.536592]
  },
  type: 'Sheletered drive-way',
  suitability: 'Motorcyle, Car, Bicycle, Van',
  images: ['https://static.yourparkingspace.co.uk/large/3584d3ecb8f045f2c538d3886b663e7b.jpeg', 'https://static.yourparkingspace.co.uk/large/8813c357bbcdbe36010e350d7ffadd2d.jpeg', 'https://static.yourparkingspace.co.uk/large/e7ae6513832863ccf5838aa72d053612.jpeg'],
  availability: true,
  bookings: { startDate: '2019-03-28 09:00:02', endDate: '2019-03-28 09:00:02' },
  bookingsDates: ['2019-03-28 09:00:02', '2019-03-28 09:00:02'],
  // rating: 4.6,
  description: 'One space located on Upper Street in London. The space is close to Central London tube stations allowing easy access to most places. The space is suitable for vehicles up to the size of a Van. On-site there is Electric Charging and Disabled Access. The space is available 24 hours on all days. The parking is available alongside our street (Upper Street) and many neighbouring areas (Highbury & Islington) and there is usually plenty of parking space available.',
  comments: { text: ['Perfect parking spot in a good location, highly recommend', 'Desperatly needed a parking spot, found this one and booked it in less than 10 seconds.', 'Nice driveway, felt like I knew my car will be safe when I first saw it', 'Bit of a tight squeeze, but well sheltered']},
  price: 4,
  electricChargingPoint: false,
  id: '5kljesdlkjqweiojrqj'
}

let token

describe('Space tests', () => {

  beforeEach(done => {
    Space.collection.remove()
    Space.create(
      spaceData
    )
      .then(() => User.remove({}))
      .then(() => User.create({
        username: 'test',
        email: 'test@email.com',
        password: 'test',
        passwordConfirmation: 'test',
        number: '+447738284738'
      }))
      .then(user => {
        token = jwt.sign({ sub: user._id} , secret, { expiresIn: '6h'})
        done()
      })
      .catch(done)
  })

  afterEach(done => {
    Space.collection.remove()
    done()
  })

  describe('GET /api/spaces', () => {

    beforeEach(done => {
      Space.create(spaceData)
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
              'geometry',
              'type',
              'suitability',
              'images',
              'availability',
              // 'rating',
              'description',
              'comments',
              'price',
              'electricChargingPoint',
              'bookings',
              'bookingsDates',
              'id'
            ])
          done()
        })
    })

    it('space objects should have properities: _id,id,comments,geometry location, type, suitability, images, availability ,description,price electricChargingPoint, bookings, bookingsDates', done => {
      api.get('/api/spaces')
        .set('Accept', 'application/json')
        .end((err, res) => {
          const firstSpace = res.body[0]

          expect(firstSpace)
            .to.have.property('_id')
            .and.to.be.a('string')

          expect(firstSpace)
            .to.have.property('id')
            .and.to.be.a('string')

          expect(firstSpace)
            .to.have.property('comments')
            .and.to.be.a('array')

          expect(firstSpace)
            .to.have.property('geometry')
            .and.to.be.a('object')

          expect(firstSpace)
            .to.have.property('bookings')
            .and.to.be.a('array')

          expect(firstSpace)
            .to.have.property('bookingsDates')
            .and.to.be.a('array')

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
            .to.have.property('description')
            .and.to.be.a('string')

          expect(firstSpace)
            .to.have.property('price')
            .and.to.be.a('number')

          expect(firstSpace)
            .to.have.property('electricChargingPoint')
            .and.to.be.a('boolean')

          done()
        })
    })

    describe('Make more than one space', () => {

      beforeEach(done => {
        Space.create([spaceData, spaceData])
          .then(() => done())
          .catch(done)
      })

      it('should return four spaces', done => {
        api
          .get('/api/spaces')
          .set('Accept', 'application/json')
          .end((err, res) => {
            expect(res.body.length).to.equal(4)
            done()
          })
      })
    })
  })

  describe('POST /api/spaces', () => {

    it('should return a 201 response', done => {
      api
        .post('/api/spaces')
        .set({'Accept': 'application/json', 'Authorization': `Bearer ${token}`})
        .send(spaceData)
        .expect(201, done)
    })

    it('should create a space', done => {
      api
        .post('/api/spaces')
        .set({'Accept': 'application/json', 'Authorization': `Bearer ${token}`})
        .send(spaceData)
        .end((err, res) => {
          const space = res.body
          expect(space)
            .to.have.property('_id')
            .and.to.be.a('string')

          expect(space)
            .to.have.property('id')
            .and.to.be.a('string')

          expect(space)
            .to.have.property('comments')
            .and.to.be.a('array')

          expect(space)
            .to.have.property('geometry')
            .and.to.be.a('object')

          expect(space)
            .to.have.property('bookings')
            .and.to.be.a('array')

          expect(space)
            .to.have.property('bookingsDates')
            .and.to.be.a('array')

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
            .to.have.property('description')
            .and.to.be.a('string')

          expect(space)
            .to.have.property('price')
            .and.to.be.a('number')

          expect(space)
            .to.have.property('electricChargingPoint')
            .and.to.be.a('boolean')

          done()
        })
    })

  })

  describe('GET /api/spaces/:id', () => {

    let space

    beforeEach(done => {
      Space.create(spaceData)
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
      Space.create(spaceData)
        .then(spaceData => {
          space = spaceData
          done()
        })
        .catch(done)
    })

    it('should return a 204 response', done => {
      api
        .delete(`/api/spaces/${space.id}`)
        .set({'Accept': 'application/json', 'Authorization': `Bearer ${token}`})
        .expect((res) => res.sendStatus(204), done())
    })
  })
})
