import React from "react";

const ImageCard = ({ isLoading, data }) => {
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
              <div key={image.id} className="bg-gray-200 break-inside-avoid">
                <img src={image.largeImageURL} alt="imageurl" />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default ImageCard;
