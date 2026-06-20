const express = require('express');
const config = require('./config');
const auth = require('./middleware/auth');
const accountRoutes = require('./routes/accounts');

const app = express();
app.use(express.json());
app.use(auth);

app.use('/accounts', accountRoutes);

app.get('/health', (_req, res) => res.json({ status: 'ok' }));

app.listen(config.port, () => {
  console.log(`account-services listening on :${config.port}`);
});

module.exports = app;
