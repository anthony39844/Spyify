import UserStatsCard from "./user-stats-card";
import Container from "../container";
export default function UserStats({ user, stats }: { user: string; stats: any }) {
  return (
    <Container text={`${user}'s Stats`} width="full" height="full">
      <div className="text-white">
        {stats.map((statCategory: any) => (
            <div key={statCategory.type} className="mb-4">
              <UserStatsCard type={statCategory.type} data={statCategory.data} />
            </div>
        ))}
      </div>
    </Container>
  );
}
