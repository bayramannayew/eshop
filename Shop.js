import React, { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import { observer } from "mobx-react-lite";
import { fetchTypes } from "../http/deviceApi";
import { fetchBrands } from "../http/deviceApi";
import { fetchDevices } from "../http/deviceApi";
import Pages from "../components/Pages";
import useDeviceStore from "../store/DeviceStore";

const Shop = observer(() => {
  const {
    setDevices,
    setTotalCount,
    setTypes,
    setBrands,
    selectedType,
    selectedBrand,
    selectedUser,
    page,
  } = useDeviceStore();

  useEffect(() => {
    fetchTypes().then((data) => setTypes(data));
    fetchBrands().then((data) => setBrands(data));
    fetchDevices(null, null, 1, 3).then((data) => {
      setDevices(data.rows);
      setTotalCount(data.count);
    });
  }, []);
  useEffect(() => {
    fetchDevices(selectedType.id, selectedBrand.id, selectedUser.id, page, 2).then((data) => {
      setDevices(data.rows);
      setTotalCount(data.count);
    });
  }, [page, selectedType, selectedBrand, setDevices, setTotalCount]);
  return (
    <Container>
      <Row>
        <Col md={3}>
          <TypeBar />
        </Col>

        <Col md={9}>
          {/* <BrandBar /> */}
          <DeviceList />
          <Pages />
        </Col>
      </Row>
    </Container>
  );
});

export default Shop;
