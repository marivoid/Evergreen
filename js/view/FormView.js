
export class FormView {
    constructor(){
        this.inputs = null;
        this.form = document.querySelector('#form-plant-name');

    }

    /**
     * Creates form inputs based on the JS object with data that was injected
     * 
     * @param {Object} dataObject - a js object which has input data for this form
     * @return {undefined}
     */
    createInputs(dataObject) {
        for(let property in dataObject){
            if(property === 'name' || property === 'email' || property === 'delivery' || property === 'phone' || property === 'card'){
                
                document.querySelector('#left-form').insertAdjacentHTML('beforeend', 

                `<div class="field is-capitalized">   
                    <label for="${property}" class="label">${property}</label>
                    <div class="control">
                        <input class="input" type="text" id="${property}" name="${property}" class="${property}" placeholder="${property}">
                    </div>

                    <div class="${property}-error error is-size-7"></div>
                    
                </div>`);
            }

            else {
                document.querySelector('#result').insertAdjacentHTML('beforeend', 

                `<p class="is-capitalized mx-4 py-4"><strong>${property}:</strong>
                        ${dataObject[property]}
                </p>`);
            }
            
        }

        this.inputs = document.querySelectorAll('#left-form input');
    }

    /**
     * Once there is an error (incorrect input), will place css class input.name-error
     *
     * @param {Object} input 
     * @param {String} error 
     */
    displayError(input, error) {
        let errorBox = document.getElementsByClassName(`${input.name}-error`);
        if(error) {
            errorBox[0].innerHTML = error;
        } else {
            errorBox[0].innerHTML = "";
        }
    }
}