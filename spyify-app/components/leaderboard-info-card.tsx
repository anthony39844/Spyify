interface LeaderboardEntry {
  name: string;
  artists: string[];
  profileImage?: string;
  stats: Stats; 
  rank: number;
}

interface Stats {
  minutes: number;
}

export default function LeaderboardInfoCard({
  name,
  artists,
  profileImage,
  stats,
  rank,
}: LeaderboardEntry) {
  return (
    <div className="flex items-center p-4 rounded-full mb-4 hover:bg-[#3a3a3a] rounded-3xl p-4 bg-[#262424] text-white ">
      {rank && <span className="mr-4 font-bold">{rank}.</span>}
      {profileImage && (
        <img
          src={profileImage}
          alt={name}
          className="w-[3rem] h-[3rem] rounded-full mr-2"
        />
      )}
      {name + " - "}
      {stats.minutes + " mins"}
      {artists.map((artistImageUrl, index) => (
        <img
          key={index}
          src={artistImageUrl}
          alt="Artist artwork"
          className="w-[2rem] h-[2rem] rounded-full border-2 border-white"
          style={{ marginLeft: index > 0 ? "-0.5rem" : "0" }}
        />
      ))}
    </div>
  );
}
