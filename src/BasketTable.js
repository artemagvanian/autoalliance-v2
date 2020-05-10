import React from "react";

class BasketTable extends React.Component {
  render = () => {
    return this.props.basket.length > 0 ? (
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
          {this.props.basket.map((good, index) => (
            <tr key={good.id}>
              <th scope="row">{index + 1}</th>
              <td>{good.title}</td>
              <td>1</td>
              <td>{good.price.current} UAH</td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <p>Ваша корзина пуста</p>
    );
  };
}

export default BasketTable;
