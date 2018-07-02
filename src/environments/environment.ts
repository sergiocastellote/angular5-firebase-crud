// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBMEhRrlkc23lesD8e2efDirFtiYIB8T-g",
    authDomain: "cyclist-project.firebaseapp.com",
    databaseURL: "https://cyclist-project.firebaseio.com",
    projectId: "cyclist-project",
    storageBucket: "cyclist-project.appspot.com",
    messagingSenderId: "206788822144"
  }
};
