import React from "react";
import { Container, Row } from "react-bootstrap";
import Car from "./Car";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const GET_CARS_FOR_SALE = gql`
  query {
    allCarForSale {
      _id
      brand
      model
      manufacturingYear
      engineDisplacement
      mileage
      gearbox
      fuelType
      driveType
      price
      description
      photos {
        asset {
          url
        }
      }
    }
  }
`;

const CarList = () => {
  const { loading, error, data } = useQuery(GET_CARS_FOR_SALE);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <Container className="py-4">
      <h3>Автоплощадка</h3>
      <Row>
        {data.allCarForSale.map((car, index) => (
          <Car key={index} car={car}></Car>
        ))}
      </Row>
    </Container>
  );
};

export default CarList;
