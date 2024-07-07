"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

function Destination() {
  // const [desName, setDesName] = useState()
  const [placeName, setPlaceName] = useState("Mars");
  // const { slug = "Mars" } = params || {};
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const json = await response.json();
        if (!json.destinations) {
          throw new Error(
            "Invalid JSON structure: 'destinations' key not found"
          );
        }
        const place = json.destinations.find(
          (destination) =>
            destination.name.toLowerCase() === placeName.toLowerCase()
        );
        if (!place) {
          throw new Error(`Destination with name '${placeName}' not found`);
        }
        setData(place);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, [placeName]);

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div
      className="flex flex-col w-11/12 md:flex-row md:w-9/12 m-auto items-center gap-12 my-24 md:my-0"
      style={{ height: "calc(100vh - 130px)" }}
    >
      <div className="flex flex-col basis-1/2 gap-12 items-center md:items-start">
        <div className="">01 Pick your Destination</div>
        <div>
          <Image
            src={`/destination/image-${data.name.toLowerCase()}.png`}
            width="400"
            height="400"
            alt="destination image"
          />{" "}
        </div>
      </div>
      <div className="flex flex-col basis-1/2 gap-12 md:pl-12">
        <div>
          <div className="flex justify-between">
            <button
              className={`${placeName === "Moon" ? "border-b-4" : ""} pb-3`}
              onClick={() => setPlaceName("Moon")}
            >
              MOON
            </button>
            <button
              className={`${placeName === "Mars" ? "border-b-4" : ""} pb-3`}
              onClick={() => setPlaceName("Mars")}
            >
              MARS
            </button>
            <button
              className={`${placeName === "Europa" ? "border-b-4" : ""} pb-3`}
              onClick={() => setPlaceName("Europa")}
            >
              EUROPA
            </button>
            <button
              className={`${placeName === "Titan" ? "border-b-4" : ""} pb-3`}
              onClick={() => setPlaceName("Titan")}
            >
              TITAN
            </button>
          </div>
        </div>
        <div className="text-6xl font-semibold">{data.name}</div>
        <div className="font-thin">{data.description}</div>
        <hr className="" />
        <div className="flex">
          <div className="basis-1/2">
            <div className="font-thin text-xs">AVG DISTANCE</div>
            <div>{data.distance}</div>
          </div>
          <div className="basis-1/2">
            <div className="font-thin text-xs">EST TRAVEL TIME</div>
            <div>{data.travel}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
