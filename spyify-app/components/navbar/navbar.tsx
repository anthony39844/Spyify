
export default function Navbar() {
  return (
    <div className="flex w-full justify-between items-center">
      <div className="flex-1">
        <h1 className="p-2 text-6xl font-bold">Spyify</h1>
      </div>
      <div className="flex items-center gap-4 pr-4">
        <div>
          <button className="bg-[#2f2d2d] text-white font-semibold py-2 px-6 rounded-full shadow-md 
                  hover:bg-green-600 hover:shadow-lg transition-all duration-200 ease-in-out ">Leaderboard</button>
        </div>
        <div>
            <img src="/globe.svg" alt="Description" className="h-12 w-12 rounded-full" />
        </div>
      </div>
    </div>
  );
}
