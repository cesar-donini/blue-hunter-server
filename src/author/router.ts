import { Router } from 'express';
import { authorController } from './controller';

export const authorRouter = Router();

authorRouter.post('/', authorController.save);