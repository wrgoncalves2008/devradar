const { Router } = require('express');
const devcontroller = require('./controllers/DevController')
const searchcontroller = require('./controllers/SearchController');

const routes = Router();

routes.get('/devs', devcontroller.index);
routes.post('/devs', devcontroller.store);

routes.get('search', searchcontroller.index);



module.exports = routes;