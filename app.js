require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

// const indexRouter = require('./routes/index');
const siswaRouter = require('./routes/siswa');
const authRouter  = require('./routes/auth');
const profilRouter= require('./routes/profil');
const kloterRouter= require('./routes/kloter');

const app = express();

app.use(logger('dev'));
app.use(cors({ credentials:true, origin:'http://localhost:3000' }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('', authRouter);
app.use('/siswa', siswaRouter);
app.use('/profile', profilRouter);
app.use('/kloter', kloterRouter);

module.exports = app;
