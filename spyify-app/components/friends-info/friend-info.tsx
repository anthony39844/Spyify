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
    <div className="w-full h-full p-8 overflow-y-auto">
      <h1 className="text-white text-3xl font-semibold mb-4">Friends</h1>
      {friends?.map((friend, index) => (
        <FriendInfoCard key={index} {...friend} />
      ))}
    </div>
  );
}
