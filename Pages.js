import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Pagination } from "react-bootstrap";
import { Context } from "../index";
import useDeviceStore from "../store/DeviceStore";

const Pages = observer (()=>{
   const {page: currentPage, setPage, totalCount, limit} = useDeviceStore()
   const pageCount = Math.ceil(totalCount / limit)
   const pages = []

   for( let i=0; i<pageCount; i++){
    pages.push(i + 1)
   }
   
    return(
        <Pagination className="mt-5">
{pages.map(page=>
    <Pagination.Item
    key ={page}
    active={page === currentPage}
    onClick={() =>setPage(page)}
    >
        {page}
        </Pagination.Item>
    )}
        </Pagination>
    )
})

export default Pages