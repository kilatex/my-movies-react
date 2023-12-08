import React, { useEffect, useState } from 'react'

export const SearchComponent = ({setMoviesList,moviesList}) => {
    const [search, setSearch] = useState('');
    const [notFound,setNotFound] = useState(false);
    const searchMovie = (e) =>{
        setSearch(e.target.value);
        let moviesFound = moviesList.filter(movie => {
            return movie.title.toLowerCase().includes(search.toLocaleLowerCase());
        })

        if(search.length <=1 || moviesFound <=0){
            moviesFound = JSON.parse(localStorage.getItem('movies'));
            setNotFound(true);
        }else{
            setNotFound(false);

        }
        setMoviesList(moviesFound);

    }
   
    return (
        <div className="search">
            <h3>Searcher</h3>
            {(notFound && search.length > 1)&&(
                <span className='error'>Movie Not FOund</span>
            )}
            <form>
                <input type="text"  name="search" id="search"  onChange={searchMovie}/>
                <button>Search</button>
            </form>
        </div>
    )
}
