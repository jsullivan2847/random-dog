

const Form = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();
    
        props.getDog();
    }
    return(
        <form onSubmit={handleSubmit}>
            <label></label>
            <input className="dog-btn" type="submit" value="Generate Dog"></input>
        </form>
    )
}

export default Form;