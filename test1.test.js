//Test Case 1 – Create User – log in – delete user
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


