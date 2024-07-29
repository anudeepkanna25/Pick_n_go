import React, { useEffect, useState } from "react";
import { storage, realtimeDb, auth } from "../firebaseConfig";
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { Link, useNavigate } from "react-router-dom";
import { ref, set } from "firebase/database";
import { signOut } from "firebase/auth";
import "./UserPage.css";

const UserPage = () => {
  const [items, setItems] = useState("");
  const [file, setFile] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [deliveryMethod, setDeliveryMethod] = useState("pickup");
  const [address, setAddress] = useState("");
  const [showContactInfo, setShowContactInfo] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/");
  }, [navigate]);

  const sendItems = async () => {
    const token = localStorage.getItem("token");  // customer as a token 
    if (!token) {
      alert("You must be logged in to send items.");
      return;
    }
    // adhe user vunado ledho ani ( without login he cant send or submit )

    if (items || file) {
      let imageUrl = "";

      if (file) {
        const fileStorageRef = storageRef(storage, `images/${file.name}`);
        await uploadBytes(fileStorageRef, file);
        imageUrl = await getDownloadURL(fileStorageRef);
      }

      const orderData = {
        customer: token,
        name,
        phoneNumber,
        items,
        imageUrl,
        date: new Date().toLocaleString(),
        status: "Pending",
        shopkeeper: "laxmiretail@gmail.com",
        deliveryMethod,
        address: deliveryMethod === "delivery" ? address : "",
      };

      const ordersDbRef = ref(realtimeDb, `orders/${Date.now()}`);
      await set(ordersDbRef, orderData);

      setItems("");
      setFile(null);
      setPhoneNumber("");
      setName("");
      setAddress("");
      setMessage("Your order has been placed!");
      alert("Successfully placed the order!");
    } else {
      alert("Please write items or upload a file.");
    }
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("token");
        navigate("/");
      })
      .catch((error) => {
        console.error("Error logging out: ", error);
      });
  };

  return (
    <div className="Userpagecontainer">
      <h1 className="heading">Write the items to be packed</h1>
      <input
        type="text"
        placeholder="Enter your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <textarea
        placeholder="Write the items to be packed"
        value={items}
        onChange={(e) => setItems(e.target.value)}
      ></textarea>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <fieldset className="order-method">
        <legend>Select Order Method</legend>
        <select
          className="OrderSelect"
          value={deliveryMethod}
          onChange={(e) => setDeliveryMethod(e.target.value)}
        >
          <option value="pickup">Pick up order</option>
          <option value="delivery">Deliver to your doorstep</option>
        </select>
      </fieldset>

      {deliveryMethod === "delivery" && (
        <textarea
          placeholder="Enter your Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></textarea>
      )}

      <button onClick={sendItems}>Send</button>
      {message && <p className="success-message">{message}</p>}
      <Link to="/orderhistory" className="orders-link">
        <button className="orders-link">View Your Previous Orders</button>
      </Link>
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
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

export default UserPage;
