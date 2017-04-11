import { Component } from "@angular/core";
import { ImagesComponent } from './Images.Component/Images.Component';

@Component({
    selector: 'my-app',
    template: `<div id="digital-layout">          
                <section id="page-content">
                    <div id="data-container">
                        <of-images></of-images>                        
                    </div>
                </section>
            </div>
            `,
})
export class AppComponent {
    private show: boolean = false;
    private message: string;    
}


