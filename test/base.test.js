import request from 'supertest';
import Utilities from "../src/lib/utils.js";

const app = Utilities.bootstrapTestEnvironment();

describe ("Application tests", () => {
    test ("It should show the server status", async () => {
        const response = await request(app).get("/api/v1/health")
    })
    expect(response.status).toBe(200);
    expect(response.body.status).toBe(true);
    expect(response.body.message).toBe("Hello World")
});