export class FormValidation {
    constructor(){
        this.error = "";
    }

    /**
     * Gets error
     * 
     * @returns this.error
     */
    getError(){
        return this.error;
    }

    /**
     * Validates if input is either empty or in the wrong format
     * If so, error message is displayed
     * 
     * @param {Object} input 
     * @param {String} value 
     * @param {RegExp} regex 
     * @returns true (empty error message if everything valid)
     */
    validate(input, value, regex){
        if(value === ''){
            this.error = `The ${input} input is required.`;
            return false;
        }

        if(value.trim().length === 0){
            this.error = `The ${input} field cannot be empty.`;
            return false;
        }

        if(!regex.test(value)){
            this.error = `Format for ${input} is not valid.`;
            return false;
        }

        this.error = "";
        return true;
    }
}
