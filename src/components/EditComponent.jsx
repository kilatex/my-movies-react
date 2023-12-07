import React from 'react'

export const EditComponent = ({movie,getMovies,setMovieId,setMoviesList}) => {
    const editMovie = (e,id) =>{
        e.preventDefault();
        const target = e.target;
        // getAllMovies
        const movies = getMovies();

        // findMovie d
        const movieIndex = movies.findIndex(movie => movie.id == id);
        
        // edit movie
        const movieToEdit = {
            id,
            title: target.title.value,
            description: target.description.value
        }
        
        // save in localstorage
        movies[movieIndex] = movieToEdit;
        localStorage.setItem('movies',JSON.stringify(movies));

        //states
        setMovieId(0);
        setMoviesList(movies);
        
    }
  return (
    <div className='edit_movie'>
          <form onSubmit={e => editMovie(e,movie.id)} >
                <input type="text" name="title" placeholder="Title" id="" defaultValue={movie.title} />
                <textarea name="description" placeholder="Description" defaultValue={movie.description} id="" cols="30" rows="10"></textarea>
                <input type="submit" value="Save" />
            </form>

    </div>
  )
}
