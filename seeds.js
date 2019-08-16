const mongoose = require('mongoose');
const Mural = require('./models/Mural');

const data = [
{
    title: "You're My Butter Half",
    year: 2012,
    artist: 'John Rockwell',
    location: {
      city: 'Austin',
      state: 'TX'
    },
    credit: 'Unknown',
    image: '/images/butter-half.jpg',
    info:
      'One of the most popular murals in Austin, painted on the wall of the United Way offices at 2000 E MLK Blvd, intersection with Alamo St.'
  },
  {
    title: 'Greetings From Austin',
    year: 1998,
    artist: 'Todd Sanders',
    location: {
      city: 'Austin',
      state: 'TX'
    },
    credit: 'Unknown',
    image: '/images/greetings-austin.jpg',
    info:
      'Originally painted in 1998 on the side-wall of the store Roadhouse Relics by one of the owners, was later restored in August 2013 after raising money in contributions from the local community.'
  },
  {
    title: 'Double Crossed',
    year: 2016,
    artist: 'D*Face',
    location: {
      city: 'New York',
      state: 'NY'
    },
    credit: 'Unknown',
    image: '/images/double-crossed.jpg',
    info:
      'This mural is in Soho, between Broome St and Lafayette, it was part of the LISA (Little Italy Street Art) Project'
  },
  {
    title: 'Jeremiah the Innocent',
    year: 1993,
    artist: 'Daniel Johnston',
    location: {
      city: 'Austin',
      state: 'TX'
    },
    credit: 'Unknown',
    image: '/images/hi-how-are-you.jpg',
    info:
      'Originally commissioned by the Sound Exchange record store building (now: "Thai, How Are You?"), this "frog" was painted on the corner of 21st St and Guadalupe right by the Univeristy of Texas in Austin.'
  },
  {
    title: 'I love you so much',
    year: 2010,
    artist: 'Amy Cook',
    location: {
      city: 'Austin',
      state: 'TX'
    },
    credit: 'Unknown',
    image: '/images/i-love-you-so-much.jpg',
    info:
      'Local musician and co-owner of Jo\'s coffee shop, Amy Cook, took a can of red spray paint and wrote that on the side of the wall as a message to her partner and majority store owner Liz Lambert.'
  },
  {
    title: 'Never Never Give Up',
    year: 2016,
    artist: 'Mr. Brainwash',
    location: {
      city: 'Los Angeles',
      state: 'CA'
    },
    credit: 'Matt Winkelmeyer',
    image: '/images/never-ever-giveup.jpg',
    info:
      'Uncertain if the work is officially claimed by the artist, this piece was created as a result of Leo DiCaprio winning an Oscar for his role in the 2015 filme, The Revenant'
  },
  {
    title: 'The 27 Club',
    year: 2018,
    artist: 'Eduardo Kobra',
    location: {
      city: 'New York',
      state: 'NY'
    },
    credit: 'Unknown',
    image: '/images/the-27-club.jpg',
    info:
      'An excellent work of art displaying the famous artists that died at age 27 commonly known as the 27 Club: Janis Joplin, Jim Morrison, Jimmy Hendrix, Kurt Cobain, and Amy Winehouse'
  },
  {
    title: 'Don\'t Be a Dick',
    year: 2018,
    artist: 'Meg Zany',
    location: {
      city: 'Los Angeles',
      state: 'CA'
    },
    credit: 'Unknown',
    image: '/images/dont-be-dick.jpg',
    info:
      'Reminiscing on images of Strawberry Shortcake the artist painted this piece as a message to forget social norms, do what you want but not be mean'
  },
  {
    title: 'Love Her Hate Him',
    year: 2012,
    artist: 'D*Face',
    location: {
      city: 'New York',
      state: 'NY'
    },
    credit: 'Unknown',
    image: '/images/love-her-hate-him.jpg',
    info:
      'Located at Lafayette St in Soho was painted as part of the Scope Art Fair'
  }
];

const seedDB = () => {
  return Mural.remove({}, err => {
    err ? console.log(err) : console.log('Removed murals!');
    return data.forEach(seed => {
      return Mural.create(seed, (err, mural) => {
        err ? console.log(err) : console.log(`Added ${mural.title}`);
      });
    });
  });
};

module.exports = seedDB;




// MORE MURALS
//====================
/* Template
{
  title: '',
  year: '',
  artist: '',
  location: {
     city: '',
     state: ''
   } ,
  credit: '',
  image: '',
  info: ''
}
*/

/*

{
  title: 'Billie Holiday - Life Is Beautiful',
  year: '2011',
  artist: 'Banksy',
  location: {
     city: 'Los Angeles',
     state: 'CA'
   },
  credit: 'Unknown',
  image: '/images/life-is-beautiful.jpg',
  info: 
    'There's some confusion as to when and by whom this mural was created, 
    some sources list Banksy and others Mr. Brainwash, and it looks like it 
    was painted on 2011, although the year is also uncertain.'
}

{
  title: 'Venice Kinesis',
  year: '2010',
  artist: 'Rip Cronk',
  location: {
     city: 'Venice',
     state: 'CA'
   } ,
  credit: 'Unknown',
  image: '/images/venice-kinesis.jpg',
  info: 
    'The artist updated this piece from a previous mural called "Venice Reconstituted", 
    it's all in acrylic and it is located on the west wall of Danny's Deli at the corner 
    of Winward Ave and Speedway in Venice.'
}

{
  title: 'Peace Elephant',
  year: '2011',
  artist: 'Shepherd Fairey',
  location: {
     city: 'Los Angeles',
     state: 'CA'
   } ,
  credit: 'Unknown',
  image: '/images/peace-elephant.jpg',
  info: 
    'It took the artist and his crew more than a week to create, and its located 
    at one of the walls of the West Hollywood Library.'
}

*/


