
export class FormModel {
    constructor(){
        this.name = "";
        this.email = "";
        this.delivery = "";
        this.phone = "";
        this.card = "";
        this.init(); 
    }

    /**
     * Initializes this objects properties. Based on the dat loaded from 
     * localStorage, new properties are added
     */
    init(){
        let plant = JSON.parse(localStorage.getItem('plant'));
        for(let property in plant){
            this[property] = plant[property];
        }

    }

    /**
     * Converts this object into a data object for the view to use
     * 
     * @returns {Object} a data object which contains inputs from the form view
     */
    getInputData(){
        let inputString = JSON.stringify(this);
        return JSON.parse(inputString);
    }

    // getStorageData() =>  return JSON.parse(localStorage.getItem('plant')); 

    /**
     * Stores plant data accross browser sessions. To store the model as a JSON
     * string under the key 'plant', window.localStorage is used
     */
    persist(){
        localStorage.setItem('plant', JSON.stringify(this));
    }

    getLength(){
        let size = 0;
        for(const item in this){
            size++;
        }
        return size;
    }

}