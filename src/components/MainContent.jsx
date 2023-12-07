import React, { useEffect } from 'react'

export const MainContent = ({moviesList,setMoviesList}) => {
    useEffect(() => {
        getMovies();
    }, [])

    const getMovies = () => {
        const movies = JSON.parse(localStorage.getItem('movies'));
        setMoviesList(movies);
    }

  

    return (

        <>
            {/* <!-- Main Content --> */}
            <div className="content">
           {    
                    moviesList.map(movie => {
                        return(
                            <div className="movie-item" key={movie.id}>
                                <h3 className="movie-title"> {movie.title}</h3>
                                <p className="movie-description">
                                    {movie.description}
                                </p>
                                <button className="edit">Edit</button> <button className="delete">Delete</button>
                            </div>
                        )
                })}

            </div></>
    )
}
