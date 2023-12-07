import React from 'react'

export const SearchComponent = () => {
    return (
        <div className="search">
            <h3>Searcher</h3>
            <form>
                <input type="text" name="search" id="search" />
                <button>Search</button>
            </form>
        </div>
    )
}
