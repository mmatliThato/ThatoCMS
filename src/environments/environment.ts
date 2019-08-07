// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

export const firebaseConfig = {
  apiKey: "AIzaSyCGJlVMOJuTF1-hawrLUEXFHIA1yz2QzjQ",
  authDomain: "hotelapp-8d97d.firebaseapp.com",
  databaseURL: "https://hotelapp-8d97d.firebaseio.com",
  projectId: "hotelapp-8d97d",
  storageBucket: "hotelapp-8d97d.appspot.com/",
  messagingSenderId: "1066978565810",
  appId: "1:1066978565810:web:b4c9d1d4b41b2014"
};
export const SnapShots = snap => {
    let MyArray = [];
    snap.forEach(Element => {
        let obj = Element.val();
        obj.key = Element.key;
        MyArray.push(obj);
    });
    return MyArray;
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
