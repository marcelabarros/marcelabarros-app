import React, { useState, useEffect } from "react";
import axios from "axios";

export default function OrdersList(props) {
  const [rendered, setRendered] = useState(null);

  useEffect(() => {
    const request = async () => {
      const orders = await axios.get(
        "https://marcela-barros.herokuapp.com/api/product/orders"
      );
      const renderedOrders = orders.data.map((order, index) => {
        return (
          <div className="order" key={index}>
            <h3>{order.clientName}</h3>
            <p>Fecha: {order.date}</p>
            <p>Color: {order.productOrdered.color}</p>
            <p>Size: {order.productOrdered.size.toUpperCase()}</p>
            <p>Email: {order.clientEmail}</p>
          </div>
        );
      });
      setRendered(renderedOrders);
    };
    request();
  }, []);

  return (
    <>
      <h2>Pedidos</h2>
      <div className="orders-list">{rendered}</div>
    </>
  );
}
