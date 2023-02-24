import {PlantView}         from './view/PlantView.js'
import {PlantController}   from './controller/PlantController.js'
import {PlantModel}        from './model/PlantModel.js';

import {FormView}          from './view/FormView.js';
import {FormController}    from './controller/FormController.js';
import {FormModel}         from './model/FormModel.js';

class App {
    constructor(){

        /**
         * Finds which web page is being requested. We get the url by 
         * using window.location.href.
         */
        const url = window.location.href;
        const page = url.match(/[a-z]*.html/)[0];

        switch(page){
            case 'index.html':
                new PlantController(new PlantModel(), new PlantView());
                break;
            case 'form.html':
                new FormController(new FormModel(), new FormView());
                break;
        }
    }
}
const app = new App();