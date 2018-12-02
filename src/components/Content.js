import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
class Content extends Component {
    
   
    render() {
        console.log('Content cponent props value .....',this.props);
        
        
        return(
            <div>
                   <div>
                    <BootstrapTable data={this.props.rowData}>
                        <TableHeaderColumn isKey dataField='original_title'>
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

export default Content;