import { Router } from 'express';
import { userController } from './controller';

export const userRouter = Router();

userRouter.get('/user/by-name/:name', userController.findByName);

userRouter.post('/user', userController.save);