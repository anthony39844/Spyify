import FriendInfo from "@/components/friend-info";
export default function Home() {
  return (
    <div>
      <FriendInfo friends={[{name: "John Doe", profileImage: "https://anthony39844.github.io/selfie.png", artists: ["https://anthony39844.github.io/selfie.png", "https://anthony39844.github.io/selfie.png"]}, {name: "Jane Smith", profileImage: "https://anthony39844.github.io/selfie.png", artists: ["https://anthony39844.github.io/selfie.png"]}]}/>
    </div>
  );
}
