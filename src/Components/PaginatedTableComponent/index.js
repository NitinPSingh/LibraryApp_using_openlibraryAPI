import {  IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useState } from 'react';
import { TableData } from '../../Constants';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import useStore from '../../store/useStore';


function PaginatedTableComponent() {

    
    const {data,lastPublishDates,sorted,sort} = useStore();
    // const createData = (data) => {
    //     return { data}
    // }

    return (
        <TableContainer >
          <Table className="border-[1px] !w-[60vw]" aria-label="simple table">
            <TableHead>
              <TableRow>
                {console.log(data,"dd",lastPublishDates)}
                
                <TableCell ><div className='flex justify-between items-center'>
                Title and sub title 
                {/* <IconButton onClick={()=>sort()}>{sorted?< KeyboardArrowDownIcon onClick={()=>sort()}/>:<KeyboardArrowUpIcon onClick={()=>sort()}/>}</IconButton> */}
                  </div></TableCell>
                <TableCell >Author</TableCell>
                <TableCell >First Publish</TableCell>
                <TableCell >Latest Publish</TableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.key}>
                  
                  <TableCell >{row.title}</TableCell>
                  <TableCell >{row.author.map((i)=><>{i} </>)}</TableCell>
                  <TableCell >{row.first_pub}</TableCell>
                  <TableCell >{row.last_pub}</TableCell>
                
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );;
}

export default PaginatedTableComponent;