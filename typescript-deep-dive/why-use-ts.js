var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
// var point2D: Point2D = { x: 12, y: 53 }
// var point3D: Point3D = { x: 12, y: 53, z: 190 }
function iTakePoint2D(point) {
    // anything
}
// iTakePoint2D(point2D);
// iTakePoint2D(point3D);
// iTakePoint2D({ x: 0 });
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.add = function (point) {
        return new Point(this.x + point.x, this.y + point.y);
    };
    return Point;
}());
var p1 = new Point(0, 10);
var p2 = new Point(10, 20);
var p3 = p1.add(p2);
console.log(p3);
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
    var val = 0;
    return {
        increment: function () { val++; },
        getVal: function () { return val; }
    };
}
var counter = createCounter();
counter.increment();
console.log(counter.getVal());
counter.increment();
console.log(counter.getVal());
var counter2 = createCounter();
counter2.increment();
console.log(counter.getVal());
console.log(counter2.getVal());
// 分割代入
function goto(point2D) {
    console.log(point2D);
}
var point3D = { x: 1, y: 2, z: 3 };
var z = point3D.z, point2D = __rest(point3D, ["z"]);
console.log(z);
goto(point2D);
