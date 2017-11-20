const chai = require('chai');
const chaiHttp = require('chai-http');

const should = chai.should();
const assert = chai.assert;

const app = 'http://localhost:3000';

chai.use(chaiHttp);

process.env.NODE_ENV = 'test';
let stringSearch = 'Culpa';


describe('/GET books', function() {
    it('Return all books', function(done) {
        chai.request(app)
        .get('/book')
        .end(function(error, res) {
            res.should.have.status(200);
            res.body.should.be.a('array');
            res.body.length.should.be.not.equal(0);
            done();
        });
    });
});

describe('/GET find books by title', function() {
    it('Return all books filtered', function(done) {
        chai.request(app)
        .get(`/book/by-title/${stringSearch}`)
        .end(function(error, res) {
            res.should.have.status(200);
            res.body.should.be.a('array');
            assert.isAtLeast(res.body.length, 1);
            done();
        });
    });
});

describe('/GET find books by title and valid empty array', function() {
    it('Return empty array of books filtered', function(done) {
        chai.request(app)
        .get(`/book/by-title/sdvsdwlvofdkl`)
        .end(function(error, res) {
            res.should.have.status(200);
            res.body.should.be.a('array');
            assert.isEmpty(res.body);
            done();
        });
    });
});

describe('/GET valid properties in find books by title', function() {
    it('Valid properties book', function(done) {
        chai.request(app)
        .get(`/book/by-title/${stringSearch}`)
        .end(function(error, res) {
            res.should.have.status(200);
            res.body.should.be.a('array');
            assert.isAtLeast(res.body.length, 1);
            res.body[0].should.have.property('_id');
            res.body[0].should.have.property('title');
            res.body[0].should.have.property('yearPublished');
            res.body[0].should.have.property('author');
            res.body[0].should.have.property('price');
            res.body[0].should.have.property('image');
            done();
        });
    });
});

describe('/GET find books by author', function() {
    it('Return all books filtered by author', function(done) {
        stringSearch = '@fMcGee';
        chai.request(app)
        .get(`/book/by-author/${stringSearch}`)
        .end(function(error, res) {
            res.should.have.status(200);
            res.body.should.be.a('array');
            assert.isAtLeast(res.body.length, 1);
            done();
        });
    });
});

describe('/GET find books by author and valid empty array', function() {
    it('Return empty array of books filtered by author', function(done) {
        chai.request(app)
        .get(`/book/by-author/sdvsdwlvofdkl`)
        .end(function(error, res) {
            res.should.have.status(200);
            res.body.should.be.a('array');
            assert.isEmpty(res.body);
            done();
        });
    });
});