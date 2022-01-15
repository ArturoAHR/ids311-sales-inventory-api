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

- /user

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

