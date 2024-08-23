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
		response = await fetch(`${config.API_URL}/api/v1/kits/1`, { // async await function to wait for data to be passed then parsed
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			}, 
			body: JSON.stringify(updateList) //json object calling the variable with the updated product
		});
	} catch (error) { // catch errors if they are not a 200 passing code 
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
	console.log(data); 
	expect(data.productsList).toBeDefined();
    expect(data.productsList.ok).toBe(true);
}); 
