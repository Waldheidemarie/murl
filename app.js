
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('Welcome to Murals App');
});


app.listen(port, () => {
  console.log(`Murals app listening on port: ${port}`);
});