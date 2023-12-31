import React, { useEffect, useState } from 'react'
import { EditComponent } from './EditComponent';

export const MainContent = ({moviesList,setMoviesList}) => {
    const [movieId,setMovieId] = useState(0)
    useEffect(() => {
        getMovies();
    }, [])

    const getMovies = () => {
        const movies = JSON.parse(localStorage.getItem('movies'));
        setMoviesList(movies);

        return movies
    }

    const deleteMovie = (id) =>{
       const movies = getMovies();
       const newMoviesList = movies.filter(movie => movie.id !== id);

       setMoviesList(newMoviesList);
        localStorage.setItem('movies',JSON.stringify(newMoviesList));
    }

    if(moviesList){
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
                                    <button className="edit" onClick={ ()=> setMovieId(movie.id) } >Edit</button> 
                                    <button className="delete" onClick={ () => deleteMovie(movie.id)} >Delete</button>

                                    {movieId == movie.id && (
                                        <EditComponent movie={movie} 
                                        getMovies={getMovies}
                                        setMovieId={setMovieId}
                                        setMoviesList={setMoviesList}
                                        ></EditComponent>
                                    )}

                                </div>
                            )
                    })}
    
                </div>
            </>
        )
    }
    else{
        return(
            <div className="message">
                <h3>Theres no movies to show</h3>
            </div>
        )
    }
   
}


