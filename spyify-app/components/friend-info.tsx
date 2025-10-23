import FriendInfoCard from "./friend-info-card";

interface FriendInfoProps {
  name: string;
  artists: string[];
  profileImage?: string;
}

interface FriendListProps {
  friends: FriendInfoProps[];
}

export default function FriendInfo({ friends }: FriendListProps) {
  return (
    <div className="w-1/4 border border-gray-700 rounded-lg bg-black p-4 overflow-y-auto">
      <h2 className="text-white text-xl font-semibold mb-4">Friends</h2>
      {friends?.map((friend, index) => (
        <FriendInfoCard key={index} {...friend} />
      ))}
    </div>
  );
}
