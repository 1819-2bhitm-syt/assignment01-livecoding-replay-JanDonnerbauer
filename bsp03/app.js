//Object literal syntax
/*const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function() {
        console.log('draw');
    }
};

circle.draw();*/

// Factory Function
/*function createCircle(radius) {
    return {
        radius,
        //radius: radius
        draw: function () {
            console.log('draw');
        }
    };
}

const circle = createCircle(1);
circle.draw();*/

// Constructor Function
/*function Circle(radius) {
    console.log('this', this);
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    };
}

const another = new Circle(1);*/

/*function Circle(radius) {
    console.log('this', this);
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    };
}

const another = Circle(1);*/

//Anzeige der erstellenden Funktion
let name = 'Susi';
console.log('name = ', name, name.constructor);

let ok = true;
console.log('ok = ', ok, ok.constructor);

let total = 100;
console.log('total = ', total, total.constructor);