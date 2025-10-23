import Navbar from "@/components/navbar";
import FriendInfo from "@/components/friend-info";
export default function Home() {
  return (
    <div className="m-0">
      <div className="p-2 flex flex-col h-screen gap-4">
        <Navbar />
        <div className="flex flex-1">
          <FriendInfo
            friends={[
              {
                name: "John Doe",
                profileImage: "https://anthony39844.github.io/selfie.png",
                artists: [
                  "https://anthony39844.github.io/selfie.png",
                  "https://anthony39844.github.io/selfie.png",
                ],
              },
              {
                name: "Jane Smith",
                profileImage: "https://anthony39844.github.io/selfie.png",
                artists: ["https://anthony39844.github.io/selfie.png"],
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
