import { useState } from "react";
import beersApi from "../../utils/beersApi";

export const useCreateStates = () => {
    const [name, setName] = useState("");
    const [missingName, setMissingName] = useState(false);

    const [tagline, setTagline] = useState("");
    const [missingTagline, setMissingTagline] = useState(false);

    const [description, setDescription] = useState("");
    const [missingDescription, setMissingDescription] = useState(false);

    const [first_brewed, setFirst_brewed] = useState("");
    const [missingFirst_brewed, setMissingFirst_brewed] = useState(false);
    const [invalidFirst_brewed, setInvalidFirst_brewed] = useState(false);

    const [brewers_tips, setBrewers_tips] = useState("");
    const [missingBrewers_tips, setMissingBrewers_tips] = useState(false);

    const [attenuation_level, setAttenuation_level] = useState("");
    const [missingAttLevel, setMissingAttLevel] = useState(false);
    const [invalidAttLevel, setInvalidAttLevel] = useState(false);

    const [contributed_by, setContributed_by] = useState("");
    const [missingContributed_by, setMissingContributed_by] = useState(false);
    const [invalidContributed_by, setInvalidContributed_by] = useState(false);

    return {
        name, setName, missingName, setMissingName, tagline, setTagline, missingTagline, setMissingTagline, description,
        setDescription, missingDescription, setMissingDescription, first_brewed, setFirst_brewed, missingFirst_brewed,
        setMissingFirst_brewed, invalidFirst_brewed, setInvalidFirst_brewed, brewers_tips, setBrewers_tips,
        missingBrewers_tips, setMissingBrewers_tips, attenuation_level, setAttenuation_level, missingAttLevel,
        setMissingAttLevel, invalidAttLevel, setInvalidAttLevel, contributed_by, setContributed_by,
        missingContributed_by, setMissingContributed_by, invalidContributed_by, setInvalidContributed_by
    };
};

export class InputsData {
    constructor(states, setError) {
        this.states = states;
        this.setError = setError;
        this.inputs = [
            {
                label: "Name",
                type: "text",
                placeholder: this.states.missingName ? this.requiredMsg("Name") : undefined,
                value: this.states.name,
                handleChange: ({ target: { value } }) => {this.states.setName(value)},
                handleInvalid: ({ target }) => {
                    target.setCustomValidity(this.requiredMsg("Name"));
                    this.checkInputs();
                },
            },
            {
                label: "Tagline",
                type: "text",
                placeholder: this.states.missingTagline ? this.requiredMsg("tagline") : undefined,
                value: this.states.tagline,
                handleChange: ({ target: { value } }) => {this.states.setTagline(value)},
                handleInvalid: ({ target }) => {
                    target.setCustomValidity(this.requiredMsg("Tagline"));
                    this.checkInputs();
                },
            },
            {
                label: "Description",
                placeholder: this.states.missingDescription ? this.requiredMsg("Description") : undefined,
                value: this.states.description,
                handleChange: ({ target: { value } }) => {this.states.setDescription(value)},
                handleInvalid: ({ target }) => {
                    target.setCustomValidity(this.requiredMsg("Description"));
                    this.checkInputs();
                },
            },
            {
                label: "First Brewed",
                type: "text",
                placeholder: this.states.missingFirst_brewed ? "First Brewed is required: MM/YYYY" : "MM/YYYY",
                value: this.states.first_brewed,
                handleChange: ({ target: { value } }) => {this.states.setFirst_brewed(value)},
                pattern: "(?:(?:0[1-9]|1[0-2])/(?:19|20)[0-9]{2})",
                invalidMsg: "*First Brewed is only acceptable on the following format: MM/YYYY from 01/1900 to 12/2099",
                handleInvalid: ({ target }, invalidMsg) => {
                    target.setCustomValidity(target.validity.valueMissing ?
                        "First Brewed is required: MM/YYYY" :
                        invalidMsg.slice(1)
                    );
                    this.checkInputs();
                },
                invalidInput: this.states.invalidFirst_brewed,
            },
            {
                label: "Brewer Tips",
                type: "text",
                placeholder: this.states.missingBrewers_tips ? this.requiredMsg("Brewer Tips") : undefined,
                value: this.states.brewers_tips,
                handleChange: ({ target: { value } }) => {this.states.setBrewers_tips(value)},
                handleInvalid: ({ target }) => {
                    target.setCustomValidity(this.requiredMsg("Brewer Tips"));
                    this.checkInputs();
                }
            },
            {
                label: "Attenuation Level",
                type: "number",
                min: 0,
                max: 100,
                placeholder: this.states.missingAttLevel ? this.requiredMsg("Attenuation Level") : undefined,
                value: this.states.attenuation_level,
                handleChange: ({ target: { value } }) => {this.states.setAttenuation_level(value)},
                invalidMsg: "*Attenuation Level must be between 0 and 100!",
                handleInvalid: ({ target }, invalidMsg) => {
                    target.setCustomValidity(target.validity.valueMissing ?
                        this.requiredMsg("Attenuation Level") :
                        invalidMsg.slice(1)
                    );
                    this.checkInputs();
                },
                invalidInput: this.states.invalidAttLevel
            },
            {
                label: "Contributed By",
                type: "text",
                placeholder: this.states.missingContributed_by ? this.requiredMsg("Contributed By") : undefined,
                value: this.states.contributed_by,
                handleChange: ({ target: { value } }) => {this.states.setContributed_by(value)},
                pattern: "[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ /$]*",
                invalidMsg: "*Contributed By only accept letters!",
                handleInvalid: ({ target }, invalidMsg) => {
                    target.setCustomValidity(target.validity.valueMissing ?
                        this.requiredMsg("Contributed By") :
                        invalidMsg.slice(1)
                    );
                    this.checkInputs();
                },
                invalidInput: this.states.invalidContributed_by
            }
        ];
    };

