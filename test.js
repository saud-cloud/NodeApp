/*var assert = require('assert')

function test() {
  assert.equal(2 + 2, 4);
}

if (module == require.main) require('test').run(test);
*/
var request = require(‘supertest’);
var app = require(‘__dirname/index.js’);
describe(‘GET /’, function() {
 it(‘respond with hello world’, function(done) {
 //navigate to root and check the the response is "hello world"
 request(app).get(‘/’).expect(‘hello world’, done);
 });
});
