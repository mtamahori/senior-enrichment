'use strict';

const db = require('./db');
const Campus = require('./db/models/CampusModel');
const Student = require('./db/models/StudentModel');

const Promise = require('bluebird');

const students = [
  {
    name: 'Meredith Kushner',
    email: 'meri@space.place',
    campusId: 1
  },

  {
    name: 'Miles Bloomenkranz',
    email: 'miles@space.place',
    campusId: 2
  },

  {
    name: 'Adam Phillips',
    email: 'adam@space.place',
    campusId: 3
  },

  {
    name: 'Saylor Simon',
    email: 'saylor@space.place',
    campusId: 1
  },

  {
    name: 'Maeve Feinberg',
    email: 'maeve@space.place',
    campusId: 2
  },

  {
    name: 'Jake Hopes',
    email: 'jake@space.place',
    campusId: 3
  },

  {
    name: 'Alejandro Zerah',
    email: 'alejandro@space.place',
    campusId: 1
  },

  {
    name: 'Daniel Chavez',
    email: 'daniel@space.place',
    campusId: 2
  },

  {
    name: 'Sammie Spector',
    email: 'sammie@space.place',
    campusId: 3
  },

  {
    name: 'Gus Mosse',
    email: 'gus@space.place',
    campusId: 1
  },

  {
    name: 'Justin Krivda',
    email: 'justin@space.place',
    campusId: 2
  },

  {
    name: 'Annie Karakas',
    email: 'annie@space.place',
    campusId: 3
  },

  {
    name: 'Vito Nicholas',
    email: 'vito@space.place',
    campusId: 1
  },

  {
    name: 'Clara del Junco',
    email: 'clara@space.place',
    campusId: 2
  },

  {
    name: 'May Malone',
    email: 'may@space.place',
    campusId: 3
  }
]

const campuses = [
  {
    name: 'Smartbar College',
    photo: './public/campusLogos/smartbar.jpg'
  },

  {
    name: 'University of Berghain',
    photo: './public/campusLogos/berghain.jpg'
  },

  {
    name: 'De School',
    photo: './public/campusLogos/de-school.jpg'
  }
];

const seed = () =>
  Promise.all(campuses.map(campus =>
    Campus.create(campus))
  )
  .then(() =>
  Promise.all(students.map(student =>
    Student.create(student))
  ));

const main = () => {
  console.log('Syncing db...');
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding databse...');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();
