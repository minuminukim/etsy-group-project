# Qwerty
[Qwerty] (https://qwerty2022.herokuapp.com/), a full-stack application inspired by Etsy, is an e-commerce platform for keyboard enthusiasts to buy and sell mechanical keyboard components.

## Live Link
[Qwerty] (https://qwerty2022.herokuapp.com/)

## Get Started
**Prerequisites**
- NPM
- A version of Node.js >= 14 on your local machine
- Python 3.9
- PostgreSQL
- An AWS S3 bucket

**Installation**
- Clone the repo: `git@github.com:minuminukim/etsy-group-project.git`
- Install dependencies ``` pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt```
- `cd react-app` and run `npm install`
- Create a **.env** file based on the example with proper settings for your development environment
- Setup a PostgreSQL database, user, and password and make sure they match your **.env** file.
- Get into your pipenv, migrate your database, seed your database, and run your app
 
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
- Create your AWS user and bucket:
    - Create a bucket: (https://s3.console.aws.amazon.com/s3/home?region=us-east-1)
    - Navigate to ( https://console.aws.amazon.com/iam/home?#/users) to creae a user with `Programmatic access`.
    - Set up a security policy for your user: 'Attach existing policies directly' => 'Create Policy'
    - Click the `JSON` tab and set a policy:
 ```
 {
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "Stmt1420751757000",
      "Effect": "Allow",
      "Action": ["s3:*"],
      "Resource": "arn:aws:s3:::<NAME OF BUCKET>/*"
    }
  ]
}
```
- Now update your **.env** with your `S3_BUCKET`, `S3_KEY`, `S3_SECRET`
- Fire up your servers: `flask run` in root and `npm start` in `react-app`

## Features
- Product Listings
  - Users can create listings.
  - Users can edit listings.
  - Users can delete listings.
- Reviews
  - Users can post reviews.
  - Users can edit their reviews.
  - Users can delete their own reviews.
- Cart
  - Users can add products to their cart.
  - Users can edit products in their cart.
  - Users can remove products from their cart.
- Search
  - Users can search for products via keywords.

## Technologies
- JavaScript
- React
- Redux
- PostgreSQL
- Python
- AWS SDK

# Features

## Landing Page

<img width="1440" alt="Screen Shot 2022-02-13 at 8 34 43 PM" src="https://user-images.githubusercontent.com/46228676/153801555-f8b5da9d-0081-4a92-bd9d-df2886312167.png">

## User Auth Sign in and Sign Up 

Users can log into an existing account or sign up and create a new account. Users can also test the site with the Demo Login feature. 

<img width="1436" alt="Screen Shot 2022-02-13 at 8 47 11 PM" src="https://user-images.githubusercontent.com/46228676/153801699-3a5fdbd1-e693-45c4-99ba-dac768b75407.png">

## Users can add a product listing via a form.

<img width="1423" alt="Screen Shot 2022-02-13 at 8 48 35 PM" src="https://user-images.githubusercontent.com/46228676/153801874-add5ec76-1b96-460e-9acf-de356a307ed5.png">



## Users can view a product Listing and add to Cart

<img width="1440" alt="Screen Shot 2022-02-13 at 8 50 01 PM" src="https://user-images.githubusercontent.com/46228676/153801967-51381cb6-2699-4d24-b82d-d98d8723441f.png">


## Shopping Cart

Users can create, view, edit, update, and delete items from Shopping Cart 

<img width="1440" alt="Screen Shot 2022-02-13 at 8 52 13 PM" src="https://user-images.githubusercontent.com/46228676/153802138-2035809c-f604-404f-a10c-81b81f95d14b.png">


Users can purchase items in shopping Cart.

<img width="1440" alt="Screen Shot 2022-02-13 at 8 53 20 PM" src="https://user-images.githubusercontent.com/46228676/153802253-4c308082-4252-460c-b1e0-de7fba625408.png">


# Reviews 

Logged in users can add a comment via the review form.

<img width="1440" alt="Screen Shot 2022-02-13 at 8 54 32 PM" src="https://user-images.githubusercontent.com/46228676/153802438-caef58da-7836-4412-95c6-8d28c2ec7f70.png">


Logged in users can delete or update their review. 

<img width="1440" alt="Screen Shot 2022-02-13 at 8 58 09 PM" src="https://user-images.githubusercontent.com/46228676/153802734-468d038a-138d-4e67-9b26-4e314653a06f.png">


# Search 

Users can search for products using the Search feature.

<img width="1440" alt="Screen Shot 2022-02-13 at 8 59 34 PM" src="https://user-images.githubusercontent.com/46228676/153802887-15c6b01e-e9cd-4284-906d-42a6d0442d39.png">

User can filter Search! 

<img width="668" alt="Screen Shot 2022-02-13 at 9 00 32 PM" src="https://user-images.githubusercontent.com/46228676/153802931-40f6ea4b-ddc5-4237-8fc5-500fcbd2f8ea.png">



