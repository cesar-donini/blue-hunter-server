import { IBook } from './model';
import { BookModel } from './schema';

class BookRepository {

    public async findByAuthorName(name: string) : Promise<IBook[]> {
        const books = <IBook[]> await BookModel.find({
            "author" : {$regex : `.*${name}.*`, $options: 'i'}
        });
        return books;
    }

    public async find() : Promise<IBook[]> {
        const books = <IBook[]> await BookModel.find();
        return books;
    }

    public async findByTitle(title: string) : Promise<IBook[]> {
        const books = <IBook[]> await BookModel.find({
            "title" : {$regex : `.*${title}.*`, $options: 'i'}
        });
        return books;
    }

    public async save(book: IBook) : Promise<IBook> {
        book = <IBook> await new BookModel({
            title : book.title,
            yearPublished: book.yearPublished,
            description : book.description,
            publishing_house : book.publishing_house,
            author : book.author,
            price: book.price,
            rating: book.rating
        }).save();
        return book;
    }

}

export const bookRepository = new BookRepository();