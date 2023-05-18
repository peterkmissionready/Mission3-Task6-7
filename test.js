const request = require('supertest')('http://localhost:3000');
describe('Users API', () => {
  it('GET /risk', () => {
  // Make a GET request to the users route 
  const data= {
    sentence:'I had a crash last year.',
  }
  return request
  .get('/risk')
  .send(data)
  .then((res) => {
    // console.log(res);
    assert.equal(res.body.riskRating, 1);
    // expect(res.body.rating).toBe(1);

  // })get('/risk/I has a crash last year').expect(200);
  });
});

/*
const request = require('supertest')('https://localhost:3000');
describe('Users API', () => {
it('GET /risk', () => {
// Make a GET request to the users route 
const data= {
  sentence:'I had a crash last year',
}
return request.get('/risk/I has a crash last year').expect(200);
});
});

*/
const assert = require('chai').assert;
});
/*
it('GET /risk', () =>{
  // Make a GET request to the users route 
  return request
  .get('/risk/999')
  .expect(404)
  .then((res) => {
   // assert data bieng return to not be empty
   assert.isNotEmpty(res.body);
 });
});

*/
