"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function TechnologyPage() {
  const [name, setName] = useState("Launch vehicle");
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("som");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        if (!response) {
          throw new Error("Network response was not Okay!");
        }
        const json = await response.json();

        const tech = json.technology.find(
          (tech) => tech.name.toLowerCase() === name.toLowerCase()
        );
        console.log(tech);
        setDesc(tech.description);
        setImage(tech.images.portrait);
      } catch (error) {}
    };
    fetchData();
  }, [name]);

  return (
    <div
      className="w-10/12 m-auto mt-32"
      style={{ height: "calc(100vh - 200px)" }}
    >
      <div className="pb-24">03 Space Launch 101</div>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex md:flex-col basis-1/5 gap-8">
          <div>
            <button
              className={`${
                name === "Launch vehicle" ? "bg-white text-black" : ""
              } border border-white w-20 h-20 rounded-full`}
              onClick={(name) => {
                setName("Launch vehicle");
              }}
            >
              1
            </button>
          </div>
          <div>
            <button
              className={`${
                name === "Spaceport" ? "bg-white text-black" : ""
              } border border-white w-20 h-20 rounded-full`}
              onClick={(name) => {
                setName("Spaceport");
              }}
            >
              2
            </button>
          </div>
          <div>
            <button
              className={`${
                name === "Space capsule" ? "bg-white text-black" : ""
              } border border-white w-20 h-20 rounded-full`}
              onClick={(name) => {
                setName("Space capsule");
              }}
            >
              3
            </button>
          </div>
        </div>
        <div className="flex flex-col basis-2/5 gap-8">
          <div>The Terminology</div>
          <div className="text-6xl">{name}</div>
          <div className="leading-8">{desc}</div>
        </div>
        <div className="">
          <Image src={image} width={500} height={800} alt="" />
        </div>
      </div>
    </div>
  );
}

export default TechnologyPage;
