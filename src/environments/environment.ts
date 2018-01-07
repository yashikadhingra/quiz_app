// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase:{
   apiKey: "AIzaSyAQgC2yEzQCFPl0HTanTWioiufQ7Mg1hhA",
    authDomain: "quiz-e9434.firebaseapp.com",
    databaseURL: "https://quiz-e9434.firebaseio.com",
    projectId: "quiz-e9434",
    storageBucket: "quiz-e9434.appspot.com",
    messagingSenderId: "274922297774"
  }
};
