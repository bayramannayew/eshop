import { observer } from "mobx-react-lite";
import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import useDeviceStore from "../store/DeviceStore";

const BrandBar = observer(() => {
  const { brands, selectedBrand, setSelectedBrand } = useDeviceStore();
  return (
    <ListGroup>
      <h5>Okuw derejeleri</h5>
      {brands.map((brand) => (
        <ListGroup.Item
          style={{ cursor: "pointer" }}
          active={brand.id === selectedBrand.id}
          onClick={() => setSelectedBrand(brand)}
          key={brand.id}
        >
          {brand.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
});
export default BrandBar;