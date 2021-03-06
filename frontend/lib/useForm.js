import { useState, useEffect } from "react";

export default function useForm(initial = {}) {
    //create a state object for our inputs
    const [inputs, setInputs] = useState(initial);
    const initialValues = Object.values(initial).join('');

    useEffect(() => {
        //this function runs when what we are watching changes
        setInputs(initial);
    }, [initialValues])

    function handleChange(e) {
        let { value, name, type } = e.target;
        if(type === 'number'){
            value = parseInt(value);
        }
        //vvv this is for file uploads vvv
        if(type === 'file'){
            [value] = e.target.files;
        }
        
        setInputs({
            //copy existing state
            ...inputs,
            [name]: value,
        });
    };

    function resetForm(){
        setInputs(initial)
    }

    function clearForm() {
        const blankState = Object.fromEntries(Object.entries(inputs)
            .map(([key, value]) => [key, '']));
        setInputs(blankState);
    }

    //return the things we want surfaced 
    return {
        inputs,
        handleChange,
        resetForm,
        clearForm,
    };

};
