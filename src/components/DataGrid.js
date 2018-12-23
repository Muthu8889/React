import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class DataGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedMovie: {},
            id: 4,
            description: "asdasd",
            value: 25,
            dateValue: "12-45-45",
            selectedId : 0
        }
    }
    handleRowSelect = (row) => {
        // console.log('selectedRow row', row);
        this.setState(Object.assign(this.state.selectedMovie, row));
        
        console.log('selectedRow state', this.state.selectedMovie.id);
        
        this.props.callBack(row);
    }
    add = () => {
        fetch('http://localhost:8082/rest/stock/add/'+this.state.id+'/'+this.state.description+'/'+this.state.value+'/'+this.state.dateValue).then(this.props.refresh());
    }

    delete = () => {
        fetch('http://localhost:8082/rest/stock/delete/'+this.state.selectedMovie.id).then(this.props.refresh());
    }

    save = (e) =>{
        this.setState({
            [e.target.name] : e.target.value 
        })
    }

    render() {
        console.log("Rerenderrrrrr.....", this.props);
        const selectRow = {
            mode: 'radio',
            clickToSelect: true,
            onSelect: this.handleRowSelect
        };
        return (
            <div>
                <br />
                <div className="row" >
                    <div className="col-2"><button className="btn btn-danger" onClick={this.delete} >Delete</button></div>
                    <div className="col-2"><input className="form-control" placeholder="Sequence number" name={"id"} onChange={this.save} /></div>
                    <div className="col-2"><input className="form-control" placeholder="Description of Data" name={"description"} onChange={this.save} /></div>
                    <div className="col-2"><input className="form-control" placeholder="value on day" name={"value"} onChange={this.save} /></div>
                    <div className="col-2"><input className="form-control" placeholder="Date value" name={"dateValue"} onChange={this.save} /></div>
                    <div className="col-2"><button className="btn btn-success" onClick={this.add} >Add</button></div>
                </div>
                <br />
                <div>
                    <BootstrapTable data={this.props.movies} selectRow={selectRow} pagination search>
                        <TableHeaderColumn dataField='id' isKey={true} >
                            Title
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='description'>
                            Description
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='value'>
                            Value
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='date'>
                            Date
                        </TableHeaderColumn>
                    </BootstrapTable>
                </div>
            </div>

        );
    }
}

export default DataGrid;