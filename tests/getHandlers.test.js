// eslint-disable-next-line no-undef
const config = require('../config');

let response;
let data;

test('should return a status code of 200', async () => {
	try {
		response = await fetch(`${config.API_URL}/api/v1/warehouses`, {
			method: 'GET',
		    headers: {
			'Content-Type': 'application/json'
		}
		});
	} catch (error) {
		console.error(error);
	}
	expect(response.status).toBe(200);
});

test('should return a list of products for GET /api/v1/warehouses', async () => {
    try {
        response = await fetch(`${config.API_URL}/api/v1/warehouses`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        data = await response.json();
    } catch (error) {
        console.error(error);
    }
	expect(data).toBeDefined();
    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBeGreaterThan(0);
}); 
