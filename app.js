
const express = require('express');
const app = express();
require('dot-env');

app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

const murals = [
  {
    title: "You're My Butter Half",
    artist: 'John Rockwell',
    city: 'Austin, TX',
    credit: 'Unknown',
    image: '/images/butter-half.jpg'
  },
  {
    title: 'Jeremiah the Innocent',
    artist: 'Daniel Johnston',
    city: 'Austin, TX',
    credit: 'Unknown',
    image: '/images/hi-how-are-you.jpg'
  },
  {
    title: 'I love you so much',
    artist: 'Amy Cook',
    city: 'Austin, TX',
    credit: 'Unknown',
    image: '/images/i-love-you-so-much.jpg'
  },
  {
    title: "Girl with pink glasses",
    artist: "Unknown",
    city: "Birmingham, UK",
    credit: "Unknown",
    image: "/images/woman-glasses.jpg"
  },
  {
    title: "Don't be so hard on yourself",
    artist: "WRDSMTH",
    city: "Los Angeles, CA",
    credit: "Matt Winkelmeyer",
    image: "/images/never-ever-giveup.jpg"
  },
  {
    title: "The 27 Club",
    artist: "Eduardo Kobra",
    city: "New York, NY",
    credit: "Unknown",
    image: "/images/the-27-club.jpg"
  }
];

app.get('/', (req, res) => {
  res.render('home');
});

// Index
// -------
app.get('/murals', (req, res) => {
  res.render('murals/indexMurals', {murals: murals});
});

// Create
// --------
app.post('/murals', (req, res) => {
  const title = req.body.title;
  const artist = req.body.artist;
  const city = req.body.city;
  const image = req.body.image;
  const newMural = { 
    title: title, 
    artist: artist,
    city: city,
    image: image
  };
  murals.push(newMural);
  res.redirect('/murals');
});

// New
// -------
app.get('/murals/new', (req, res) => {
  res.render('murals/newMural');
});



// SERVER
//-----------
app.listen(port=process.env.PORT, ip=process.env.IP, () => {
  console.log(`Murals app listening on port: ${port} at ${ip}`);
});




// {
//   title: "Greetings from Austin",
//   artist: "Todd Sanders",
//   city: "Austin, TX",
//   credit: "Unknown",
//   image: "/images/greetings-austin.jpg"
// },
// {
//   title: "Don't be a dick",
//   artist: "Meg Zanny",
//   city: "Los Angeles, CA",
//   credit: "Unknown",
//   image: "/images/dont-be-dick.jpg"
// },
// {
//   title: "Woman drinking with zombie",
//   artist: "D*Face",
//   city: "Brooklyn, NY",
//   credit: "Unknown",
//   image: "/images/drink-zombie.jpg"
// },
// {
//   title: "Girl with pink glasses",
//   artist: "Unknown",
//   city: "Birmingham, UK",
//   credit: "Unknown",
//   image: "/images/woman-glasses.jpg"
// },
// {
//   title: "Don't be so hard on yourself",
//   artist: "WRDSMTH",
//   city: "Los Angeles, CA",
//   credit: "Matt Winkelmeyer",
//   image: "/images/never-ever-giveup.jpg"
// },
// {
//   title: "The 27 Club",
//   artist: "Eduardo Kobra",
//   city: "New York, NY",
//   credit: "Unknown",
//   image: "/images/the-27-club.jpg"
// }
