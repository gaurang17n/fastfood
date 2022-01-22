// src/components/pagination.table.js
import React from "react";

import { useTable, usePagination } from 'react-table'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Image} from 'react-bootstrap'
function Table({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 2, pageSize: 5 },
        },
        usePagination
    )

    // Render the UI for your table
    return (
        <div>
            <table className="table" {...getTableProps()}>
            <thead >
                            <tr>
                        <th colSpan={6} id="menuburger">
                                    Burger Menu
                        </th>
                        </tr>
                            <tr >
                            <th >ID</th>
                            <th>Name</th>
                            <th rowSpan={2}>Description</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Action</th>
                            </tr>
                </thead>
                <tbody id="td">
                            {
                                data.map((pro)=>(
                                        <tr id="td">
                                        <td /* id="btnid1" */>{pro.id}</td>
                                        <td /* id="btnid1" */>{pro.name}</td>
                                        <td /* id="btnid1" */ >{pro.discription}</td>
                                        <td /* id="btnid1" */>
                                        <Image src={pro.img} style={{height:'100px',weidth:'100px'}}/>
                                        </td>
                                        <td /* id="btnid1" */>{pro.price}</td>
                                        <td id="btnid">
                                            <Button variant="danger" style={{margin:'10px'}} >Delete</Button>
                                            <Button id="updatebtn" >Update</Button>
                                        </td>
                                        </tr>

                            ))
                            }
                        </tbody>
            </table>
            {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
            <ul className="pagination">
                <li className="page-item" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    <a className="page-link">First</a>
                </li>
                <li className="page-item" onClick={() => previousPage()} disabled={!canPreviousPage}>
                    <a className="page-link">{'<'}</a>
                </li>
                <li className="page-item" onClick={() => nextPage()} disabled={!canNextPage}>
                    <a className="page-link">{'>'}</a>
                </li>
                <li className="page-item" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                    <a className="page-link">Last</a>
                </li>
                <li>
                    <a className="page-link">
                        Page{' '}
                        <strong>
                            {pageIndex + 1} of {pageOptions.length}
                        </strong>{' '}
                    </a>
                </li>
                <li>
                    <a className="page-link">
                        <input
                            className="form-control"
                            type="number"
                            defaultValue={pageIndex + 1}
                            onChange={e => {
                                const page = e.target.value ? Number(e.target.value) - 1 : 0
                                gotoPage(page)
                            }}
                            style={{ width: '100px', height: '20px' }}
                        />
                    </a>
                </li>{' '}
                <select
                    className="form-control"
                    value={pageSize}
                    onChange={e => {
                        setPageSize(Number(e.target.value))
                    }}
                    style={{ width: '120px', height: '38px' }}
                >
                    {[5, 10, 20, 30, 40, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
            </ul>
        </div >
    )
}

function PaginationTableComponent(props) {
    const data =props.tabledata
    const temp=props.temp
  /* console.log('props from other component'+ JSON.stringify(props.tabledata) ) */
/*   {
     data.map((pro,index)=>{
         console.log(index)
     })
  } */
        const keys = [];
        for (const key in data[0]) {
            keys.push(key);
        }
        console.log("New Keys Are" +keys)



    var customer_key = [];
    /* const temp=['id','name','discription','img','price'] */
        for (var x = 0; x < 5; x++)
        {
            console.log("Temp Data of array"+ typeof(temp))
            console.log("Keys data " + typeof(keys))
        customer_key[x] = {
            Header: temp[x],
            accessor: temp[x]
         }
        }

   /*  console.log(data)
    for (let i=0;i<5;i++){

        customer_key+={
                Header: temp[i],
                accessor: temp[i], 
    
        }
    }  */

    console.log("Customer keys are" + customer_key)

    const columns = React.useMemo(
        () => [
            
            {
                Header: 'Name',
                columns: customer_key
            },
        ],
        []
    )

   
  /* console.log('Table Data'+JSON.stringify(data)); */


    return (
        <Table columns={columns} data={data} />
    )
}

export default PaginationTableComponent;