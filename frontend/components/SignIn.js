import Form from './styles/Form';

export default function SignIn() {
    return (
        <Form onSubmit={async (e) => {
            e.preventDefault();
            // console.log({inputs});
            //submit input fields to backend
            const res = await createProduct();
            clearForm();
            //Go to the new product's page
            Router.push({
                pathname: `/product/${res.data.createProduct.id}`,
            })
        }}>
            <DisplayError error={error} />
            <fieldset disabled={loading} aria-busy={loading}>
                <label htmlFor="email">
                    Email
                    <input
                        required
                        type="email"
                        id="email"
                        name="email"
                        placeholder="email"
                        value={inputs.email}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="password">
                    Password
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="password"
                        value={inputs.password}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Sign In</button>
            </fieldset>

            {/* //EXAMPLE methods */}
            {/* <button type='button' onClick={clearForm}>
                Clear Form
            </button>
            <button type='button' onClick={resetForm}>
                Reset Form
            </button> */}

        </Form>
    )
    
};