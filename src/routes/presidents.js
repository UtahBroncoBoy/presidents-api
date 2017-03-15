import {Router} from 'Express';
import Presidents from '../data/presidents';

const app = new Router();

//return all presidents from the root route
app.route('/')
  .get((req, res) => {
  return res.json(Presidents);
});

//return democrats from the /democrats route
app.route('/democrats')
  .get((req, res) => {
    return res.json(Presidents.filter(president => president.party === 'Democratic'));
  });
export default app;

//return republicans from the /republican route
app.route('/republican')
  .get((req, res) => {
    return res.json(Presidents.filter(president => president.party === 'Republican'));
  });

//return presidents who were neither republican or democrat
app.route('/other')
  .get((req, res) => {
    return res.json(Presidents.filter(president => president.party !== 'Republican' && president.party !== 'Democratic'));
  });