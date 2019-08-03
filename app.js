
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');


const murals = [
  {
    title: "You're My Butter Half",
    artist: "John Rockwell",
    city: "Austin, TX",
    credit: "Unknown",
    image: "https://ibb.co/qgWG9fV"
  },
  {
    title: "Jeremiah the Innocent",
    artist: "Daniel Johnston",
    city: "Austin, TX",
    credit: "Unknown",
    image: "https://ibb.co/9HLb10K"
  },
  {
    title: "I love you so much",
    artist: "Amy Cook",
    city: "Austin, TX",
    credit: "Unknown",
    image: "https://ibb.co/mHk2m75"
  },
  {
    title: "Greetings from Austin",
    artist: "Todd Sanders",
    city: "Austin, TX",
    credit: "Unknown",
    image: "https://ibb.co/C2rJrrg"
  },
  {
    title: "Don't be a dick",
    artist: "Meg Zanny",
    city: "Los Angeles, CA",
    credit: "Unknown",
    image: "https://ibb.co/44h9hZL"
  },
  {
    title: "Woman drinking with zombie",
    artist: "D*Face",
    city: "Brooklyn, NY",
    credit: "Unknown",
    image: "https://ibb.co/wYF4NRV"
  },
  {
    title: "Girl with pink glasses",
    artist: "Unknown",
    city: "Birmingham, UK",
    credit: "Unknown",
    image: "https://ibb.co/album/iw4iov"
  },
  {
    title: "Don't be so hard on yourself",
    artist: "WRDSMTH",
    city: "Los Angeles, CA",
    credit: "Matt Winkelmeyer",
    image: "https://ibb.co/fSm2RTn"
  },
  {
    title: "The 27 Club",
    artist: "Eduardo Kobra",
    city: "New York, NY",
    credit: "Unknown",
    image: "https://ibb.co/xS7CvFZ"
  }
];

// {
//   title: "You're My Butter Half",
//   artist: "John Rockwell",
//   city: "Austin, TX",
//   credit: "Unknown",
//   image: "https://ibb.co/qgWG9fV"
// },

app.get('/', (req, res) => {
  res.send('Welcome to Murals App');
});

app.get('/murals', (req, res) => {
  res.render('indexMurals', {murals: murals});
});

// app.post('/murals', (req, res) => {
//   const title = req.body.title;
//   const artist = req.body.artist;
//   res.redirect();
// });


app.listen(port, () => {
  console.log(`Murals app listening on port: ${port}`);
});

