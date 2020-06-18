import React from "react";

import { Card, ListGroup, Col, Carousel } from "react-bootstrap";

export default function Car({ car }) {
  return (
    <Col xs={12} sm={6} md={4} className="my-3">
      <Card>
        <Carousel indicators={false}>
          {car.photos.map((photo, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={photo.asset.url + "?h=360&w=640&fit=min"}
                alt=""
              />
            </Carousel.Item>
          ))}
        </Carousel>
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
