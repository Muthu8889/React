import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
class Content extends Component {


    render() {
        // console.log('Content cponent props value .....', this.props);
        let src = "https://www.google.com/webhp?igu=1";

        return (
            <div>
                 {/* <a href="https://www.google.co.in">Google</a> */}
                 <iframe width="100%" height="400" title="Muthu" src={src} />
                {/* <div>
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
                </div> */}
            </div>
        );
    }
}

export default Content;