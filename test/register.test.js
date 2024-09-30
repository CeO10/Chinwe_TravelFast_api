import request from 'supertest';
import appConfig from '../src/config/app.config.js';


beforeEach(async () => {
    updateENV ({NODE_ENV: 'Test'});
    connectToDatabase()
});

describe ("Test for register endpoints", () => {
    test ("It should register a new user", () => {
        const response = request(app).post("api/v1/auth/register").send({
            email: 'josephine@example.com',
            password: 'pass',
            role: 'user'
        })
    })

    expect(response.status).toBe(201);
    expect(response.body.status).toBe(true);
    expect(response.body.message).toBe("User successfully registered")
})