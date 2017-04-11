/// <reference path="../services/images.services.ts" />
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
var images_services_1 = require("../services/images.services");
var ImagesComponent = (function () {
    function ImagesComponent(_imageService) {
        this._imageService = _imageService;
    }
    ImagesComponent.prototype.ngOnInit = function () {
        this.getallimages();
    };
    ImagesComponent.prototype.getallimages = function () {
        var _this = this;
        this._imageService.getallimages().subscribe(function (response) { return _this.images = response; }, function (error) { return console.error(error); }, function () { return console.info(_this.images); });
    };
    return ImagesComponent;
}());
ImagesComponent = __decorate([
    core_1.Component({
        selector: 'of-images',
        templateUrl: './app/Images.Component/Images.Component.html',
        styleUrls: ['./app/Images.Component/Images.Component.css'],
        providers: [images_services_1.ImageService]
    }),
    __metadata("design:paramtypes", [images_services_1.ImageService])
], ImagesComponent);
exports.ImagesComponent = ImagesComponent;
//# sourceMappingURL=Images.Component.js.map