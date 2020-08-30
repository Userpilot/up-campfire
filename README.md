# Isomorphic Reloaded

## Docker Guidelines

### To Run the Isomorphic React Dashboard with Docker:

- docker build -t isomorphic/dashboard -f ./packages/isomorphic/Dockerfile .
- docker run -it -p 8080:80 isomorphic/dashboard
- Open http://localhost:8080/

### To Run the Isomorphic Next Dashboard with Docker:

- docker build -t isomorphic/dashboard-next -f ./packages/isomorphic-next/Dockerfile .
- docker run -it -p 3000:3000 isomorphic/dashboard-next:latest
- Open http://localhost:3000/
