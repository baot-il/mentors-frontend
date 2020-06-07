# mentors-frontend

## Prerequisites
1. Install [Docker](https://docs.docker.com/install/) and verify installation.
2. Install `npm`.

## Getting Started 

### Environemnt setup
Currently you will need to work with a local backend. Please copy https://github.com/baot-il/mentors-backend:

```sh
git clone https://github.com/baot-il/mentors-backend
```

#### Backend (with docker)
1. Open `mentors-backend` repo in root directory.
   
2. Add the _Firebase_ credentials file dependency: 
   * Download the file from our Baot Slack.
   * Save the file as `firebase-local-env.json` under `secrets` folder.
  
3. Run the following command in shell to setup the backend:

```sh
./development/scripts/start-local-all.sh
```

4. Browse to `http://localhost:5000` in your browser and verify _Hello World_ page.
  
5. Clean the backend environment by running the following command in a shell:

```sh
./development/scripts/clean-local.sh
```

#### Backend (from scratch)
Please follow the instructions: https://github.com/baot-il/mentors-backend#mentors-backend

### Configuring API url
Once you have running local backend please add the following var:
```
    REACT_APP_ENV=http://localhost:5000
```
IF YOU ARE WORKING WITH A PROD / STAGING env you should change the values. 

#### Config local firebase

##### If you setup the backend using Docker:

1. Search for _Firebase_ project variables in our Baot Slack.
2. Set the following variables with the generated key from firebase:
```
    REACT_APP_API_KEY=[REPLACE_WITH_BAOT_FIREBASE_API_KEY]
    REACT_APP_AUTH_DOMAIN=[REPLACE_WITH_BAOT_FIREBASE_AUTH_DOMAIN]
    REACT_APP_PROJECT_ID=[REPLACE_WITH_BAOT_FIREBASE_PROJECT_ID]
    REACT_APP_APP_ID=[REPLACE_WITH_BAOT_FIREBASE_APP_ID]
```

##### If you setup the backend from scratch:

1. Create a project in firebase using this link (might take a few minutes) https://console.firebase.google.com/u/0/?pli=1
2. Go to Develop Tab -> Authentication and click on the set up sign-in method button
3. Edit Email/Password option and enable the first option, sign by email.
4. Go to project settings -> Your Apps card -> select web app platform (</> icon)
5. Choose a nice nickname, no need to check the checkbox and click on register button.
6. You **don't** need to copy the SDK snippet
7. In your project the root project folder creat a text file named .env
8. Set the following variables with the generated key from firebase:
 ```
    REACT_APP_API_KEY=[REPLACE_WITH_YOUR_API_KEY]
    REACT_APP_AUTH_DOMAIN=[REPLACE_WITH_YOUR_AUTH_DOMAIN]
    REACT_APP_PROJECT_ID=[REPLACE_WITH_YOUR_PROJECT_ID]
    REACT_APP_APP_ID=[REPLACE_WITH_YOUR_APP_ID]
 ```

### Project Setup
Install dependencies: ```npm install```

### Run Project
Run: ```npm start``` 

