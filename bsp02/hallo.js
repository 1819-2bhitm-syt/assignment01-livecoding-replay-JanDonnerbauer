/*console.log("ich bin die hallo.js - Datei");*/

/*let data = {
    name: "Welt"
};*/

/*let data = {
    name: function() {
        return "Welt";
    }
};

module.exports = data;*/

let data = {
    name: function(prefix) {
        return prefix + "Welt";
    }
};

module.exports = data;