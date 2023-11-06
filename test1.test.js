import { expect } from "@playwright/test";
import request from "supertest";

const baseUrl = 'https://reqres.in/api/';

// Step 1: Post - Register
const payload= {
  email: "eve.holt@reqres.in",
  password: "pistol"
  
}
describe('Register endpoint', () => {
	it('should return a 200 status code', async () => {
		const response = await request(baseUrl)
			.post('register')
      .send(payload)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');

    //console.log("response", response)

		expect(response.statusCode).toBe(200);
    expect(typeof response._body.token).toBe('string')
    expect(typeof response._body.id).toBe('number')

	});
})


//Step 2: Post - Login


describe('Loging endpoint', () => {
	it('should return a 200 status code', async () => {
		const response = await request(baseUrl)
			.post('login')
      .send(payload)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');

    // console.log("response", response)

		expect(response.statusCode).toBe(200);
    expect(typeof response._body.token).toBe('string')

	});
});


// Step 3: Delete
describe('Delete endpoint', () => {
	it('should return a 204 status code', async () => {
		const response = await request(baseUrl)
			.delete('delete')
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');

    //console.log("response", response)

		expect(response.statusCode).toBe(204);

	});
})

/*
describe('Single User Endpoint', () => {
	it('should return a 200 status code and valid response body', async () => {
		const response = await request(baseUrl)
			.get('users/2')
      .set('Content-Type', 'application/json')
			.set('Accept', 'application/json');

    //console.log("response", response)  
		expect(response.statusCode).toBe(200);
    expect(typeof response._body.data.id).toBe('number')
    expect(typeof response._body.data.email).toBe('string')
    expect(typeof response._body.data.first_name).toBe('string')
    expect(typeof response._body.data.last_name).toBe('string')
    expect(typeof response._body.data.avatar).toBe('string')
    expect(typeof response._body.support.url).toBe('string')
    expect(typeof response._body.support.text).toBe('string')
	});
});

const payload = {
  name: "morpheus",
  job: "zion resident"
};

describe('Update User Endpoint', () => {
  it('should return a 200 status code and valid response body after updating user', async () => {
      const response = await request(baseUrl)
          .put('users/2')
          .send(payload)
          .set('Content-Type', 'application/json')
          .set('Accept', 'application/json');
      //console.log("response", response)
      expect(response.statusCode).toBe(200);
      expect(response.body).toBeDefined();
      expect(typeof response._body.name).toBe('string')
      expect(typeof response._body.job).toBe('string')
      expect(typeof response._body.updatedAt).toBe('string')
  });
});*/
