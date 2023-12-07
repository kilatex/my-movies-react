import React from 'react'
import { SearchComponent } from './SearchComponent'
import { AddComponent } from './AddComponent'

export const LateralComponent = ({setMoviesList, moviesList}) => {
    return (

        <>
            <aside className="lateral">
                <SearchComponent setMoviesList={setMoviesList} moviesList={moviesList}></SearchComponent>
                <AddComponent setMoviesList={setMoviesList}></AddComponent>
            </aside>
        </>
    )
}
