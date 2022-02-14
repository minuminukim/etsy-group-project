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
