import { IUser } from './model';
import { UserModel } from './schema';

class UserRepository {

    public async findByName(name: string) : Promise<IUser[]> {
        const users = <IUser[]> await UserModel.find({
            "fullName" : {$regex : `.*${name}.*`, $options: 'i'}
        });
        return users;
    }

    public async find() : Promise<IUser[]> {
        const users = <IUser[]> await UserModel.find();
        return users;
    }

    public async save(user: IUser) : Promise<IUser> {
        user = <IUser> await new UserModel({
            _id : user._id,
            fullName : user.fullName,
            gender : user.gender,
            age: user.age,
            email : user.email,
            phone: user.phone,
            username: user.username
        }).save();
        return user;
    }

}

export const userRepository = new UserRepository();