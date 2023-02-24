/**
 * Displays the information which is within the model
 */
export class PlantView {

    constructor() {
        this.plantForm = document.querySelector('#form-plant');
        this.selectsDiv = document.querySelector('#div-selects');
        this.selects = null;
        this.plantDiv = document.querySelector('#div-plant');
        this.resetButton = document.querySelector('#resetButton');
    }

    /**
     * Renders the select HTML element without the option elements
     * 
     * @param {Array} selectIDs an array of select ids
     */
     renderSelects(selectIDs) {
        selectIDs.forEach((name) => {
            let select = document.createElement('select');
            select.setAttribute("id", name);
            select.classList.add('mb-4');
            select.options.add(new Option(` -- Select a ${name} -- `, 'undefined'));
            this.selectsDiv.appendChild(select);
        });

        this.selects = this.selectsDiv.querySelectorAll('select');
    }

    /**
     * Add the option elements to a select
     * 
     * @param {String} selectID 
     * @param {Array} options an array of option names
     */
     addOptions(selectID, options) {
        let select = this.selectsDiv.querySelector(`#${selectID}`);
        select.length = 1;

        let nextSelect = select.nextElementSibling;
        
        while (nextSelect) {
            nextSelect.length = 1;
            nextSelect = nextSelect.nextElementSibling;
        }

        options.forEach((option) => {
            select.options.add(new Option(option, option));
        });
    }

    /**
     * Based on the currently selected option (value), renders appropriate image
     * 
     * @returns {undefined}
     */
    renderPlant(){
        let imgSrc = 'media/';

        this.selects.forEach((select) => {
            imgSrc += `${select.value}-`;
        });

        imgSrc = imgSrc.slice(0, -1) + '.png'; 
        this.plantDiv.querySelector('img').src = imgSrc;
    }

    /**
     * If the user chooses to start over, this funtion renders the
     * undefined image that was there before selecting any options
     */
    resetPlant() {
        let imgSrc = 'media/undefined-undefined.png';
        this.plantDiv.querySelector('img').src = imgSrc;
    }

}