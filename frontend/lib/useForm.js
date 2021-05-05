import { useState } from "react";

export default function useForm(initial = {}) {
    //create a state object for our inputs
    const [inputs, setInputs] = useState(initial);

    function handleChange(e) {
        let { value, name, type } = e.target;
        if(type === 'number'){
            value = parseInt(value);
        };
        setInputs({
            //copy existing state
            ...inputs,
            [name]: value,
        });
    };

    //return the things we want surfaced 
    return {
        inputs,
        handleChange,
    };

};
