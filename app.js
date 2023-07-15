var cl = console.log;
var Person = /** @class */ (function () {
    function Person(fn, ln) {
        this.fname = fn,
            this.lname = ln;
    }
    return Person;
}());
var c1 = new Person("jhon ", "doe");
cl(c1);
