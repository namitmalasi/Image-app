import React from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase.config";

const ImageCard = ({ isLoading, data }) => {
  const userCollectionRef = collection(db, "user");

  const saveImage = async (imageURL) => {
    await addDoc(userCollectionRef, { imageUrl: imageURL });
  };

  return (
    <div
      className="columns-3 gap-4 w-[80%] mx-auto space-y-3 pb-28 mt-10"
      style={{ transition: "image 1s ease-in-out" }}
    >
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {data.map((image) => {
            return (
              <div
                key={image.id}
                className="bg-gray-200 break-inside-avoid relative z-10"
              >
                <img src={image.largeImageURL} alt="imageurl" />
                <button
                  onClick={() => saveImage(image.largeImageURL)}
                  className="absolute z-0 top-[50%] left-[65%] text-3xl border-4 border-black p-2 rounded hover:z-20"
                >
                  Save
                </button>
                <button className="absolute z-0 top-[50%] left-[20%] text-3xl border-4 border-black p-2 rounded hover:z-20">
                  Share
                </button>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default ImageCard;
