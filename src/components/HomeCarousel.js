import React from "react";
import { Carousel, Container } from "react-bootstrap";

import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const GET_CAROUSEL_ITEMS = gql`
  query {
    allCarouselItem(sort: { order: ASC }) {
      title
      photo {
        asset {
          url
        }
      }
    }
  }
`;

const HomeCarousel = () => {
  const { loading, error, data } = useQuery(GET_CAROUSEL_ITEMS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <Container className="mt-4">
      <Carousel>
        {data.allCarouselItem.map((data, i) => (
          <Carousel.Item key={i}>
            <img
              className="d-block w-100"
              src={data.photo.asset.url}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{data.title}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default HomeCarousel;
