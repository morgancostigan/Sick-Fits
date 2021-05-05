import useForm from "../lib/useForm";

export default function CreateProduct() {
    const {inputs, handleChange, clearForm, resetForm} = useForm({
        name: 'Name It!',
        price: 0,
        description: 'Describe It',
        bop: 'Bop It!',
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
            <button type='button' onClick={clearForm}>
                Clear Form
            </button>
            <button type='button' onClick={resetForm}>
                Reset Form
            </button>
            
        </form>
    )
};
