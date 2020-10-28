// interface & class
interface Point2D {
    x: number;
    y: number;
}

interface Point3D {
    x: number;
    y: number;
    z: number;
}
// var point2D: Point2D = { x: 12, y: 53 }
// var point3D: Point3D = { x: 12, y: 53, z: 190 }
function iTakePoint2D(point: Point2D) {
    // anything
}

// iTakePoint2D(point2D);
// iTakePoint2D(point3D);
// iTakePoint2D({ x: 0 });

class Point {
    constructor(public x: number, public y: number) {
    }
    add(point: Point) {
        return new Point(this.x + point.x, this.y + point.y);
    }
}

var p1 = new Point(0, 10);
var p2 = new Point(10, 20);
var p3 = p1.add(p2);
console.log(p3)


// クロージャ
function outerFunction(arg) {
    var variableInOuterFunction = arg;

    function bar() {
        console.log(variableInOuterFunction);
    }

    bar();
}
outerFunction("Hello closure");

function createCounter() {
    let val = 0;
    return {
        increment() { val++ },
        getVal() { return val }
    }
}
let counter = createCounter();
counter.increment();
console.log(counter.getVal());
counter.increment();
console.log(counter.getVal());
let counter2 = createCounter()
counter2.increment();
console.log(counter.getVal());
console.log(counter2.getVal());


// 分割代入
function goto(point2D: { x: number, y: number }) {
    console.log(point2D);
}
const point3D = { x: 1, y: 2, z: 3 };
const { z, ...point2D } = point3D;
console.log(z);
goto(point2D);
