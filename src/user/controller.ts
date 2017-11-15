import { Request, Response } from 'express';

export class UserController {

    public findByUserName(req: Request, resp: Response) {
        resp.status(200).send(req.params.userName);
    }

}