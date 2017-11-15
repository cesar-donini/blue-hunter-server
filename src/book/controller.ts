import { Request, Response } from 'express';
import { bookRepository } from './repository';

class BookController {

    public async save(req: Request, resp: Response) {
        const book = await bookRepository.save(req.body);
        resp.status(201).json(book);
    }

    public async findByAuthorName(req: Request, resp: Response) {
        const books = await bookRepository.findByAuthorName(req.params.authorName);
        resp.status(200).json(books);
    }

    public async findByTitle(req: Request, resp: Response) {
        const books = await bookRepository.findByTitle(req.params.title);
        resp.status(200).json(books);
    }

}

export const bookController = new BookController();