import React, { useEffect, useState } from "react";
import { db } from "../firebase.config";
import { collection, getDocs } from "firebase/firestore";

const History = () => {
  const [allImages, setAllImages] = useState([]);
  const docRef = collection(db, "user");
  const getData = () => {
    getDocs(docRef)
      .then((snapshot) => {
        let images = [];

        snapshot.docs.forEach((doc) => {
          images.push({ ...doc.data(), id: doc.id });
          setAllImages(images);
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    getData();
  });

  return (
    <>
      <h2>Images History</h2>;
      {allImages.map((image) => {
        return (
          <div key={image.id} className="w-[100px] h-[100px]">
            <img src={image.imageUrl} alt="imageref" />
          </div>
        );
      })}
    </>
  );
};

export default History;
