import { useState } from "react";

export default function useForm(initial = {}) {
    //create a state object for our inputs
    const [inputs, setInputs] = useState(initial);

    function handleChange(e) {
        setInputs({
            //copy existing state
            ...inputs,
            [e.target.name]: e.target.value,
        })
    }
}