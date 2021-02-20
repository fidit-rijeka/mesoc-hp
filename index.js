const express = require('express');
const exphbs = require('express-handlebars');
const dotenv = require('dotenv');

// Load enviroment variables
dotenv.config({ path: "./config/config.env" });

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
    pageTitle: 'MESOC - welcome',
    webApp: `${process.env.WEBAPP}`,
    expressDomain: `${process.env.EXPRESS_DOMAIN}`
  })
});


// Privacy
app.get('/privacy', (req, res) => {
  res.render('privacy', {
    pageTitle: 'MESOC - Privacy',
    webApp: `${process.env.WEBAPP}`
  })
});

// Terms and conditions
app.get('/termsandconditions', (req, res) => {
  res.render('termsandconditions', {
    pageTitle: 'MESOC - Terms and conditions',
    webApp: `${process.env.WEBAPP}`
  })
});

app.listen(PORT, () => {
  console.log('Server is running on port 4001');
});