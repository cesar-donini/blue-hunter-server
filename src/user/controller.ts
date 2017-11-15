import { Request, Response } from 'express';
import { userRepository } from './repository';

class UserController {

    public async findByName(req: Request, resp: Response) {
        const users = await userRepository.findByName(req.params.name);
        resp.status(200).json(users);
    }

    public async save(req: Request, resp: Response) {
        const user = await userRepository.save(req.body);
        resp.status(201).json(user);
    }

}

export const userController = new UserController();