// eslint-disable-next-line no-undef
const config = require('../config');

let response;
let data;

test('test returns a status of 200', async () => {
    try {
		response = await fetch(`${config.API_URL}/api/v1/kits/1`, {
			method: 'DELETE',
		});
	} catch (error) {
		console.error(error);
	}
    expect(response.status).toBe(200);
});

test('should return ok: true in the response body for DELETE api/v1/kits/1', async () => {
    try {
        response = await fetch(`${config.API_URL}/api/v1/kits/1`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        data = await response.json();
    } catch (error) {
        console.error(error);
    }
	expect(data).toBeDefined();
	expect(data.ok).toBe(true);
});
