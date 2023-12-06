import React from 'react'

export const LateralComponent = () => {
    return (

        <>
            <aside className="lateral">
                <div className="search">
                    <h3>Searcher</h3>
                    <form>
                        <input type="text" name="search" id="search" />
                        <button>Search</button>
                    </form>
                </div>
                <div className="add">
                    <h3>Add Movie</h3>
                    <input type="text" name="title" placeholder="Title" id="" />
                    <textarea name="description" placeholder="Description" id="" cols="30" rows="10"></textarea>
                    <input type="submit" value="Save" />
                </div>
            </aside>
        </>
    )
}
