const express = require('express');
const app = express();

const bodyParser = require('body-parser');



const userRoutes = require('./routes/user');
const publicationRoutes = require('./routes/publication');
const adminRoutes = require('./routes/admin');
const path = require('path');
require('dotenv').config();




app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:root@localhost:3306/groupania');
sequelize.authenticate()
      .then(() => console.log('Connexion etablie'))
      .catch((err) => console.log('Impossible de se connecter:', err));


app.use(bodyParser.json());



app.use('/api/auth', userRoutes);
app.use('/api/publication', publicationRoutes);
app.use('/api/admin', adminRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = sequelize;
module.exports = app;