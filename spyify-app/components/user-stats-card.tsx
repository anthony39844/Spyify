
export default function UserStatsCard({ type, data }: { type: string; data: any }) {
  return (
    <div>
      <h3 className="font-semibold mb-2">{type}</h3>
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
