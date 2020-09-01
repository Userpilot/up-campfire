# :fire: CAMPFIRE

Campfire is a product demo for our sales team to show our clients how to use the Userpilot product.

# Guideline

Each one of you need to create it's own demo, so follow the following:

- Click deploy to heroku button. [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/Userpilot/up-campfire)

You will see the following setting:

- Fill in the app name field (the product will be https://[app-name].herokuapp.com).
- You need to add `NEXT_PUBLIC_TOKEN` (which is your token from Userpilot product).
-

![Heroku deploy page](https://i.ibb.co/1RK4B4S/Screen-Shot-2020-09-01-at-10-53-04-AM.png =550x450)

# Development

- yarn

- yarn start:iso-next

## Docker Guidelines

### To Run the Dashboard with Docker:

- docker build -t isomorphic/dashboard -f ./packages/isomorphic/Dockerfile .

- docker run -it -p 8080:80 isomorphic/dashboard

- Open http://localhost:8080/

### To Run the Isomorphic Next Dashboard with Docker:

- docker build -t isomorphic/dashboard-next -f ./packages/isomorphic-next/Dockerfile .

- docker run -it -p 3000:3000 isomorphic/dashboard-next:latest

- Open http://localhost:3000/
