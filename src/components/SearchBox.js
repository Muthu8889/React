import React, { Component } from 'react';


class SearchBox extends Component {

    render() {

        return (
            <div>
                <form className="form-inline my-2-mylg-0" >
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0">Search</button>
                </form>
            </div>
        );
    }

}

export default SearchBox;
