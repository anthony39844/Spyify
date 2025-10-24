"use client";
import Navbar from "@/components/navbar/navbar";
import FriendInfo from "@/components/friends-info/friend-info";
import UserStats from "@/components/user-stats/user-stats";
import { fakeFriendsData, fakeUserStats } from "./fakeData";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

export default function Home() {
  return (
    <div className="p-4 flex flex-col h-screen gap-4">
      <Navbar />
      <PanelGroup direction="horizontal" className="rounded-lg gap-1">
        <Panel
          defaultSize={70}
          minSize={30}
          className="bg-[#191414] rounded-2xl"
        >
          <UserStats user={fakeUserStats.user} stats={fakeUserStats.stats} />
        </Panel>
        <PanelResizeHandle className="w-[1px] cursor-col-resize" />
        <Panel
          defaultSize={30}
          minSize={20}
          className="bg-[#191414] rounded-2xl"
        >
          <FriendInfo friends={fakeFriendsData} />
        </Panel>
      </PanelGroup>
    </div>
  );
}
