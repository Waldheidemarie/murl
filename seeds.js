const mongoose = require('mongoose');
const Mural = require('./models/Mural');

const data = [
  {
    title: "You're My Butter Half",
    artist: 'John Rockwell',
    location: {
      city: 'Austin',
      state: 'TX'
    },
    credit: 'Unknown',
    image: '/images/butter-half.jpg',
    info:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusamus hic perspiciatis consectetur praesentium rem assumenda, illo unde cupiditate similique nisi repellendus veritatis, obcaecati, quae voluptatibus ad id eos? Officia!'
  },
  {
    title: 'Greetings From Austin',
    artist: 'Todd Sanders',
    location: {
      city: 'Austin',
      state: 'TX'
    },
    credit: 'Unknown',
    image: '/images/greetings-austin.jpg',
    info:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusamus hic perspiciatis consectetur praesentium rem assumenda, illo unde cupiditate similique nisi repellendus veritatis, obcaecati, quae voluptatibus ad id eos? Officia!'
  },
  {
    title: 'Double Crossed',
    artist: 'D*Face',
    location: {
      city: 'New York',
      state: 'NY'
    },
    credit: 'Unknown',
    image: '/images/double-crossed.jpg',
    info:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusamus hic perspiciatis consectetur praesentium rem assumenda, illo unde cupiditate similique nisi repellendus veritatis, obcaecati, quae voluptatibus ad id eos? Officia!'
  },
  {
    title: 'Jeremiah the Innocent',
    artist: 'Daniel Johnston',
    location: {
      city: 'Austin',
      state: 'TX'
    },
    credit: 'Unknown',
    image: '/images/hi-how-are-you.jpg',
    info:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusamus hic perspiciatis consectetur praesentium rem assumenda, illo unde cupiditate similique nisi repellendus veritatis, obcaecati, quae voluptatibus ad id eos? Officia!'
  },
  {
    title: 'I love you so much',
    artist: 'Amy Cook',
    location: {
      city: 'Austin',
      state: 'TX'
    },
    credit: 'Unknown',
    image: '/images/i-love-you-so-much.jpg',
    info:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusamus hic perspiciatis consectetur praesentium rem assumenda, illo unde cupiditate similique nisi repellendus veritatis, obcaecati, quae voluptatibus ad id eos? Officia!'
  },
  {
    title: "Don't be so hard on yourself",
    artist: 'WRDSMTH',
    location: {
      city: 'Los Angeles',
      state: 'CA'
    },
    credit: 'Matt Winkelmeyer',
    image: '/images/never-ever-giveup.jpg',
    info:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusamus hic perspiciatis consectetur praesentium rem assumenda, illo unde cupiditate similique nisi repellendus veritatis, obcaecati, quae voluptatibus ad id eos? Officia!'
  },
  {
    title: 'The 27 Club',
    artist: 'Eduardo Kobra',
    location: {
      city: 'New York',
      state: 'NY'
    },
    credit: 'Unknown',
    image: '/images/the-27-club.jpg',
    info:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusamus hic perspiciatis consectetur praesentium rem assumenda, illo unde cupiditate similique nisi repellendus veritatis, obcaecati, quae voluptatibus ad id eos? Officia!'
  },
  {
    title: "Don't be a dick",
    artist: 'Meg Zanny',
    location: {
      city: 'Los Angeles',
      state: 'CA'
    },
    credit: 'Unknown',
    image: '/images/dont-be-dick.jpg',
    info:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusamus hic perspiciatis consectetur praesentium rem assumenda, illo unde cupiditate similique nisi repellendus veritatis, obcaecati, quae voluptatibus ad id eos? Officia!'
  },
  {
    title: 'Woman drinking with zombie',
    artist: 'D*Face',
    location: {
      city: 'Brooklyn',
      state: 'NY'
    },
    credit: 'Unknown',
    image: '/images/drink-zombie.jpg',
    info:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusamus hic perspiciatis consectetur praesentium rem assumenda, illo unde cupiditate similique nisi repellendus veritatis, obcaecati, quae voluptatibus ad id eos? Officia!'
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




// IMPORTED FROM IBB
//====================
// {
//   title: "You're My Butter Half",
//   artist: "John Rockwell",
//   city: "Austin, TX",
//   credit: "Unknown",
//   image: "https://ibb.co/qgWG9fV"
// },
// {
//   title: "Jeremiah the Innocent",
//   artist: "Daniel Johnston",
//   city: "Austin, TX",
//   credit: "Unknown",
//   image: "https://ibb.co/9HLb10K"
// },
// {
//   title: "I love you so much",
//   artist: "Amy Cook",
//   city: "Austin, TX",
//   credit: "Unknown",
//   image: "https://ibb.co/mHk2m75"
// },
// {
//   title: "Greetings from Austin",
//   artist: "Todd Sanders",
//   city: "Austin, TX",
//   credit: "Unknown",
//   image: "https://ibb.co/C2rJrrg"
// },
// {
//   title: "Don't be a dick",
//   artist: "Meg Zanny",
//   city: "Los Angeles, CA",
//   credit: "Unknown",
//   image: "https://ibb.co/44h9hZL"
// },
// {
//   title: "Woman drinking with zombie",
//   artist: "D*Face",
//   city: "Brooklyn, NY",
//   credit: "Unknown",
//   image: "https://ibb.co/wYF4NRV"
// },
// {
//   title: "Girl with pink glasses",
//   artist: "Unknown",
//   city: "Birmingham, UK",
//   credit: "Unknown",
//   image: "https://ibb.co/album/iw4iov"
// },
// {
//   title: "Don't be so hard on yourself",
//   artist: "WRDSMTH",
//   city: "Los Angeles, CA",
//   credit: "Matt Winkelmeyer",
//   image: "https://ibb.co/fSm2RTn"
// },
// {
//   title: "The 27 Club",
//   artist: "Eduardo Kobra",
//   city: "New York, NY",
//   credit: "Unknown",
//   image: "https://ibb.co/xS7CvFZ"
// }