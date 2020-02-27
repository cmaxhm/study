define("MyClass", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var MyClass = /** @class */ (function () {
        function MyClass() {
        }
        MyClass.prototype.myFunction = function () {
            console.log("I'm inside the class...");
        };
        return MyClass;
    }());
    exports.MyClass = MyClass;
});
define("index", ["require", "exports", "MyClass"], function (require, exports, MyClass_1) {
    "use strict";
    exports.__esModule = true;
    var myClassInstance = new MyClass_1.MyClass();
    myClassInstance.myFunction();
});
