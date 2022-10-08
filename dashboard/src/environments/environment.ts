// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  mapbox: {
    accessToken: 'pk.eyJ1IjoiY29kaW5nYm95IiwiYSI6ImNrZHI0N20zNjB3azYzMHA2enpsZjB1MDMifQ.S7n1sDI_kGSZfI1jbrblFg'
  },
  firebaseConfig :{
    apiKey: "<Firebase API key>",
    authDomain: "<Firebase auth domain>",
    databaseURL: "<Firebase database URL>",
    projectId: "<Firebase project ID>",
    storageBucket: "<Firebase storage bucket>",
    messagingSenderId: "<Firebase messaging sender ID>",
  }
};
