/*function hallo(who) {
    console.log("Hallo " + who);
}

hallo("Welt!");*/

/*function hallo(who) {
    console.log("Hallo " + who);
}

function getName() {
    return "Welt!";
}

console.log(getName());*/

/*function hallo(who) {
    console.log("Hallo " + who());
}

function getName() {
    return "Welt";
}

hallo(getName);*/

let hallo = function(who) {
    console.log("Hallo " + who());
};

let getName = function() {
    return "Welt";
};

hallo(getName);
hallo(function() {
    return "node.js";
});

let hi = function (w) {
    w("Hallo Welt!");
};

hi(function (omg){
    console.log(omg);
});