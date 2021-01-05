const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');



const userRoutes = require('./routes/user');
const pubRoutes = require('./routes/pub');
const adminRoutes = require('./routes/admin');
const path = require('path');




app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

const Sequelize = require('sequelize');
const sequelize = new Sequelize('sequelize://root:pass@example.com:root/groupania')

app.use(bodyParser.json());


app.use(cors());

app.use('/api/auth', userRoutes);
app.use('/api/publications', pubRoutes);
app.use('/api/admin', adminRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));


module.exports = app;