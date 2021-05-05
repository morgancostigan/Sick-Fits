import { useState } from "react";

export default function CreateProduct() {
    const [name, setName] = useState ('Potato');
    return (
        <form>
            <label htmlFor="name">
                Name
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Name"
                    value={name}
                    onChange={(e) => {
                        console.log('e.target.value', e.target.value);
                        setName(e.target.value);
                    }}
                />
            </label>
            <label htmlFor="price">
                Price
                <input
                    type="price"
                    id="price"
                    name="price"
                    placeholder="Price"
                    value={7}
                    onChange={(e) => {
                        console.log('e.target.value', e.target.value);
                        setName(e.target.value);
                    }}
                />
            </label>
            
        </form>
    )
};