    requiredMsg = label => `${label} is required!`;

    checkInputs = () => {
        let checkInputCount = 0;

        if (this.states.name) {
            this.states.setMissingName(false);
            checkInputCount += 1;
        } else this.states.setMissingName(true);
        if (this.states.tagline) {
            this.states.setMissingTagline(false);
            checkInputCount += 1;
        } else this.states.setMissingTagline(true);
        if (this.states.description) {
            this.states.setMissingDescription(false);
            checkInputCount += 1;
        } else this.states.setMissingDescription(true);
        if (this.states.first_brewed) {
            this.states.setMissingFirst_brewed(false);
            checkInputCount += 1;
            if (/^((0[1-9])|(1[0-2]))\/((1900)|(20[0-9][0-9]))$/.test(this.states.first_brewed)) {
                this.states.setInvalidFirst_brewed(false);
                checkInputCount += 1;
            } else this.states.setInvalidFirst_brewed(true);
        } else this.states.setMissingFirst_brewed(true);
        if (this.states.brewers_tips) {
            this.states.setMissingBrewers_tips(false);
            checkInputCount += 1;
        } else this.states.setMissingBrewers_tips(true);
        if (this.states.attenuation_level) {
            this.states.setMissingAttLevel(false);
            checkInputCount += 1;
            const numberedAttLevel = Number(this.states.attenuation_level);
            if ((numberedAttLevel >= 0) && (numberedAttLevel <= 100)) {
                this.states.setInvalidAttLevel(false);
                checkInputCount += 1;
            } else this.states.setInvalidAttLevel(true);
        } else this.states.setMissingAttLevel(true);
        if (this.states.contributed_by) {
            this.states.setMissingContributed_by(false);
            checkInputCount += 1;
            if (/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/.test(this.states.contributed_by)) {
                this.states.setInvalidContributed_by(false);
                checkInputCount += 1;
            } else this.states.setInvalidContributed_by(true);
        } else this.states.setMissingContributed_by(true);

        return (checkInputCount === 10) ? true : false;
    };

    removeExtraSpaces = text => text.split(" ").filter(word => word !== "").join(" ");

    capitalizeAllFirstLetters = text => {
        const removedExtraSpaces = this.removeExtraSpaces(text);
        return removedExtraSpaces.split(" ").map(word => {
            return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()
        }).join(" ");
    };

    capitalizeOnlyFirstLetter = text => {
        const removedExtraSpaces = this.removeExtraSpaces(text);
        const capitalizedFirstLetter = removedExtraSpaces.slice(0, 1).toUpperCase() + removedExtraSpaces.slice(1);
        return capitalizedFirstLetter.split(" ").map(word => word.slice(0, 1) + word.slice(1).toLowerCase()).join(" ");
    };

    addFinalPoint = text => {
        if ((/^[.!?]+$/.test(text.slice(-1))) && (text.slice(-2, text.length - 1) === " ")) {
            return text.slice(0, text.length -2) + text.slice(-1);
        };
        return (!/^[.!?]+$/.test(text.slice(-1))) ? text + "." : text
    };

    handleSubmit = async event => {
        event.preventDefault();

        const inputsAreValid = this.checkInputs();

        if (inputsAreValid) {
            const newBeer = {
                name: this.capitalizeAllFirstLetters(this.states.name),
                tagline: this.capitalizeAllFirstLetters(this.states.tagline),
                description: this.capitalizeOnlyFirstLetter(this.states.description),
                first_brewed: this.states.first_brewed,
                brewers_tips: this.capitalizeOnlyFirstLetter(this.states.brewers_tips),
                attenuation_level: Number(this.states.attenuation_level),
                contributed_by: this.capitalizeAllFirstLetters(this.states.contributed_by)
            };
            newBeer.tagline = this.addFinalPoint(newBeer.tagline);
            newBeer.description = this.addFinalPoint(newBeer.description);
            newBeer.brewers_tips = this.addFinalPoint(newBeer.brewers_tips);

            const addBeer = window.confirm(`Are you sure you want to add the beer ${newBeer.name}?`);
            if (addBeer) {
                const message = await beersApi.postBeer(newBeer);
                message.status ? this.setError(message) : alert(message.message);
            };
            this.states.setName("");
            this.states.setTagline("");
            this.states.setDescription("");
            this.states.setFirst_brewed("");
            this.states.setBrewers_tips("");
            this.states.setAttenuation_level("");
            this.states.setContributed_by("");
        };
    };
};