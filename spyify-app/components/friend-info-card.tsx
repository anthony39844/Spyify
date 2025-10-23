"use client";

import { useWindowSize } from "../hooks/useWindowSize";

interface FriendInfoProps {
  name: string;
  artists: string[];
  profileImage?: string;
}

export default function FriendInfoCard({
  name,
  artists,
  profileImage,
}: FriendInfoProps) {
  const { width } = useWindowSize();

  // You can use this to make responsive decisions
  const isSmallScreen = width ? width < 1050 : false;

  return (
    <div className="flex items-center p-4 border border-gray-700 rounded-full mb-4 bg-gray-800 text-white">
      {profileImage && (
        <img
          src={profileImage}
          alt={name}
          className="w-[3rem] h-[3rem] rounded-full mr-2"
        />
      )}
      <h3 className="mr-5">{name}</h3>
      <div className="flex items-center">
        {!isSmallScreen &&
          artists.map((artistImageUrl, index) => (
            <img
              key={index}
              src={artistImageUrl}
              alt="Artist artwork"
              className="w-[2rem] h-[2rem] rounded-full border-2 border-white"
              style={{ marginLeft: index > 0 ? "-0.5rem" : "0" }}
            />
          ))}
      </div>
    </div>
  );
}
