import React, { useState, useEffect } from "react";
import { realtimeDb } from "../firebaseConfig";
import { ref, onValue } from "firebase/database";
import "./OrdersPage.css";

const PreviousOrdres = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");
  const [showContactInfo, setShowContactInfo] = useState(false);

  useEffect(() => {
    if (token) {
      fetchOrders(token);
    }
  }, [token]);

  const fetchOrders = (customerToken) => {
    const ordersRef = ref(realtimeDb, "orders");
    onValue(ordersRef, (snapshot) => {
      const ordersData = [];
      snapshot.forEach((childSnapshot) => {
        const order = childSnapshot.val();
        if (
          order.customer === customerToken ||
          order.shopkeeper === customerToken
        ) {
          ordersData.push(order);
        }
      });
      setOrders(ordersData);
      setLoading(false);
    });
  };

  return (
    <div className="orders-container">
      <h2>Your Previous Orders</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="orders">
          {orders.length === 0 ? (
            <p>No previous orders available.</p>
          ) : (
            orders
              .slice()
              .reverse()
              .map((order, index) => (
                <div className="order-item" key={index}>
                  {order.imageUrl && (
                    <img src={order.imageUrl} alt={`Order ${index + 1}`} />
                  )}
                  <h3>Customer: {order.name}</h3>
                  <p>Phone: {order.phoneNumber}</p>
                  <p>Date: {order.date}</p>
                  <p>Items: {order.items}</p>
                  {order.status && <p>Status: {order.status}</p>}
                  {order.message && (
                    <p className="order-message">{order.message}</p>
                  )}
                </div>
              ))
          )}
        </div>
      )}
      <div
        className="contact-us"
        onClick={() => setShowContactInfo(!showContactInfo)}
      >
        Contact Us
      </div>
      {showContactInfo && (
        <div className="contact-info">
          <p>Phone: 7702387254</p>
          <p>Email: laxmiretail@gmail.com</p>
        </div>
      )}
    </div>
  );
};

export default PreviousOrdres;
