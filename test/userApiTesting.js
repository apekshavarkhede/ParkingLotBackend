/****************************************************************************************************
 *  @Purpose        : Test Register and Login API
 *  @file           : userApiTesting.js
 *  @overview       : Added testcase for API 
 *  @author         : APEKSHA VARKHEDE
 *  @since          : 14/5/2020
 ***************************************************************************************************/

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

    it('given imProper data when register should not register', () => {
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
    })

    it('given proper data when user login should able to login', () => {
        chai.request(app).
            post("/login")
            .send({
                userEmail: "abc@gmail.com",
                password: "Apeksha123"
            })
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body.res.message).to.equals("login sucess")
            })
    })

    it('given improper data when user login should not able to login', () => {
        chai.request(app).
            post("/login")
            .send({
                userEmail: "abc@gmail.com",
                password: "Apeksha1234"
            })
            .end((err, res) => {
                expect(res).to.have.status(400);
                expect(res.body.res.message).to.equals("wrong password")
            })
    })

    it.only('given improper emailId when user login should not able to login', () => {
        chai.request(app).
            post("/login")
            .send({
                userEmail: "aaa@gmail.com",
                password: "Apeksha1234"
            })
            .end((err, res) => {
                expect(res).to.have.status(400);
                expect(res.body.res.message).to.equals("Email is not present")
            })
    })



});