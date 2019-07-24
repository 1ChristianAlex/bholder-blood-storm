import app from './server/serve';
import envolvriment from './config/local';

const { BACK_END_PORT, HOSTNAME } = envolvriment;

app.listen(parseInt(BACK_END_PORT), HOSTNAME, () => {
  console.log(`http://${HOSTNAME}:${BACK_END_PORT}`, 'connect');
});
