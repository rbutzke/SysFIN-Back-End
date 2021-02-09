const express = require('express');
const cors = require('cors');
const app = express();

const index = require('./routes/index');
const categoryRoutes = require('./routes/category');
const entryRoutes = require('./routes/entry');
const costcenterRoutes = require('./routes/costcenter');
const companyRoutes = require('./routes/company');
const stockRoutes = require('./routes/stock');
const clientRoutes = require('./routes/client');
const userRoutes = require('./routes/user');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use(index);
app.use('/api/',categoryRoutes);
app.use('/api/',entryRoutes);
app.use('/api/',costcenterRoutes);
app.use('/api/',companyRoutes);
app.use('/api/',stockRoutes);
app.use('/api/',clientRoutes);
app.use('/api/',userRoutes);

module.exports = app;