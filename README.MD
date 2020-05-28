## MENTORS-FRONTEND

### Prerequisites

What things you need to install the software and how to install them

1. node LTS v12 : https://nodejs.org/en/
2. npm 

### Environment Setup
#### Install dependencies 
 * ```npm install``
 
#### Config local firebase
 1. Create a project in firebase using this link (might take a few minutes) https://console.firebase.google.com/u/0/?pli=1
 2. Go to Develop Tab -> Authentication and click on the set up sign-in method button
 3. Edit Email/Password option and enable the first option, sign by email.
 4. Go to project settings -> Your Apps card -> select web app platform (</> icon)
 5. Choose a nice nickname, no need to check the checkbox and click on register button.
 6. You **don't** need to copy the SDK snippet
 7. In your project the root project folder create a text file named .env
 8. Set the following variables with the generated key from firebase:
    ```
    REACT_APP_API_KEY=[REPLACE_WITH_YOUR_API_KEY]
    REACT_APP_AUTH_DOMAIN=[REPLACE_WITH_YOUR_AUTH_DOMAIN]
    REACT_APP_PROJECT_ID=[REPLACE_WITH_YOUR_PROJECT_ID]
    REACT_APP_APP_ID=[REPLACE_WITH_YOUR_APP_ID]
    ```

### Configuring API url
Currently you will need to work with a local backend. Please follow the instructions:  https://github.com/baot-il/mentors-backend

Once you have running local backend please add the following var:
REACT_APP_ENV=http://localhost:5000
IF YOU ARE WORKING WITH A PROD / STAGING env you should change the values. 

### Project Setup
* run ```npm install```

### Run Project
* ```npm start ```

## Running the tests

Explain how to run the automated tests for this system

  *  Jest as the test runner, assertion library, and mocking library
  *  Enzyme to provide additional testing utilities to interact with elements
  
How to run?
```npm run test```

## Deployment

Add additional notes about how to deploy this on a live system

## Contributing

Please read our on boarding document (https://docs.google.com/document/d/1RpCbc5-8Jxa6qyOzloDjk6sFXOhcED9ZQU8eVssbtHA/edit) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.