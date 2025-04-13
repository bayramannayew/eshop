import { observer } from "mobx-react-lite";
import React from "react";
import {Row} from "react-bootstrap"
import DeviceItem from "./DeviceItem";
import useDeviceStore from "../store/DeviceStore";

const DeviceList =observer (()=>{
    const {devices} = useDeviceStore()
    return(
<Row className="d -flex">
{devices.map(device =>
    <DeviceItem key={device.id} device={device} />
    )}
</Row>
    );
});
export default DeviceList