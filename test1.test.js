//Test Case 2 – Get single user, Update user
import { expect } from "@playwright/test";
import request from "supertest";

const baseUrl = 'https://reqres.in/api/';

//Step 1: Get – Single User
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


//Step 2: PUT – Update
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
});

