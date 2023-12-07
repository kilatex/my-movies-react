import React from 'react'
import { SearchComponent } from './SearchComponent'
import { AddComponent } from './AddComponent'

export const LateralComponent = () => {
    return (

        <>
            <aside className="lateral">
                <SearchComponent></SearchComponent>
                <AddComponent></AddComponent>
            </aside>
        </>
    )
}
