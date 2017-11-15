import { Router } from 'express';
import { UserController } from './controller';

export const userRouter = Router();

const userController = new UserController();

userRouter.use('/user/by-name/:userName', userController.findByUserName);