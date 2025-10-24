import FriendInfoCard from "./friend-info-card";
import Container from "../container";
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
    <Container text="Friends" width="full" height="full">
      {friends?.map((friend, index) => (
        <FriendInfoCard key={index} {...friend} />
      ))}
    </Container>
  );
}
