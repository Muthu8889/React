import React, { Component } from 'react';

class Advice extends Component {
    render() {
        return(
            <div>
                <h3>Advice:</h3>
                <textarea rows="4" cols="50" placeholder="Add commments" className="form-control" ></textarea>
                <button className="btn btn-priamary">Add comment</button>
            </div>
        );
    }
}

export default Advice;