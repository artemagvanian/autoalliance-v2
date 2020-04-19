import React from "react";
import { Carousel, Container } from "react-bootstrap";
import { FirebaseContext } from "./Firebase";

const images = ["logo.jpg", "logo.jpg", "logo.jpg"];

class HomeCarousel extends React.Component {
  static contextType = FirebaseContext;
  constructor(props) {
    super(props);
    this.state = { imageUrls: [] };
  }
  async componentDidMount() {
    let firebase = this.context;
    let imageUrls = [];
    for (const i of images) {
      const url = await firebase.storage.ref(i).getDownloadURL();
      imageUrls.push(url);
    }
    this.setState({ imageUrls });
  }
  render() {
    return (
      <Container className="mt-4">
        <Carousel>
          {this.state.imageUrls.map((url) => (
            <Carousel.Item key={url}>
              <img className="d-block w-100" src={url} alt="First slide" />
              <Carousel.Caption>
                <h3>Slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    );
  }
}

export default HomeCarousel;
