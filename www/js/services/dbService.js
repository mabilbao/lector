angular.module('services', [])
    .factory('db', function($cordovaSQLite) {

        var db;

        // Open the database
        // console.log('abriendo BD');
        // db = $cordovaSQLite.openDB({name: "lector.db", bgType: 1});

        return {
            example: function () {
                return db;
            }
        };


        // var Promise = require('es6-promise').Promise;
        // return new Promise(function(resolve, reject) {
        //     // do a thing, possibly async, then…
        //
        //     var db;
        //
        //     document.addEventListener("deviceready", function () {
        //
        //         // Open the database
        //         console.log('abriendo BD');
        //         db = $cordovaSQLite.openDB({name: "lector.db", bgType: 1});
        //
        //         // if (/* everything turned out fine */) {
        //             resolve({
        //                 example: function () {
        //                     return db;
        //                 }
        //             });
        //         // }
        //         // else {
        //         //     reject(Error("It broke"));
        //         // }
        //     });
        // });

    });
