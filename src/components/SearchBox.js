import React, { Component } from 'react';


class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            muthu: '',
        }
    }

    jegan() {
        console.log("Jegan invoked ----- >>>>>");
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=ef47563a6cb08d01735805b6afd84a9f&language=en-US&sort_by=popularity.desc')
            .then(response => {
                return response.json();
            }).then(json=>{
                console.log('Json.................>?>>>>',json);
            });

    }

    alerting = () => {
        alert('Your input value is ' + this.state.muthu);
    }

    render() {
   
        return (
            <div>
                <form className="form-inline my-2-mylg-0" >
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0"
                     onClick={() => this.jegan()}>Search</button>
                </form>
            </div>
        );
    }

}

export default SearchBox;
