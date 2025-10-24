import Navbar from "@/components/navbar";
import Container from "@/components/container";
import LeaderboardInfoCard from "@/components/leaderboard-info-card";
interface LeaderboardEntry {
  name: string;
  minutes: number;
}
export default function Home() {
  const leaderboardData = [
    { name: "Alice", minutes: 1500 },
    { name: "Bob", minutes: 1200 },
    { name: "Charlie", minutes: 1000 },
    { name: "David", minutes: 800 },
    { name: "Eve", minutes: 600 },
  ];

  return (
    <div className="m-0">
      <Navbar />
      <Container text="Leaderboard" width="fill" height="auto">
        {leaderboardData
          .sort((a, b) => b.minutes - a.minutes)
          .map((entry, index) => (
            <div key={index}>
              <LeaderboardInfoCard
                name={entry.name}
                artists={[]}
                profileImage={""}
                stats={{ minutes: 1 }}
                rank={index + 1}
              />
            </div>
          ))}
      </Container>
    </div>
  );
}
