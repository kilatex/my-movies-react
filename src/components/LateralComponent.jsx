import React from 'react'
import { SearchComponent } from './SearchComponent'
import { AddComponent } from './AddComponent'

export const LateralComponent = ({setMoviesList}) => {
    return (

        <>
            <aside className="lateral">
                <SearchComponent></SearchComponent>
                <AddComponent setMoviesList={setMoviesList}></AddComponent>
            </aside>
        </>
    )
}
