import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../index";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import useDeviceStore from "../store/DeviceStore";
const BrandBar= observer(()=>{
    const {brands, setSelectedBrand, selectedBrand} = useDeviceStore()
return (
   <Row className="d-flex">
        {brands.map( brand=>
            <Card
            style={{cursor:'pointer', width:200}}
            key = {brand.id}
            className="p-1"
            onClick={()=> setSelectedBrand(brand)}
            border = {brand.id === selectedBrand.id ? 'danger': 'light'}
            >
                {/* {brand.name} */}
            </Card>
            )}
   </Row>
);
});
export default BrandBar