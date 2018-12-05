import React, { Component } from 'react';
// import SearchBox from './components/SearchBox'
import DataGrid from './components/DataGrid'
// import PageNav from './components/PageNav'
import Advice from './components/Advice'
import './App.css';
import Content from './components/Content';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        movies : [],
        movie : []
    }
  }
  
  callBack = (movie) => {
    console.log('call back func in app.js',movie);
    this.setState(Object.assign(this.state.movie, [movie]));
  }

  componentDidMount() {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=ef47563a6cb08d01735805b6afd84a9f&language=en-US&sort_by=popularity.desc')
      .then(response => {
        return response.json();
      }).then((allMovies) => {
        console.log('State before setting state and after fetch',this.state);  
        this.setState({movies : allMovies.results});
        console.log('State after setting state and after fetch',this.state);    
      });
  }


  render() {
    console.log('Render invoked',this.state);
    return (
      <div >
        <br />
        <div className="row">
          <div className="col-4">
            <div>
              <form className="form-inline my-2-mylg-0" >
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0"
                  >Search</button>
              </form>
            </div>
          </div>
          <div className="col-4">
            {/* <PageNav /> */}
          </div>
          <div className="col-4"></div>
        </div>
        <hr />
        <div >
          <div className="row">
            <div className="col-6">
              <DataGrid movies={this.state.movies} callBack={this.callBack}/>
            </div>
            <div className="col-6">
             <Content rowData={this.state.movie} />
              <div>
                <Advice />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
