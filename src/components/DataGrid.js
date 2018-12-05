import React, { Component } from 'react';
import Date from './Date'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class DataGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedMovie: {}
        }
    }
    handleRowSelect = (row) => {
        // console.log('selectedRow row', row);
        // this.setState(Object.assign(this.state.selectedMovie, row));
        // console.log('selectedRow state', this.state.selectedMovie);
        this.props.callBack(row);
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
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4">
                        <button className="btn btn-success">+</button>
                    </div>
                    <div className="col-4">
                        <Date />
                    </div>
                </div>
                <br />
                {/* <div className="row" >
                <div className="col-1"><button className="btn btn-danger" >-</button></div>
                <div className="col-1"><input className="form-control" placeholder="Sequence number" size="2"/></div>
                <div className="col-3"><input className="form-control" placeholder="Description of Data" size="16" /></div>
                <div className="col-2"><input className="form-control" placeholder="value on day" size="4"/></div>
                <div className="col-4"><input className="form-control" placeholder="Data value" size="20" /></div>
                <div className="col-1"><button className="btn btn-primary" >-></button></div>
            </div> */}
                <div>
                    <BootstrapTable data={this.props.movies} selectRow={selectRow} pagination search>
                        <TableHeaderColumn isKey dataField='title'>
                            Title
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='vote_average'>
                            Vote Average
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='release_date'>
                            Release Date
                        </TableHeaderColumn>
                    </BootstrapTable>
                </div>
            </div>

        );
    }
}

export default DataGrid;