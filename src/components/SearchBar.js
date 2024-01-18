import axios from "axios";
import React, { useEffect, useState } from "react";
import ImageCard from "./ImageCard";
import { useDebounce } from "../utils/useDebounce";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedValue = useDebounce(searchTerm, 700);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const { data } = await axios.get(
        `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${debouncedValue}`
      );
      setData(data.hits);
      setIsLoading(false);
      console.log(data.hits);
    };
    fetchData();
  }, [debouncedValue]);

  return (
    <>
      <div className="flex justify-center items-center mt-40">
        <input
          className="w-[50%] h-14 text-2xl p-4 outline-none"
          type="text"
          placeholder="Enter search item..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/* <button className="w-24 h-14 bg-cyan-700" onClick={handleClick}>
          Search
        </button> */}
      </div>
      <hr className="mt-40"></hr>

      <div>
        <ImageCard isLoading={isLoading} data={data} />
      </div>
    </>
  );
};

export default SearchBar;
