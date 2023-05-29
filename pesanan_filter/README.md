# API Documentation



## Endpoints:
- `router.post('/register', controller.register)`
- `router.post('/login', controller.login')`
- `router.post('/brandCreate', controller.brandCreate)`
- `router.post('/produkCreate', controller.produkCreate)`
- `router.post('/orderCreate', controller.orderCreate)`
- `router.patch('/paymentUpdate', controller.paymentUpdate)`
&nbsp;

### 1. router.post('/register', controller.register) ###

#### => Description

- Register as a new user

Request :

- body :

```json
{
    "nama":STRING,
    "userName":STRING,
    "password":STRING,
    "kota":STRING,
    "telepon":STRING
}
```
&nbsp;

#### => response

201 - Created

```json
{
  "message": "User successfully created",
    "data": {
        "id": INTEGER,
        "nama": STRING,
        "userName": STRING,
        "password": STRING,
        "kota": STRING,
        "telepon": STRING,
        "updatedAt": DATE,
        "createdAt": DATE
  }
}
```

### 2. router.post('/login', controller.login') ###

#### => Description

- Login as a user

Request :

- body :

```json
{
    "userName":STRING,
    "password":STRING
}
```

#### => response

201 - Created

```json
{
  "message": "User login successful",
    "aksesToken": STRING
}
```

400 - Bad Request

```json
{
  "message": "Required Email or Password"
}
```

401 - Unauthorized

```json
{
  "message": "Invalid username or password",
}
```

### 3. router.post('/brandCreate', controller.brandCreate) ###

#### => Description

- Created as a new user

Request :

- body :

```json
{
    "namaBrand":STRING
}
```

- headers:

```json
{
  "aksestoken": STRING
}
```

#### => response

201 - Created

```json
{
    "message": "Brand successfully created",
    "data": {
        "id": INTEGER,
        "namaBrand": STRING,
        "UserID": INTEGER,
        "updatedAt": DATE,
        "createdAt": DATE
    }
}
```

### 4. router.post('/produkCreate', controller.produkCreate) ###

#### => Description

- Created as a new Produk

Request :

- body :

```json
{
    "namaProduk": STRING,
    "klasifikasi": STRING,
    "tipe": STRING,
    "satuan": STRING,
    "konstanta": FLOAT,
    "harga": INTEGER,
    "BrandId": INTEGER
}
```

- headers:

```json
{
  "aksestoken": STRING
}
```

#### => response

201 - Created

```json
{
    "message": "Produk successfully created",
    "data": {
        "id": INTEGER,
        "namaProduk": STRING,
        "klasifikasi": STRING,
        "tipe": STRING,
        "satuan": STRING,
        "konstanta": FLOAT,
        "harga": INTEGER,
        "BrandId": INTEGER,
        "updatedAt": DATE,
        "createdAt": DATE
    }
}
```

### 5. router.post('/orderCreate', controller.orderCreate) ###

#### => Description

- Created as a new Order

Request :

- body :

```json
{
    "ProdukId": INTEGER,
    "qty": INTEGER
}
```

- headers:

```json
{
  "aksestoken": STRING
}
```

#### => response

201 - Created

```json
{
    "message": "Order & Payment successfully created",
    "data": {
        "id": INTEGER,
        "totalHarga": INTEGER,
        "status": STRING,
        "UserId": INTEGER,
        "OrderId": INTEGER,
        "createdAt": DATE,
        "updatedAt": DATE,
        "Order": {
            "id": INTEGER,
            "ProdukId": INTEGER,
            "qty": INTEGER,
            "jumlah": INTEGER,
            "createdAt": DATE,
            "updatedAt": DATE
        }
    }
}
```

### 6. router.patch('/paymentUpdate', controller.paymentUpdate) ###

#### => Description

- Payment Updates

Request :

- body :

```json
{
    "status": STRING,
}
```

- headers:

```json
{
  "aksestoken": STRING
}
```

#### => response

200 - Ok

```json
{
    "message": "Payment update successful",
    "data": [
        INTEGER
    ]
}
```