# RV Share Demo

See the [live demo](https://rv-share.herokuapp.com).

This is a quick CRUD app for finding and creating RV listings, built with Ruby on Rails and React.js. Heavily inspired by [RV Share](https://rvshare.com).

## Tech stack

- Ruby on Rails
- React on Rails

## Prerequisites

This app uses AWS S3 to store the image for each listing when used in production. During development, the images will be stored locally and this is not required.

It's also a good idea to understand the Ruby and JavaScript ES6 and JSX syntaxes, and at least the basic structure of a Ruby on Rails MVC app before getting started.

## Deployment

The live demo is deployed to Heroku. Below are the steps to do so yourself, and will be very similar if deploying to another service, such as AWS Elastic Beanstalk:

1. Clone this repo

`git clone https://github.com/seanwlawrence/rv-share.git`

2. Create an Amazon S3 account, login and create an S3 bucket

3. Create an IAM user with the `AmazonS3FullAccess` permission and save the Access Key ID, Secret Access Key and name of your S3 bucket somewhere that you can access them easily

4. [Download the Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli), for example on Mac with the Homebrew package manager:

`brew install heroku`

5. Create a Heroku account and login with the CLI

`heroku login`

6. Create new app on Heroku

`heroku create`

7. Set your environment variables with the Heroku CLI using the values that you saved earlier when creating your AWS S3 Bucket:

`heroku config:set AWS_ACCESS_KEY_ID=your_aws_access_key_id`

`heroku config:set AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key`

`heroku config:set AWS_REGION=your_aws_bucket_region`

`heroku config:set AWS_BUCKET=your_aws_s3_bucket_name`

8. Check that your repo has Heroku as a remote

`git config --list | grep heroku`

9. Set up the Heroku Node and Ruby build packs

`heroku buildpacks:set heroku/ruby`

`heroku buildpacks:add --index 1 heroku/nodejs`

**10. Deploy your code to Heroku**

`git push heroku master`

11. Migrate your database

`heroku run rake db:migrate`

12. Set your dyno to run the `web` process type

`heroku ps:scale web=1`

13. Open the app!

`heroku open`

> Note: if using AWS Elastic Beanstalk, make sure to create an `.ebextensions` folder with files that instruct it to install Node and Yarn correctly like on [this repo](https://github.com/imgarylai/react_on_rails_with_aws_ebs) and use the AWS CLI to run `rake db:migrate` after uploading your `.zip` file so it can set up the database correctly. You'll also need to create a database manually and change the environment variables to the [ones provided by AWS](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create_deploy_Ruby.rds.html), i.e. RDS_HOSTNAME, etc.

## Roadmap

- Add search bar to homepage, with filters for the following:
  - Price: low to high
  - Price: high to low
  - State
  - Make
  - Year
- Modernize styling and make responsive for mobile screens and tablets
- Add user authentication
- Add unit and integration tests
