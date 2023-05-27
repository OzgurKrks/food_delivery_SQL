# food_delivery_SQL

## Environment Variables
The following environment variables need to be configured in a .env file in the root directory of the project:
* DB_USER: Your database username.
* DB_PASSWORD: Your database password.
* DB_HOST: The host address where your database is hosted.
* DB_PORT: The port number for your database connection.
* DB_DATABASE: The name of the database you will be using.
Ensure that you provide the appropriate values for each of these variables in the .env file.
Make sure to keep the .env file private and never commit it to version control systems to protect sensitive information.

## Dependencies
This project utilizes the following dependencies:
* bcrypt: ^5.1.0
* dotenv: ^16.0.3
* express: ^4.18.2
* jsonwebtoken: ^9.0.0
* pg: ^8.11.0
* ts-node-dev: ^2.0.0
## Developer Dependencies
* @types/bcrypt: ^5.0.0
* @types/express: ^4.17.17
* @types/jsonwebtoken: ^9.0.2
* @types/node: ^20.2.5
* @types/pg: ^8.10.1
* ts-node: ^10.9.1
* typescript: ^5.0.4

## Database
This project utilizes the following tables in the database:
TABLE users
+----+----------+----------------------+------------------+
| id | username |        email         |     password     |
+----+----------+----------------------+------------------+
|  1 |  user1   | user1@example.com    |   hashedpass1    |
|  2 |  user2   | user2@example.com    |   hashedpass2    |
|  3 |  user3   | user3@example.com    |   hashedpass3    |
+----+----------+----------------------+------------------+
TABLE foods
+----+-------------+-------+
| id |    name     | price |
+----+-------------+-------+
|  1 |   Food A    |   10  |
|  2 |   Food B    |   15  |
|  3 |   Food C    |   20  |
+----+-------------+-------+
TABLE orders
+----+---------+---------+
| id | user_id | food_id |
+----+---------+---------+
|  1 |    1    |    2    |
|  2 |    2    |    1    |
|  3 |    1    |    3    |
+----+---------+---------+
