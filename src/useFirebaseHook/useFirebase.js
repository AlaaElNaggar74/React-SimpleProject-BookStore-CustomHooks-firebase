import { db } from "../FormTwoInput/Firebase-config/Firebase";

import { useEffect, useState } from "react";

export let useFirebase = () => {

  let [items,setItems]=useState([]);

  useEffect(() => {
    const unsubscribe= db.collection("AmountCollection").onSnapshot((snap) => {
      let fetchedData = snap.docs.map((doc) => {
        return {...doc.data(),id: doc.id };
      });
      setItems(fetchedData);
    });

    return unsubscribe;
  }, []);

  let addNewItem=(item)=>{
    db.collection("AmountCollection").add({...item})

  }
  let deletNewItem=(id)=>{
    db.collection("AmountCollection").doc(id).delete()

  }

  let upddateFunc=(id,item)=>{
    db.collection("AmountCollection").doc(id).update({...item})
    console.log(id)
    console.log(item)
  }

  return {items,addNewItem,deletNewItem,upddateFunc};
};
