const Dog = (props) => {
    const loaded = () => {
        const {message} = props.dog;

        return (
            <div>
                 <img className="dog-pic"alt="dog"src={message} width="400" height="300"></img>
            </div>
        )
    }
    const loading = () => {
        return <h1>click for dog</h1>
    }
    return props.dog ? loaded() : loading();
}

export default Dog;