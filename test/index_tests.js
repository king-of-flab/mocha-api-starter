const request = require('supertest')
const expect = require('chai').expect
const app = require('../index')

describe('GET static pages', function () {
  describe('/', function () {
    it('should response 200', function (done) {
      request(app)
      .get('/')
      .expect(200,done)
    })
  })

  describe('/about', function () {
    it('should response 404', function (done) {
      request(app)
      .get('/about')
      .expect(404,done)
    })
  })

  describe('CRUD taco test', function () {
    describe('GET/tacos', function () {
      it('should response 200', function (done) {
        request(app)
        .get('/tacos')
        .end(function (err, response) {
          console.log('response body', response.body)
          expect(response.body).to.be.an('array')
          done ()
        })
      })
    })
  })

})
