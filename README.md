# Nansty

Live site: https://nansty.onrender.com/

Nansty is an online marketplace that connects sellers with buyers. It is primarily used for selling vintage items, handmade goods, art, and crafts. To sell on Etsy, you must create an account before you can open a storefront.

## WIKI Link:

- [Backend Routes](https://github.com/Alicenanguo/Capstone/wiki/Backend-Routes)
- [Database Schema](https://github.com/Alicenanguo/Capstone/wiki/Database-Schema)
- [Feature List](https://github.com/Alicenanguo/Capstone/wiki/Feature-List)
- [Wireframes](https://github.com/Alicenanguo/Capstone/wiki/Wireframes)

## Tech Stack

### Languages

![html5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![css](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![js](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![python](https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue)

### Frameworks and Libraries

![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)

### Database:

![postgres](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![SQLAlchemy](https://img.shields.io/badge/SQLAlchemy-100000?style=for-the-badge&logo=sql&logoColor=BA1212&labelColor=AD0000&color=A90000)

### Hosting:

![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white)


# Getting started

1. Clone this repository (only this branch)

2. Install dependencies

   ```bash
   pipenv install -r requirements.txt
   ```

3. Create a **.env** file based on the example with proper settings for your
   development environment

4. Make sure the SQLite3 database connection URL is in the **.env** file

5. This starter organizes all tables inside the `flask_schema` schema, defined
   by the `SCHEMA` environment variable. Replace the value for
   `SCHEMA` with a unique name, **making sure you use the snake_case
   convention**.

6. Get into your pipenv, migrate your database, seed your database, and run your Flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

7. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.

# Features

## Homepage
![Screen Shot 2023-01-08 at 10 45 50 PM](https://user-images.githubusercontent.com/106508822/211253483-ec00afe6-816f-41af-af23-5732d552e8c3.png)

## Sign in
![Screen Shot 2023-01-08 at 10 51 50 PM](https://user-images.githubusercontent.com/106508822/211254179-34b95aaf-92a3-4136-97a3-ddc5b95ef2bf.png)

## Sign up
![Screen Shot 2023-01-08 at 10 52 26 PM](https://user-images.githubusercontent.com/106508822/211254244-b495e8d6-1b14-42cd-9f05-d2b512657728.png)

## Get all products by category
![Screen Shot 2023-01-08 at 10 54 49 PM](https://user-images.githubusercontent.com/106508822/211254488-09748028-1ac5-4dbe-b270-0a3719a167aa.png)

## Product page
![Screen Shot 2023-01-08 at 10 57 04 PM](https://user-images.githubusercontent.com/106508822/211254788-5c0cd69c-227c-49f0-ae08-b71292d3f498.png)

## Create a product
![Screen Shot 2023-01-08 at 10 53 18 PM](https://user-images.githubusercontent.com/106508822/211254351-2a368350-a469-49eb-bf06-22325d45e2c6.png)

## Product list of the logged in user
![Screen Shot 2023-01-08 at 10 59 16 PM](https://user-images.githubusercontent.com/106508822/211255079-fe2b5328-cc60-48fc-b936-9e0f6d5adfbe.png)

## Write a review 
![Screen Shot 2023-01-08 at 11 00 10 PM](https://user-images.githubusercontent.com/106508822/211255204-7a5e27cf-9206-4095-823a-57a58986850f.png)

## Review lise of the logged in user
![Screen Shot 2023-01-08 at 11 01 06 PM](https://user-images.githubusercontent.com/106508822/211255329-c6f91d06-e7f5-4a5e-80b0-ffc31fb78b02.png)

## Developer

* Nan Guo
  * https://github.com/Alicenanguo
  * https://www.linkedin.com/in/nan-guo-a7762325a/

