import { FormValidation } from "../validation/FormValidation.js"
import { regex } from "../validation/regex.js";


/**
 * A class which responds to the user inputs
 */
export class FormController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.view.createInputs(this.model.getInputData());
        this.validator = new FormValidation();

        //registering one event handler for all input 'change' events
        this.view.inputs.forEach((input) => {
            input.addEventListener('change', this.handleInputChange);
        });

        //registering form submit handler
        this.view.form.addEventListener('submit', this.handleFormSubmit);
    }

    handleInputChange = (event) => {
        //upadting model
        let input = event.target;
        this.model[input.name] = input.value;
        this.validateInputField(input);
    }

    //validating inputs to proper formats
    validateInputField = (input) => {
        let checking = this.validator.validate(input.name, input.value, regex[input.name]);
        this.view.displayError(input, this.validator.getError());

        return checking;
    }

    handleFormSubmit = (event) => {
        //preventing the default action from performing
        event.preventDefault();

        let areValidated = [];

        //checking if input is in correct format
        this.view.inputs.forEach((input) => {
            areValidated.push(this.validateInputField(input))
        });

        //not allowing incorrect information to be saved to the local storage
        if(areValidated.every(Boolean)) this.model.persist();
    }
}