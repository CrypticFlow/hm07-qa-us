// eslint-disable-next-line no-undef
const config = require('../config');

const updateList = {
    "name": "My modified kit",
    "productsList": [
        {
            "id": 1,
            "quantity": 4
        },
        {
            "id": 5,
            "quantity": 2
        },
        {
            "id": 3,
            "quantity": 1
        },
        {
            "id": 4,
            "quantity": 1
        }
    ]
};

let response;
let data;

test('test returns a status of 200', async () => {
    try {
		response = await fetch(`${config.API_URL}/api/v1/kits/1`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			}, 
			body: JSON.stringify(updateList)
		});
	} catch (error) { 
		console.error(error);
	}
	expect(response.status).toBe(200);
});

test('should return ok: true in the response body', async () => {
    try {
        response = await fetch(`${config.API_URL}/api/v1/kits/1`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateList)
        });
        data = await response.json();
    } catch (error) {
        console.error(error);
    }
	expect(data.productsList).toBeDefined();
    expect(data.productsList.ok).toBe(true);
}); 
