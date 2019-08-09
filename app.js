const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
require('dot-env');

// MODELS
// --------
const {Mural, Comment, User} = require('/models');

mongoose.connect(MONGO_URL, {useNewUrlParser: true});
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));

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
    title: 'Girl with pink glasses',
    artist: 'Unknown',
    city: 'Birmingham, UK',
    credit: 'Unknown',
    image: '/images/woman-glasses.jpg'
  },
  {
    title: "Don't be so hard on yourself",
    artist: 'WRDSMTH',
    city: 'Los Angeles, CA',
    credit: 'Matt Winkelmeyer',
    image: '/images/never-ever-giveup.jpg'
  },
  {
    title: 'The 27 Club',
    artist: 'Eduardo Kobra',
    city: 'New York, NY',
    credit: 'Unknown',
    image: '/images/the-27-club.jpg'
  }
];

app.get('/', (req, res) => {
  res.render('home');
});

// INDEX: show all
// ----------------
app.get('/murals', (req, res) => {
  res.render('murals/indexMurals', {murals: murals});
});

// CREATE: add new mural
// ----------------------
app.post('/murals', (req, res) => {
  const title = req.body.title;
  const artist = req.body.artist;
  const location = req.body.location;
  const image = req.body.image;
  const author = { id: req.user._id, username: req.user.username };
  const desc = req.body.description;
  const newMural = {
    title: title,
    artist: artist,
    location: location,
    image: image,
    author: author,
    description: desc
  };
  Mural.create(newMural, (err, newlyCreated) => {
    if (err) {
      console.log(err);
    } else {
      console.log(newlyCreated);
      res.redirect('/murals');
    }
  });
});

// NEW: show form to create
// ------------------------
app.get('/murals/new', (req, res) => {
  res.render('murals/newMural');
});

// SHOW: show single mural
// -----------------------



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
