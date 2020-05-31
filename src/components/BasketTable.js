import React from "react";

const BasketTable = ({ basket }) => {
  return basket.length > 0 ? (
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
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{good.title}</td>
            <td>1</td>
            <td>{good.newPrice} UAH</td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <p>Ваша корзина пуста</p>
  );
};

export default BasketTable;
