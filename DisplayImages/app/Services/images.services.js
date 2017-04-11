"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var ImageService = (function () {
    function ImageService(_http) {
        this._http = _http;
        this._baseUrl = "./app/images.json";
    }
    ImageService.prototype.getallimages = function () {
        return this._http.get(this._baseUrl).map(this.extractData).catch(this.handleError);
    };
    ImageService.prototype.extractData = function (res) {
        var response = res.json();
        if (response.StatusCode == 401) {
            location.reload();
        }
        else {
            var body = response;
            return body || {};
        }
    };
    ImageService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        var errorResponse = error.json();
        if (errorResponse.StatusCode == 401) {
            location.reload();
        }
        return Observable_1.Observable.throw(errMsg);
    };
    return ImageService;
}());
ImageService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ImageService);
exports.ImageService = ImageService;
//# sourceMappingURL=images.services.js.map