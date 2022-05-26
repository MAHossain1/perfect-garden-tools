import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyPurchaseItem = () => {
  const [purchasedItem, setPurchasedItem] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      fetch(`https://frozen-ocean-66144.herokuapp.com/purchasing=${user.email}`)
        .then(res => res.json())
        .then(data => setPurchasedItem(data));
    }
  }, [user]);

  return (
    <div>
      <h2>My Purchase Item </h2>
    </div>
  );
};

export default MyPurchaseItem;
