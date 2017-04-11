/// <reference path="../services/images.services.ts" />


import { Component } from "@angular/core";
import { ImageService } from '../services/images.services';

@Component({
    selector: 'of-images',
    templateUrl: './app/Images.Component/Images.Component.html',
    styleUrls: ['./app/Images.Component/Images.Component.css'],
    providers: [ImageService]

})
export class ImagesComponent {
    private images: any[];

    constructor(private _imageService: ImageService) {

    }

    ngOnInit() {
        this.getallimages();

    }
    getallimages() {
        this._imageService.getallimages().subscribe(
            response => this.images = response,
            error => console.error(error),
            () => console.info(this.images)
        );

    }

}
