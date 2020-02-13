import request from "supertest";

import app from "../../src/app";

describe('Nodes', () => {

    it('should index nodes is a list', async () => {
        const response = await request(app).get('/nodes');

        expect(response.status).toBe(200);

        expect(Array.isArray(response.body)).toBe(true);
    });
});