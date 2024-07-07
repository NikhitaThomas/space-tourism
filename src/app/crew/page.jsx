"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

function CrewPage() {
  const [crewName, setCrewName] = useState("Douglas Hurley");
  const [role, setRole] = useState("something");
  const [bio, setBio] = useState("bio");
  const [image, setImage] = useState("");
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const json = await response.json();
        if (!json.crew) {
          throw new Error("Invalid JSON structure: 'crew' key not found");
        }
        const crew = json.crew.find(
          (crew) => crew.name.toLowerCase() === crewName.toLowerCase()
        );

        setRole(crew.role);
        setBio(crew.bio);
        setImage(crew.images.png);

        return crew;
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, [crewName]);

  return (
    <div
      className="flex flex-col mt-32 w-10/12 m-auto"
      style={{ height: "calc(100vh - 300px)" }}
    >
      02 MEET YOUR CREW
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex flex-col basis-1/2 gap-10">
          <div className="text-gray-500 text-4xl">{role}</div>
          <div className="text-6xl">{crewName}</div>
          <div className="text-sm leading-8">{bio}</div>
          <div className="flex gap-8">
            <button
              className={`${
                crewName === "Mark Shuttleworth" ? "bg-white" : "bg-gray-800"
              } w-6 rounded-full h-6 `}
              onClick={(crewName) => {
                setCrewName("Mark Shuttleworth");
              }}
            ></button>
            <button
              className={`${
                crewName === "Anousheh Ansari" ? "bg-white" : "bg-gray-800"
              } w-6 rounded-full h-6 `}
              onClick={(crewName) => {
                setCrewName("Anousheh Ansari");
              }}
            ></button>
            <button
              className={`${
                crewName === "Victor Glover" ? "bg-white" : "bg-gray-800"
              } w-6 rounded-full h-6 `}
              onClick={(crewName) => {
                setCrewName("Victor Glover");
              }}
            ></button>
            <button
              className={`${
                crewName === "Douglas Hurley" ? "bg-white" : "bg-gray-800"
              } w-6 rounded-full h-6 `}
              onClick={(crewName) => {
                setCrewName("Douglas Hurley");
              }}
            ></button>
          </div>
        </div>
        <div className="basis-1/2 max-h-18 justify-center items-center transform translate-x-1/4">
          <Image src={image} height={500} width={500} alt="" />
        </div>
      </div>
    </div>
  );
}

export default CrewPage;
