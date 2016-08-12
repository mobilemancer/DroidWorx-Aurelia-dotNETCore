var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('app',["require", "exports", 'aurelia-fetch-client', 'aurelia-framework'], function (require, exports, aurelia_fetch_client_1, aurelia_framework_1) {
    "use strict";
    var App = (function () {
        function App(http) {
            this.http = http;
            this.header = 'Droids!';
            this.droids = [];
            console.log("Init App.ts");
            http.configure(function (config) {
                config
                    .useStandardConfiguration()
                    .withBaseUrl('http://localhost:5005/api/droids');
            });
        }
        App.prototype.activate = function () {
            var _this = this;
            console.log("Fetching droids");
            return this.http.fetch("")
                .then(function (response) { return response.json(); })
                .then(function (droids) { return _this.droids = droids; });
        };
        App = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [aurelia_fetch_client_1.HttpClient])
        ], App);
        return App;
    }());
    exports.App = App;
});

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

define('main',["require", "exports", './environment'], function (require, exports, environment_1) {
    "use strict";
    Promise.config({
        warnings: {
            wForgottenReturn: false
        }
    });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    function configure(config) {
    }
    exports.configure = configure;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('views/droids',["require", "exports", 'aurelia-framework', 'aurelia-fetch-client'], function (require, exports, aurelia_framework_1, aurelia_fetch_client_1) {
    "use strict";
    var Droids = (function () {
        function Droids(http) {
            this.http = http;
            this.heading = 'Droids';
            this.droids = [];
            http.configure(function (config) {
                config
                    .useStandardConfiguration()
                    .withBaseUrl('http://localhost:5005/api/droids');
            });
        }
        Droids.prototype.activate = function () {
            var _this = this;
            return this.http.fetch('users')
                .then(function (response) { return response.json(); })
                .then(function (droids) { return _this.droids = droids; });
        };
        Droids = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [aurelia_fetch_client_1.HttpClient])
        ], Droids);
        return Droids;
    }());
    exports.Droids = Droids;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/elements/droid',["require", "exports", 'aurelia-framework'], function (require, exports, aurelia_framework_1) {
    "use strict";
    var Droid = (function () {
        function Droid() {
        }
        Droid.prototype.valueChanged = function (newValue, oldValue) {
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], Droid.prototype, "name", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], Droid.prototype, "productSeries", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], Droid.prototype, "imperialContractId", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], Droid.prototype, "creditBalance", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], Droid.prototype, "height", void 0);
        return Droid;
    }());
    exports.Droid = Droid;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template>\r\n    <h1>${header}</h1>\r\n\r\n    <div repeat.for=\"droid of droids\">\r\n        <div>${droid.name}</div>\r\n    </div>\r\n</template>\r\n"; });
define('text!views/droids.html', ['module'], function(module) { module.exports = "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n    <title>droids</title>\r\n</head>\r\n<body>\r\n    \r\n</body>\r\n</html>"; });
define('text!resources/elements/droid.html', ['module'], function(module) { module.exports = "<template>\n    <div>\n        <h1>${name}</h1>\n        <div>${productSeries}</div>\n        <div>${imperialContractId}</div>\n        <div>${creditBalance}</div>\n        <div>${height}</div>\r\n    </div>\n</template>"; });
//# sourceMappingURL=app-bundle.js.map