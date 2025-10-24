
export default function UserStatsCard({ type, data }: { type: string; data: any }) {
  return (
    <div className="hover:bg-[#3a3a3a] rounded-3xl p-4 bg-[#262424] transition-colors duration-200 ease-in-out">
      <h1 className="text-xl font-semibold mb-2">{type}</h1>
      <ul>
        {data.map((item: any) => (
          <li key={item.name} className="mb-1">
            {item.name}: {item.playcount}
          </li>
        ))}
      </ul>
    </div>
  )
}
