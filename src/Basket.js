import React from "react";
import { Button, Popover, OverlayTrigger } from "react-bootstrap";
import BasketContext from "./BasketContext";

class Basket extends React.Component {
  render() {
    const goods = (
      <Popover id="popover-basic" style={{ maxWidth: 320 }}>
        <Popover.Title as="h3" className="text-center">
          Ваши товары
        </Popover.Title>
        <BasketContext.Consumer>
          {({ basket }) => (
            <Popover.Content>
              {basket.length == 0 ? (
                <p>Тут ничего нет...</p>
              ) : (
                <div>
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">№</th>
                        <th scope="col">Название</th>
                        <th scope="col">Количество</th>
                        <th scope="col">Цена</th>
                      </tr>
                    </thead>
                    <tbody>
                      {basket.map((good, index) => (
                        <tr key={good.id}>
                          <th scope="row">{index + 1}</th>
                          <td>{good.title}</td>
                          <td>1</td>
                          <td>{good.price.current} UAH</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <Button variant="info" block>
                    Подтвердить покупку
                  </Button>
                </div>
              )}
            </Popover.Content>
          )}
        </BasketContext.Consumer>
      </Popover>
    );
    return (
      <OverlayTrigger trigger="focus" placement="bottom" overlay={goods}>
        <Button variant="info" block>
          Корзина
        </Button>
      </OverlayTrigger>
    );
  }
}

export default Basket;
