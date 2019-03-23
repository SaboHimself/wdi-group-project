const mongoose = require('mongoose')
const env = require('../config/environment')
const Space = require('../models/space')
const User =  require('../models/user')

mongoose.connect(env.db.development , { useNewUrlParser: true }, (err, db) => {

  db.dropDatabase()

  User.create([
    {
      username: 'Harry1',
      email: 'harrymcdonald@hotmail.com',
      password: 'harry1',
      passwordConfirmation: 'harry1',
      number: '+447345928372'
    },
    {
      username: 'JaneOwen',
      email: 'jc123@hotmail.co.uk',
      password: 'passwordJane',
      passwordConfirmation: 'passwordJane',
      number: '+447345928374'
    },
    {
      username: 'MichealOgrant',
      email: 'mikeyj@hotmail.com',
      password: 'mo246',
      passwordConfirmation: 'mo246',
      number: '+447345948372'
    },
    {
      username: 'DavetheRave',
      email: 'davidtinkleberry@yahoo.co.uk',
      password: 'tinkers1',
      passwordConfirmation: 'tinkers1',
      number: '+447745928372'
    },
    {
      username: 'JohnSmith',
      email: 'johnnyboy@hotmail.com',
      password: 'harry1',
      passwordConfirmation: 'harry1',
      number: '+447345928372'
    },
    {
      username: 'Martinorigin',
      email: 'missionstatement@hotmail.com',
      password: 'Statement1',
      passwordConfirmation: 'Statement1',
      number: '+447935263374'
    },
    {
      username: 'Luke-Skywalker',
      email: 'thelastjedi@gmail.com',
      password: 'lightsaber',
      passwordConfirmation: 'lightsaber',
      number: '+447823776732'
    },
    {
      username: 'Adam_O_Reilly',
      email: 'adders90@gmail.com',
      password: 'adam',
      passwordConfirmation: 'adam',
      number: '+447283494883'
    },
    {
      username: 'ArmyCadet89',
      email: 'camoflauge@gmail.com',
      password: 'camo',
      passwordConfirmation: 'camo',
      number: '+447283493283'
    },
    {
      username: 'MathewMcdonald',
      email: 'MathewMc@gmail.com',
      password: 'Matty',
      passwordConfirmation: 'Matty',
      number: '+447283493883'
    }
  ])
    .then(user => {
      return Space.create([
        {
        // mini-map on profile site?, people only give first part  of address? google street view??
          location: '83 Upper St, London, N1 0NU',
          type: 'Sheletered drive-way',
          suitability: 'Motorcyle, Car, Bicycle, Van',
          images: ['https://static.yourparkingspace.co.uk/large/3584d3ecb8f045f2c538d3886b663e7b.jpeg', 'https://static.yourparkingspace.co.uk/large/8813c357bbcdbe36010e350d7ffadd2d.jpeg', 'https://static.yourparkingspace.co.uk/large/e7ae6513832863ccf5838aa72d053612.jpeg'],
          availability: true,
          description: 'One space located on Upper Street in London. The space is close to Central London tube stations allowing easy access to most places. The space is suitable for vehicles up to the size of a Van. On-site there is Electric Charging and Disabled Access. The space is available 24 hours on all days. The parking is available alongside our street (Upper Street) and many neighbouring areas (Highbury & Islington) and there is usually plenty of parking space available.',
          electricChargingPoint: true,
          comments: { text: ['Perfect parking spot in a good location, highly recommend', 'Desperatly needed a parking spot, found this one and booked it in less than 10 seconds.', 'Nice driveway, felt like I knew my car will be safe when I first saw it', 'Bit of a tight squeeze, but well sheltered']},
          price: 4,
          owner: user[0]
        },
        {
          location: '47, FLAT 6, Hollycroft Avenue, Camden Town, Greater London, London, NW3 7QJ',
          type: 'Roadside parking',
          suitability: 'Car, Motorcyle, Small van',
          images: ['https://static.yourparkingspace.co.uk/large/676c3655480fdaf8df01c82972271c2e.png', 'https://static.yourparkingspace.co.uk/large/f9bddbc00a7aaf64b68c9ca961e177fe.png'],
          availability: true,
          description: 'Parking spaces located on Shaping Change Ltd in Camden London. The spaces are close to St Bedes Hall. The spaces are suitable for vehicles up to the size of a Large - (4x4). On-site there is Allocated Space and Security Lighting. The spaces are available 24 hours on all days.',
          electricChargingPoint: true,
          comments: { text: ['Had a problem with fitting my car into this small place, surrounding houses make it hard to fit your car in to.', 'good price for where its located, found it hard to reverse park into but happy with what i paid for']},
          price: 3,
          owner: user[0]
        },
        {
          location: '54 Islington Park St, London, N1 1PX',
          type: 'Underground parking',
          suitability: 'Motorcyle, Hatchback, Car, Not 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/e0810ece91b52a6ace3c701e0943d1a2.png', 'https://static.yourparkingspace.co.uk/large/b085ebf836699f666c89cb5018cf4621.png', 'https://static.yourparkingspace.co.uk/large/30690419b7308bdc2f7a5fc973e9d183.png'],
          availability: true,
          description: 'Parking spaces located on Islington Park st in London. The spaces are close to Hidden London (TFL Down Street Churchills secret station), Frost & Reed Ltd and Curzon Mayfair. The spaces are suitable for vehicles up to the size of a Large - (4x4). On-site there is Security Guards and Underground Parking. The spaces are available 6AM-7PM on weekdays. Secure underground car park located in Mayfair, excellent central spaces available to rent both daily and monthly. Located a 5 minute walk from Hyde Park and Hyde Park corner station so perfect parking for all nearby attractions. This car park is not open Weekends or Bank Holidays. Overnight parking is not permitted. Height Restriction: 2.50m',
          electricChargingPoint: true,
          comments: { text: ['Perfect safe parking spot, in a good location, highly recommend', 'Could rest and relax knowing my car was parked in a locked garage', 'Huge space, ideal for the weekend. Id rather pay slightly higher for a safer spot']},
          price: 8,
          owner: user[1]
        },
        {
          location: '207 Upper Street, Islington, LONDON, N1 1RL',
          type: 'Underground parking',
          suitability: 'Motorcyle, Hatchback, Car, 4X4, small van',
          images: ['https://static.yourparkingspace.co.uk/large/131618fd5ea7047b7a9ea02acd1ca4e9.jpeg', 'https://static.yourparkingspace.co.uk/large/69bef4309e5874edb751f49e520b8864.png'],
          availability: false,
          description: 'Parking available at a central London basement car park located on Upper Street in Mayfair. Located right by the BT Tower, and a 5 minute walk from Great Portland Street tube station, 8 minute walk to Oxford Circus, 5 minute walk to University College London. The car park is located inside the Congestion Charge Zone. If you drive a van please be aware there is a height restriction of 1.90m in place at this car park. When booking monthly you will be contacted to provide your postal address as a permit will need to be sent to you. Please note, it takes CitiPark 2 full working days to process a monthly booking request, so your start date may need to be adjusted to accommodate this. Any monthly bookings received after 3pm Friday, will not be processed until the following Monday, and therefore you start date will need to be adjusted to ensure you receive the permit',
          electricChargingPoint: true,
          comments: { text: ['Came back to my vehicle after leaving it there for the weekend, my wingmirror was missing, didnt get any compensation, do not use', 'Dark and dingy underground parking, not the most secure spot']},
          price: 2,
          owner: user[2]
        },
        {
          location: 'Holland Street, London W8',
          type: 'Sheletered driveway',
          suitability: 'Motorcyle, Hatchback, Estate, Car, Not 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/ed9bdf7a4981bfa7c5e49b0d61b2b997.png'],
          availability: true,
          description: 'Parking available on driveway, located within a 25 minute walk to Kings Cross Station (ideal for Eurostar trips) and a 20 minute walk to the Emirates. The space can be accessed 24/7. Suitable for vehicles up to the size of a Large - (4x4). Important notice: The full address of the parking space/garage/car park will be provided following a successful booking',
          electricChargingPoint: true,
          comments: { text: ['Quite far away from where we wanted to be but not a bad spot, for a good price.', 'Had no problems parking here, highly recommend']},
          price: 9,
          owner: user[3]
        },
        {
          location: 'Marylebone Road, London NW1',
          type: 'Roadside parking',
          suitability: 'Motorcyle, Hatchback, Car, Not 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/198dae89307d1cc86e0f31b6bb53f465.jpeg', 'https://static.yourparkingspace.co.uk/large/8313bf03771953cce4924910772b652f.jpeg'],
          availability: true,
          description: 'Parking spaces located on Marylebone Road in London . The spaces are suitable for vehicles up to the size of a Large - (4x4). On-site there is Covered Parking, CCTV and Security Guards. The spaces are available 6:30AM-7PM on weekdays. Road-side park available in Farringdon. Great location, walking distance to City University London. Close to Sadlers Wells Theatre. IMPORTANT: Only open Monday to Friday from 6.30am to 7pm - you cannot enter/exit the car park outside of these hours.',
          electricChargingPoint: true,
          comments: { text: ['Luxury location.', 'Slightly concerned leaving my car on the side of the road for the weekend, but very nice area', 'No problems parking here, worked out well in the end']},
          price: 11,
          owner: user[4]
        },
        {
          location: 'Seymour Place, London W1H',
          type: 'Garage',
          suitability: 'Motorcyle, Hatchback, Car, Not 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/e0810ece91b52a6ace3c701e0943d1a2.png', 'https://static.yourparkingspace.co.uk/large/b085ebf836699f666c89cb5018cf4621.png', 'https://static.yourparkingspace.co.uk/large/30690419b7308bdc2f7a5fc973e9d183.png'],
          availability: true,
          description: 'Parking spaces located on Ebury Bridge Road in London . The spaces are close to Peace and Colour Gallery, 88-GALLERY and Movie Starr. The spaces are suitable for vehicles up to the size of a Large - (4x4). On-site there is Covered Parking.The spaces are available 24 hours on all days. Only vehicles up to the size of a 4x4 are permitted',
          electricChargingPoint: true,
          comments: { text: ['Perfect safe parking spot, in a good location, highly recommend', 'Could rest and relax knowing my car was parked in a locked garage', 'Huge space, ideal for the weekend. Id rather pay slightly higher for a safer spot']},
          price: 8,
          owner: user[5]
        },
        {
          location: 'Fursecroft, George Street, Marble Arch, London W1H',
          type: 'Garage',
          suitability: 'Motorcyle, Hatchback, Car, Not 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/c8e5e3fd5f6252f4602ef60fc6aa9f0d.jpeg, https://static.yourparkingspace.co.uk/large/6beb1e0f8d568bc4fa8129c7d2f2dae3.jpeg'],
          availability: true,
          description: 'Parking spaces located on George Street in London . The spaces are suitable for vehicles up to the size of a Large - (4x4). On-site there is Covered Parking, CCTV, Security Lighting and Security Guards. The spaces are available 24 hours on all days. Secure car park located in the heart of central London. Situated just off Oxford Street this car park is perfect for anyone shopping or visiting the nearby attractions, including Hyde Park. Spaces available for both daily and monthly bookings. Covered parking, open 24/7, with CCTV access. If you\'\re driving a van please be aware that there is a height restriction of 1.98m. The car park is located inside the Congestion Charge Zone.',
          electricChargingPoint: true,
          comments: { text: ['Easy to find and fairly near to where i needed to get to. Lots of good sized spaces when i arrived at 0745. i would recommend pre-booking and will be back again next week', 'best car park ever best value wide spaces secure staff very attentive could be cleaner but then again people could be less of pigs', 'Huge space, ideal for the weekend. Id rather pay slightly higher for a safer spot']},
          price: 12,
          owner: user[6]
        },
        {
          location: 'Abbey Road, London NW8',
          type: 'Garage',
          suitability: 'Motorcyle, Hatchback, Car, 4X4, Estate',
          images: ['https://static.yourparkingspace.co.uk/large/e7d09757461a0b11f2ec6610f35800f7.png'],
          availability: true,
          description: 'One allocated space located on Abbey Road in London. The space is suitable for vehicles up to the size of a Large - (4x4). On-site there is Covered Parking, CCTV, Security Lighting and Underground Parking. The space is available 24 hours on all days. The space is accessed via a security fob which will be provided to you on arrival.',
          electricChargingPoint: true,
          comments: { text: ['Possibly the cheapest parking for lengths up to 4-5hrs. Very secure underground parking and easy to set up contact with conceirge.', 'CAmazing spot, very private!', 'Very private, secure and good price']},
          price: 10,
          owner: user[7]
        },
        {
          location: 'Neville Court, London NW8',
          type: 'Garage',
          suitability: 'Motorcyle, Hatchback, Car, Not 4X4',
          images: ['https://static.yourparkingspace.co.uk/large/f2f0b786a927118614ad1c92fbe54929.png', 'https://static.yourparkingspace.co.uk/large/2373d0eadd01367eda7fc25de1673e6a.png', 'https://static.yourparkingspace.co.uk/large/bf01bd1b495d989a4bb1c50d9c93297e.png'],
          availability: true,
          description: 'Parking available at a central London basement car park located on Clipstone Street in Clipstone Mews. Located right by the BT Tower, and a 5 minute walk from Great Portland Street tube station, 8 minute walk to Oxford Circus, 5 minute walk to University College London. The car park is located inside the Congestion Charge Zone. If you drive a van please be aware there is a height restriction of 1.90m in place at this car park.',
          electricChargingPoint: true,
          comments: { text: ['Prepaid on line and all was well. Needed to extend time by half hour so did this on line and paid the extra required and received reciept and verification of extended time. On exiting 10 minutes before expiry time the ticket machine asked for £6 extra which I reluctantly paid as I was in a hurry YPS EDIT: Funds refunded', 'For parking in central London, I thought this was good value. The information on entry and exit procedure worked well. however it is a bit dark and dingy, compared to the most modern places', 'Huge space, ideal for the weekend. Id rather pay slightly higher for a safer spot']},
          price: 8,
          owner: user[8]
        }
      ])
        .then(spaces => console.log(`${spaces.length} spaces created`))
        .catch(err => console.log(err))
        .finally(() => mongoose.connection.close())
    })
})
