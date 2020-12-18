import {Router} from 'express';
import UsersController from './controllers/UsersController'


const routes = Router();

routes.get('/users', UsersController.index);
routes.get('/users/:id', UsersController.show);
routes.post('/users', UsersController.create);
routes.get('/login', UsersController.login);

export default routes;