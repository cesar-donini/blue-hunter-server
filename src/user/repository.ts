import { IUser } from './model';
import { UserModel } from '../mongo/schemas';

class UserRepository {

    public async findByName(name: string) : Promise<IUser[]> {
        const users = <IUser[]> await UserModel.find({
            "name" : {$regex : `.*${name}.*`, $options: 'i'}
        });
        return users;
    }

    public async save(user: IUser) : Promise<IUser> {
        user = <IUser> await new UserModel({
            name : user.name,
            gender : user.gender,
            mail : user.mail,
            bornDate : user.bornDate
        }).save();
        return user;
    }

}

export const userRepository = new UserRepository();