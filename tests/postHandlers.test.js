// eslint-disable-next-line no-undef
const config = require('../config');

let response;
let data;

const requestBody = {
	"productsList": [
        {
            "id": 1,
            "quantity": 2
        },
        {
            "id": 6,
            "quantity": 2
        },
    ]
}

test('should return status code 200', async () => {
    try {
		response = await fetch(`${config.API_URL}/api/v1/kits/2/products`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
	} catch (error) {
		console.error(error);
	}
	expect(response.status).toBe(200);
});

test('should return a list of products in the kit', async () => {
    try {
        response = await fetch(`${config.API_URL}/api/v1/kits/2/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        data = await response.json();
    } catch (error) {
        console.error(error);
    }
	console.log(data); 
	expect(data).toBeDefined();
    expect(Array.isArray(data.productsList)).toBe(true);
    expect(data.productsList.length).toBeGreaterThan(0); 
}); 

