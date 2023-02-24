import {selectData} from './selectData.js';

/**
 * Model contains data (plant type, pot type, and color)
 */
export class PlantModel {
    static store = selectData;

    /**
     * Creates an object that represents the plant model
     * 
     * @returns {PlantModel} object representing plant model
     */
    constructor() {
        this.plant = "undefined";
        this.pot = "undefined";
        this.color = "undefined";
    }

    /**
     * Returns the names of this class properties
     * 
     * @returns {Array} an array of property names
     */
     getProperties() {
        let properties = [];
        for (let property in this) {
            properties.push(property);
        }
        return properties;
    }

    /**
     * Gets data from selectData (en external resource) which will
     * be used as select options
     * 
     * @param {String} selectID 
     * @returns {Array} an array of select's options
     */
    getOptions(selectID) {
        let data;
        switch (selectID) {
            case 'plant':
                data = PlantModel.store;
                break;
            case 'pot':
                data = PlantModel.store[this.plant];
                break;
            case 'color':
                data = PlantModel.store[this.plant][this.pot];
                break;
        }

        let options = [];
        for (let objectProperty in data) {
            options.push(objectProperty);
        }
        return options;
    }

    /**
     * Adds to local storage 
     * 
     * @returns {undefined}
     */
    persist(){
        localStorage.setItem('plant', JSON.stringify(this));

        let plant = localStorage.getItem('plant');
        console.log(plant === null ? 'No plant found in local storage' : JSON.parse(plant));
        console.log(plant === null ? 'No plant found in local storage' : plant);
    }
}