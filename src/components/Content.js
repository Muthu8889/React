import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
class Content extends Component {


    render() {
        console.log('Content cponent props value .....', this.props);


        return (
            <div>
                <div>
                    <BootstrapTable data={this.props.rowData}>
                        <TableHeaderColumn isKey dataField='id'>
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

export default Content;