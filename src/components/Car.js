import React from "react";

import { Card, ListGroup, Col } from "react-bootstrap";

export default function Car({ car }) {
  return (
    <Col xs={12} sm={6} md={4} className="my-3">
      <Card>
        <Card.Img
          variant="top"
          src={car.photos[0].asset.url + "?h=360&w=640&fit=min"}
        />
        <Card.Body>
          <Card.Title>
            {car.brand} {car.model}
          </Card.Title>
          <Card.Text>{car.description}</Card.Text>
        </Card.Body>
        <ListGroup>
          <ListGroup.Item>Год выпуска: {car.manufacturingYear}</ListGroup.Item>
          <ListGroup.Item>
            Объём двигателя: {car.engineDisplacement}
          </ListGroup.Item>
          <ListGroup.Item>Пробег: {car.mileage} км</ListGroup.Item>
          <ListGroup.Item>Тип топлива: {car.fuelType}</ListGroup.Item>
          <ListGroup.Item>КПП: {car.gearbox}</ListGroup.Item>
          <ListGroup.Item>Тип привода: {car.driveType}</ListGroup.Item>
          <ListGroup.Item>
            <b>Цена: {car.price}$</b>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </Col>
  );
}
