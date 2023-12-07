import React, { useEffect, useState } from 'react'

export const SearchComponent = ({setMoviesList,moviesList}) => {
    const [search, setSearch] = useState('');

    const searchMovie = (e) =>{
        setSearch(e.target.value);
        let moviesFound = moviesList.filter(movie => {
            return movie.title.toLowerCase().includes(search.toLocaleLowerCase());
        })

        if(search.length <=1 || moviesFound <=0){
            moviesFound = JSON.parse(localStorage.getItem('movies'));
        }
        setMoviesList(moviesFound);

    }
   
    return (
        <div className="search">
            <h3>Searcher</h3>
            <form>
                <input type="text"  name="search" id="search"  onChange={searchMovie}/>
                <button>Search</button>
            </form>
        </div>
    )
}
