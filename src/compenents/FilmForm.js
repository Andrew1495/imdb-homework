import React, {useState} from "react";



const FilmForm = ({onFilmSubmit}) =>{

    const [name, setName] = useState("");
    const [url, setUrl] = useState("");


    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleUrlChange = (event) => {
        setUrl(event.target.value)
    };


    const handleFormSubmit = (event) => {
        event.preventDefault();
        const nameToSubmit = name.trim();
        const urlToSubmit = url.trim();

        if(!nameToSubmit || !urlToSubmit){
            return
        };


    onFilmSubmit({
        name: nameToSubmit,
        url: urlToSubmit
    });

    setName("");
    setUrl("");
};


    return(
        <>
            <form onSubmit={handleFormSubmit}>
                <input type="text" value={name} onChange={handleNameChange} placeholder="Film title" required/>


                <input type="url" value={url} onChange={handleUrlChange} placeholder='https://example.com'/>

                <input type="submit"  value="Add"/>
            </form>
        </>
    )
};





export default FilmForm;