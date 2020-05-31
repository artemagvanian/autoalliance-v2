import React from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";

class SearchBar extends React.Component {
  render() {
    return (
      <Form inline className="mr-sm-2">
        <InputGroup>
          <FormControl type="text" placeholder="Поиск товаров" />
          <InputGroup.Append>
            <Button variant="info">Найти</Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
    );
  }
}

export default SearchBar;
