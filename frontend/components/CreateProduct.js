import useForm from "../lib/useForm";

export default function CreateProduct() {
    const {inputs, handleChange} = useForm({
        name: 'Laszlo',
        price: 213432542524624,
        description: 'one hell of a hound',
    });
    return (
        <form>
            <label htmlFor="name">
                Name
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Name"
                    value={inputs.name}
                    onChange={handleChange}
                />
            </label>
            <label htmlFor="price">
                Price
                <input
                    type="number"
                    id="price"
                    name="price"
                    placeholder="Price"
                    value={inputs.price}
                    onChange={handleChange}
                />
            </label>
            <label htmlFor="description">
                Description
                <input
                    type="description"
                    id="description"
                    name="description"
                    placeholder="Description"
                    value={inputs.description}
                    onChange={handleChange}
                />
            </label> 
            
        </form>
    )
};
