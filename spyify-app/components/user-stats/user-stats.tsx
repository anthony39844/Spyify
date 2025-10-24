import UserStatsCard from "./user-stats-card";
export default function UserStats({ user, stats }: { user: string; stats: any }) {
  return (
    <div className="w-full h-full p-8 overflow-y-auto">
      <h1 className="text-white text-3xl font-semibold mb-4">{user}'s Stats</h1>
      <div className="text-white">
        {stats.map((statCategory: any) => (
            <div key={statCategory.type} className="mb-4">
              <UserStatsCard type={statCategory.type} data={statCategory.data} />
            </div>
        ))}
      </div>
    </div>
  );
}
