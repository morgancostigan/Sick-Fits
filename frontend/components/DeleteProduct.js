export default function DeleteProduct({id, children}) {
    return <button type="button" onClick={() => {
        confirm('Should we really remove this item from existence?')
    }}>
        {children}
    </button>
};