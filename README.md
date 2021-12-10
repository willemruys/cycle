# Running the project locally

Please note that all npm commands need to be run from the project *root directory*. 

1. Install packages in root: `npm install`;
2. Setup frontend and server: `npm run build`. This will install dependencies of the server and frontend and build the React application;
3. Add .env file to /frontend directory with the following env variable:
```
REACT_APP_MAPBOX_GL=<token of mapbox_gl>
```
4. Add a cycle_ride.fit file to root directory;
5. Run the application: `npm run start`. This will start both the server and the React application.
