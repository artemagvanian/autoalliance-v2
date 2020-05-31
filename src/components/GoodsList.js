import React from "react";
import { Container, Row } from "react-bootstrap";
import Good from "./Good";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const GET_THICKNESS_GAUGES = gql`
  query {
    allThicknessGauge {
      _id
      title
      oldPrice
      newPrice
      slug {
        current
      }
      availability
      photos {
        asset {
          url
        }
      }
    }
  }
`;

const GoodsList = ({ category }) => {
  const { loading, error, data } = useQuery(GET_THICKNESS_GAUGES);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <Container className="py-4">
      <h3>{category}</h3>
      <Row>
        {data.allThicknessGauge.map((good, index) => (
          <Good key={index} good={good}></Good>
        ))}
      </Row>
    </Container>
  );
};

export default GoodsList;
