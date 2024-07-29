import React, { useEffect, useState } from "react";
import { realtimeDb } from "../firebaseConfig";
import { ref, onValue, update } from "firebase/database";
import "./ShopkeeperCart.css";

const ShopkeeperCart = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const shopkeeperEmail = localStorage.getItem('shopkeeperToken'); 

    const ordersRef = ref(realtimeDb, "orders");
    onValue(ordersRef, (snapshot) => {
      const ordersData = [];
      snapshot.forEach((childSnapshot) => {
        const order = { id: childSnapshot.key, ...childSnapshot.val() };
        if (order.shopkeeper === shopkeeperEmail) {
          ordersData.push(order);
        }
      });
      setOrders(ordersData.reverse());
    }, (error) => {
      console.error("Error fetching orders:", error);
    });
  }, []);

  const handlePlaceOrder = (order) => {
    const updatedOrder = {
      ...order,
      status: "Completed",
      message: "Your order has been packed!",
    };

    const orderRef = ref(realtimeDb, `orders/${order.id}`);
    update(orderRef, updatedOrder)
      .then(() => {
        alert(`Order completed for Customer: ${order.name}`);
      })
      .catch((error) => {
        console.error("Error updating order:", error);
      });
  };

  return (
    <div className="shopkeeper-cart">
      <div className="container">
        <header>
          <h1>Shopkeeper Dashboard</h1>
        </header>
        <div className="product">
          {orders.length === 0 ? (
            <p>No orders available.</p>
          ) : (
            orders.map((order) => (
              <div className="product-item" key={order.id}>
                {order.imageUrl && (
                  <img src={order.imageUrl} alt={`Order ${order.id}`} />
                )}
                <h3 className="customer">Customer: {order.name}</h3>
                <h3 className="customer">Phone: {order.phoneNumber}</h3>
                <p className="customer">Date: {order.date}</p>
                <p className="customer_items">Items: {order.items}</p>
                {order.deliveryMethod === "delivery" && (
                  <p className="customer_address">Address: {order.address}</p>
                )}
                <button
                  onClick={() => handlePlaceOrder(order)}
                  className={`place-order-btn ${
                    order.status === "Completed" ? "completed" : ""
                  }`}
                >
                  {order.status === "Completed" ? "Completed" : "Order Packed"}
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopkeeperCart;
