/* A fake MySQL module */

db = {
    createConnection: function ({ }) {
        return {
            connect: function (callback) {
                 // do some stuff
                 callback();
            },

            end: function () {
                // do some stuff
            },

            query: function (callback) {
                 // do some stuff
                 callback();
            }
        };
    }
};

module.exports = db;