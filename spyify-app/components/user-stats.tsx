import UserStatsCard from "./user-stats-card";
export default function UserStats({ user, stats }: { user: string; stats: any }) {
  return (
    <div className="bg-[#191414] w-full h-full rounded-lg p-4 overflow-y-auto">
      <h2 className="text-white text-xl font-semibold mb-4">{user}'s Stats</h2>
      <div className="text-white">
        {stats.map((statCategory: any) => (
            <div key={statCategory.type} className="mb-6">
              <UserStatsCard type={statCategory.type} data={statCategory.data} />
            </div>
        ))}
      </div>
    </div>
  );
}
