const app = require('./server/serve');
const { BACK_END_PORT, HOSTNAME } = require('./config/local');

app.listen(BACK_END_PORT, HOSTNAME, () => {
  console.log(`http://${HOSTNAME}:${BACK_END_PORT}`, 'connect');
});
