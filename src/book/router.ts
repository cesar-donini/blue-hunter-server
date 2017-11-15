import { Router } from 'express';
import { bookController } from './controller';

export const bookRouter = Router();

bookRouter.get('/by-author/:authorName', bookController.findByAuthorName);
bookRouter.get('/by-title/:title', bookController.findByTitle);
bookRouter.post('/', bookController.save);
