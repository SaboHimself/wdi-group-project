const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const Space = require('../models/space')

mongoose.connect(dbURI, { useNewUrlParser: true }, (err, db) => {
  db.dropDatabase()

  Space.create([
    {

      // mini-map on profile site?, people only give first part  of address? google street view??
      location: 'SE1',
      type: 'Sheletered drive-way',
      suitability: 'Motorcyle, Car, Bicycle',
      images: ['https://static.yourparkingspace.co.uk/large/3584d3ecb8f045f2c538d3886b663e7b.jpeg', 'https://static.yourparkingspace.co.uk/large/8813c357bbcdbe36010e350d7ffadd2d.jpeg', 'https://static.yourparkingspace.co.uk/large/e7ae6513832863ccf5838aa72d053612.jpeg'],
      availability: true,
      rating: 4.6,
      comments: ['Perfect parking spot in a good location, highly recommend', 'Desperatly needed a parking spot, found this one and booked it in less than 10 seconds.', 'Nice driveway, felt like I knew my car will be safe when I first saw it', 'Bit of a tight squeeze, but well sheltered'],
      price: 49
    },
    {
      location: 'SW1',
      type: 'Roadside parking',
      suitability: 'Car, Motorcyle, Small van',
      images: ['https://static.yourparkingspace.co.uk/large/676c3655480fdaf8df01c82972271c2e.png', 'https://static.yourparkingspace.co.uk/large/f9bddbc00a7aaf64b68c9ca961e177fe.png'],
      availability: true,
      rating: 4.3,
      comments: ['Had a problem with fitting my car into this small place, surrounding houses make it hard to fit your car in to.', 'good price for where its located, found it hard to reverse park into but happy with what i paid for'],
      price: 30
    },
    {
      location: 'W2',
      type: 'Garage',
      suitability: 'Motorcyle, Hatchback, Car, Not 4X4',
      images: ['https://static.yourparkingspace.co.uk/large/e0810ece91b52a6ace3c701e0943d1a2.png', 'https://static.yourparkingspace.co.uk/large/b085ebf836699f666c89cb5018cf4621.png', 'https://static.yourparkingspace.co.uk/large/30690419b7308bdc2f7a5fc973e9d183.png'],
      availability: true,
      rating: 4.8,
      comments: ['Perfect safe parking spot, in a good location, highly recommend', 'Could rest and relax knowing my car was parked in a locked garage', 'Huge space, ideal for the weekend. Id rather pay slightly higher for a safer spot'],
      price: 89
    },

  ])

  c
