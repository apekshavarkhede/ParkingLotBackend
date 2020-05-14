var chai = require('chai')
var app = require('../server')
var chaiHttp = require('chai-http')
chai.use(chaiHttp)
var expect = require('chai').expect

describe("Testing the user API", () => {

    it("tests the base route and returns true for status", () => {
        chai
            .request(app)
            .get("/")
            .end((err, res) => {
                expect(res.body.message).to.equals("Welcome");
            })
    });

    it('given proper data when register should register', (done) => {
        chai.request(app).
            post("/register")
            .send({
                firstName: "Apeksha",
                lastName: "Varkhede",
                userEmail: "abx@gmail.com",
                password: "Apeksha123"
            })
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body.data.message).to.equals("User Register Sucessfully....check ur mail")
            })
        done()
    })

    it('given imProper data when register should not register', (done) => {
        chai.request(app).
            post("/register")
            .send({
                firstName: "abc",
                lastName: "xyz",
                userEmail: "abcxyz@gmail.com"
            })
            .end((err, res) => {
                expect(res).to.have.status(400);
            })
        done()
    })
});