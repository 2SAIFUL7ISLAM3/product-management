**API Endpoints**

Products


Create Product

URL: `/api/products`

Method: `POST`

Body :

```json
{
  "name": "Wireless Mouse",
  "description": "Ergonomic wireless mouse with adjustable DPI settings.",
  "price": 29.99,
  "category": "Electronics",
  "tags": ["computer", "peripherals", "wireless", "ergonomic"],
  "variants": [
    { "type": "color", "value": "Black" },
    { "type": "color", "value": "White" }
  ],
  "inventory": {
    "quantity": 150,
    "inStock": true
  }
}
```


**Get All Products**

URL: `/api/products`

Method: GET



**Search a product**

searchTerm (optional) :  The term to search for in the product's name, description, category, or tags.

URL : `/api/products/searchTerm?query=Wireless Mouse`

Method : GET

**Get Single Product**

URL: `/api/products/:productId

Method : GET

**Update Product**

URL: `/api/products/:productId`

Method : PUT

Body :

```json
{
  "price": 25.99,
  "inventory": {
    "quantity": 100,
    "inStock": true
  }
}

```


**Delete Product**


URL: `/api/products/:productId`

Method: DELETE

**Orders**

Create Order

URL: `/api/orders`

Method: POST


```json
{
  "email": "customer@example.com",
  "ProductId": "product_id_here",
  "price": 29.99,
  "quantity": 2
}
```

Get Orders by Email

URL: `/api/orders`

Method: `GET`

Query Params:

`email`:  The email to filter orders by.


**Validation with Zod**

Data validation is handled by Zod. Ensure the incoming request data conforms to the expected structure for product and order creation/update operations.

**Example Requests**

Use Postman or a similar tool to test the API endpoints. Below are some example requests:

**Create Product**

URL: `http://localhost:5000/api/products`

Method: `POST`

```json
{
  "name": "Wireless Mouse",
  "description": "Ergonomic wireless mouse with adjustable DPI settings.",
  "price": 29.99,
  "category": "Electronics",
  "tags": ["computer", "peripherals", "wireless", "ergonomic"],
  "variants": [
    { "type": "color", "value": "Black" },
    { "type": "color", "value": "White" }
  ],
  "inventory": {
    "quantity": 150,
    "inStock": true
  }
}

```

**Create Order**

URL :  http://localhost:5000/api/orders

Method: POST

```json
{
  "email": "customer@example.com",
  "ProductId": "664e16fdb3e2d291373f31e3",
  "price": 29.99,
  "quantity": 2
}
```