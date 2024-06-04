import Router from 'express';
import UsersController from "./Controllers/UsersController.js";
import AdminUsersController from './Controllers/AdminUsersController.js';

const router = new Router();

router.post('/users', UsersController.create);
router.get('/users', UsersController.getAll);
router.get('/users/:id', UsersController.getOne);
router.put('/users', UsersController.update);
router.delete('/users/:id', UsersController.delete);

router.post('/registration', AdminUsersController.registration);
router.post('/login', AdminUsersController.login);
router.get('/admins', AdminUsersController.getAll);

export default router;
