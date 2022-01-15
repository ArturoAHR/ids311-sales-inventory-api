**INS-311 Sales Inventory API**

**Setup**

1. Clone the repository.
2. Install the packages
```npm install```
3. Copy the .env.example and rename it .env and fill the database details.
4. Run the migrations
```npm run migration:run```
5. Run the project
```npm run start```

**Routes**

/user

```GET /user```
- Gets all Users

```GET /user/:id```
- Get User by ID

```POST /user```
- Create User

```PUT /user/:id```
- Update User

```DELETE /user/:id```
- Delete User

```GET /user/:id/payment```
- Make Payment with User ID


/item

```GET /item```
- Gets all Items

```GET /item/:id```
- Get Item by ID

```POST /item```
- Create Item

```PUT /item/:id```
- Update Item

```DELETE /item/:id```
- Delete Item

/payment

```GET /payment```
- Gets all Payments

```GET /payment/:id```
- Get Payment by ID

/sale

```GET /sale```
- Gets all Sales

```GET /sale/:id```
- Get Sale by ID

```GET /sale/report/daily```
- Get Report of Sales in one day

```GET /sale/report/weekly```
- Get Report of Sales in seven days

```GET /sale/report/monthly```
- Get Report of Sales in thirty days
