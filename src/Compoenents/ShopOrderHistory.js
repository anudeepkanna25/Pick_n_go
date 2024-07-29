import React, { useEffect, useState } from "react";
import { realtimeDb } from "../firebaseConfig";
import { ref, onValue } from "firebase/database";
import "./ShopOrderHistory.css";

const ShopOrderHistory = () => {
  const [completedOrders, setCompletedOrders] = useState([]);

  useEffect(() => {
    const shopkeeperEmail = localStorage.getItem('shopkeeperToken');
    if (!shopkeeperEmail) return; 

    const ordersHistoryRef = ref(realtimeDb, "orderHistory");
    onValue(ordersHistoryRef, (snapshot) => {
      const ordersData = [];
      snapshot.forEach((childSnapshot) => {
        const order = { id: childSnapshot.key, ...childSnapshot.val() };
        if (order.shopkeeper === shopkeeperEmail) {
          ordersData.push(order);
        }
      });
      setCompletedOrders(ordersData.reverse());
    }, (error) => {
      console.error("Error fetching order history:", error);
    });
  }, []);

  return (
    <div className="shop-order-history">
      <div className="container">
        <header>
          <h1>Order History</h1>
        </header>
        <div className="product">
          {completedOrders.length === 0 ? (
            <p>No completed orders available.</p>
          ) : (
            completedOrders.map((order) => (
              <div className="product-item" key={order.id}>
                {order.imageUrl && (
                  <img src={order.imageUrl} alt={`Order ${order.id}`} />
                )}
                <h3 className="customer">Customer: {order.name}</h3>
                <h3 className="customer">Phone: {order.phoneNumber}</h3>
                <p className="customer">Date: {order.date}</p>
                <p className="customer_items">Items: {order.items}</p>
                <p className="customer_message">{order.message}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopOrderHistory;
