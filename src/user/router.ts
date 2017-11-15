import { Router } from 'express';
import { userController } from './controller';

export const userRouter = Router();

userRouter.get('/by-name/:name', userController.findByName);

userRouter.post('/', userController.save);