const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const PORT = process.env.PORT || 4001;
const app = express();

app.use(express.static('public'));

app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs'
}));

app.set('view engine', '.hbs');

app.get('/', (req, res) => {
  res.render('homepage', {
    pageTitle: 'MESOC - welcome'
  })
});

app.listen(PORT, () => {
  console.log('Server is running on port 4001');
});