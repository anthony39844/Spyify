import Navbar from "@/components/navbar";
import FriendInfo from "@/components/friend-info";
import UserStats from "@/components/user-stats";
import { fakeFriendsData, fakeUserStats } from "./fakeData";

export default function Home() {
  return (
    <div className="m-0">
      <div className="p-2 flex flex-col h-screen gap-4">
        <Navbar />
        <div className="flex flex-1 gap-2">
          <div className="w-[70%] h-full">
            <UserStats user={fakeUserStats.user} stats={fakeUserStats.stats} />
          </div>
          <div className="w-[30%] h-full">
            <FriendInfo friends={fakeFriendsData} />
          </div>
        </div>
      </div>
    </div>
  );
}
