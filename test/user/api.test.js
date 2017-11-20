const chai = require('chai');
const chaiHttp = require('chai-http');

const should = chai.should();
const assert = chai.assert;

const app = 'http://localhost:3000';

chai.use(chaiHttp);

process.env.NODE_ENV = 'test';
const stringSearch = 'Nathan';


describe('/GET user', function() {
    it('Return all users', function(done) {
        chai.request(app)
        .get('/user')
        .end(function(error, res) {
            res.should.have.status(200);
            res.body.should.be.a('array');
            res.body.length.should.be.not.equal(0);
            done();
        });
    });
});

describe('/GET find users by name', function() {
    it('Return all users filtered', function(done) {
        chai.request(app)
        .get(`/user/by-name/${stringSearch}`)
        .end(function(error, res) {
            res.should.have.status(200);
            res.body.should.be.a('array');
            assert.isAtLeast(res.body.length, 1);
            done();
        });
    });
});

describe('/GET find users by name and valid empty array', function() {
    it('Return empty array of users filtered', function(done) {
        chai.request(app)
        .get(`/user/by-name/sdvsdwlvofdkl`)
        .end(function(error, res) {
            res.should.have.status(200);
            res.body.should.be.a('array');
            assert.isEmpty(res.body);
            done();
        });
    });
});

describe('/GET valid properties in find users', function() {
    it('Valid properties user', function(done) {
        chai.request(app)
        .get(`/user/by-name/${stringSearch}`)
        .end(function(error, res) {
            res.should.have.status(200);
            res.body.should.be.a('array');
            assert.isAtLeast(res.body.length, 1);
            res.body[0].should.have.property('_id');
            res.body[0].should.have.property('fullName');
            res.body[0].should.have.property('gender');
            res.body[0].should.have.property('age');
            res.body[0].should.have.property('email');
            res.body[0].should.have.property('phone');
            res.body[0].should.have.property('username');
            done();
        });
    });
});