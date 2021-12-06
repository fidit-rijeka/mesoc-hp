const express = require('express');
const exphbs = require('express-handlebars');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

// Load enviroment variables
dotenv.config({ path: "./config/config.env" });

const PORT = process.env.PORT || 4001;

const app = express();

app.use(express.static('public'));

app.use(cookieParser());

app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs'
}));

app.set('view engine', '.hbs');

const getCookieConsent = (req, res, next) => {
  const { cookies } = req;
  if('mesoc_cca' in cookies) {
    consentAccepted = 'none';
  } else {
    consentAccepted = 'block';
  }
  next();
};

app.get('/', getCookieConsent, (req, res) => {
  res.render('homepage', {
    pageTitle: 'MESOC - welcome',
    webApp: `${process.env.WEBAPP}`,
    expressDomain: `${process.env.EXPRESS_DOMAIN}`,
    cookieConsent: consentAccepted
  })
});


// Privacy
app.get('/privacy', getCookieConsent, (req, res) => {
  res.render('privacy', {
    pageTitle: 'MESOC - Privacy',
    webApp: `${process.env.WEBAPP}`,
    cookieConsent: consentAccepted
  })
});

// Terms and conditions
app.get('/termsandconditions', getCookieConsent, (req, res) => {
  res.render('termsandconditions', {
    pageTitle: 'MESOC - Terms and conditions',
    webApp: `${process.env.WEBAPP}`,
    cookieConsent: consentAccepted
  })
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});