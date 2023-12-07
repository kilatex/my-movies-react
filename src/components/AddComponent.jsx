import React, { useState } from 'react'

export const AddComponent = () => {
    const [movie, setMovie] = useState();

    const getNewMovie = (e) =>{
        e.preventDefault();
        const newMovie = {
            id: new Date().getTime(),
            title : e.target.title.value,
            description: e.target.description.value
        }
        
        setMovie(newMovie);
        addMovie(newMovie)
    }

    const addMovie = movie => {
        let elements = JSON.parse(localStorage.getItem("movies"));

        if(Array.isArray(elements)){
            elements.push(movie);
        }else{
            elements = [movie];
        }

        localStorage.setItem("movies", JSON.stringify(elements));

        return movie;
    }
    return (
        <div className="add">
            <h3>Add Movie</h3>
            <form onSubmit={getNewMovie}>
                <input type="text" name="title" placeholder="Title" id="" />
                <textarea name="description" placeholder="Description" id="" cols="30" rows="10"></textarea>
                <input type="submit" value="Save" />
            </form>

        </div>
    )
}
