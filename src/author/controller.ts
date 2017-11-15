import { Request, Response } from 'express';
import { authorRepository } from './repository';

class AuthorController {

    public async save(req: Request, resp: Response) {
        const author = await authorRepository.save(req.body);
        resp.status(201).json(author);
    }

}

export const authorController = new AuthorController();