const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
require('dot-env');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));

// DB
// --------
const Mural = require('./models/Mural');
const seedDB = require('./seeds');
mongoose.Promise = global.Promise;
seedDB();

// HOME
// ---------------
app.get('/', (req, res) => {
  res.render('home');
});

// INDEX: show all
// ----------------
app.get('/murals', (req, res) => {
  Mural.find({}, (err, Murals) => {
    if (err) console.log(err);
    else return res.render('murals/indexMurals', {murals: Murals});
  });
});

// CREATE: add new mural
// ----------------------
app.post('/murals', (req, res) => {
  const title = req.body.title;
  const artist = req.body.artist;
  const location = req.body.location;
  const image = req.body.image;
  // const author = { id: req.user._id, username: req.user.username };
  const credit = req.body.credit;
  const info = req.body.info;
  const newMural = {
    title: title,
    artist: artist,
    location: {
      city: city,
      state: state
    },
    image: image,
    credit: credit,
    info: info
  };

  Mural.create(newMural, (err, newlyCreated) => {
    if (err) console.log(err);
    else {
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



// CATCH ALL
// -------------
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

// SERVER
//-----------
let server;

const runServer = (dbUrl=process.env.MONGO_URL, port=process.env.PORT, ip=process.env.IP) => {
  return new Promise((resolve, reject) => {
    mongoose.connect(dbUrl, {useNewUrlParser: true}, err => {
      if (err) return reject(err);
      server = app.listen(port, () => {
          console.log(`Murl app listening on port: ${port} at ${ip}`);
          resolve();
        }).on('error', err => {
          mongoose.disconnect();
          reject(err);
        });
    });
  });
};

const closeServer = () => {
  return mongoose.disconnect().then(() => {
    return new Promise((resolve, reject) => {
      console.log('Closing server');
      server.close(err => {
        if (err) {
          reject(err);
          return;
        }
        resolve();
      });
    });
  });
};

if (require.main === module) {
  runServer().catch(err => {
    console.log('Handling error:', err);
  });
}

module.exports = {runServer, app, closeServer};


// PREVIOUS CONNECTION
// -------------------
// app.listen(port=process.env.PORT, ip=process.env.IP, () => {
//   console.log(`Murl app listening on port: ${port} at ${ip}`);
// });



