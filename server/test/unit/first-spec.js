var app 		= require('../spec-helper');

var chai 		= require('chai');
// var should 	= chai.should;
var expect 	= chai.expect;
var assert 	= require('power-assert');
var sinon 	= require('sinon');
var request = require('co-supertest').agent(app.listen());

// should();

describe('/ endpoint', function() {
  it('should return Hello, World', function *(done){
    var res = yield request.get('/').expect(200).end();
    expect(res.text).to.equal('Hello, World');
  });
});

it('should create an object', function *(done) {
  var object = {ziggity: 'zap'};
  var res = yield request.post('/').send(object).expect(201).end();
  expect(res.body.created_at).to.exist;
  expect(res.body.ziggity).to.equal('zap');
});

describe('Module test', function () {
	beforeEach(function (done) {
		//setup

		done();
	});

	afterEach(function (done) {
		//teardown

		done();
	});
	
	describe('#function to test', function() {
		it('should fail', function(done) {
			expect(1 + 2).to.eql(3);
			done();
		});
	});
});

module.exports = this;
