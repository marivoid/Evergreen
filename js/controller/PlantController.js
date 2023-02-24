
export class PlantController {
    /**
     * Creates an object that represents the animal controller
     * 
     * @param {type} model the model the controller interacts with
     * @param {type} view tge view the controller interacts with
     * @returns {AnimalController} the object representing the plant controller 
     */
     constructor(model, view) {
        this.model = model;
        this.view = view;

        //1/ render all the selects
        let properties = this.model.getProperties();
        this.view.renderSelects(properties);

        //2. placing options in the first select
        let firstSelectID = properties[0];
        this.view.addOptions(firstSelectID, this.model.getOptions(firstSelectID));

        //3. register one event handler for all select 'change' events
        this.view.selects.forEach((select) => {
            select.addEventListener('change', this.handleSelectChange);
        });

        //4. register from submit and reset handler
        this.view.plantForm.addEventListener('submit', this.handleFormSubmit);
        this.view.plantForm.addEventListener('reset', this.resetPlant);
    }

    handleSelectChange = (event) => {
        //updating the model 
        let select = event.target;
        this.model[select.id] = select.value;

        //updating the view (plantsDiv and selectsDiv)
        let nextSelect = select.nextElementSibling;

        while (nextSelect) {
            this.view.addOptions(nextSelect.id, this.model.getOptions(nextSelect.id));
            nextSelect = nextSelect.nextElementSibling;
        }

        this.view.renderPlant();
    }

    /**
     * 
     * @param {*} event 
     */
    handleFormSubmit = (event) => {
        //event.preventDefault();
        this.model.persist();
    }

    /**
     * function for reseting the image once user presses 'reset' button
     */
    resetPlant = () => {
        this.view.resetPlant();
    }

}