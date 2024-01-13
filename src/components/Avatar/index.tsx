import { UsersRound } from "lucide-react";
import * as C from "./styles";
import { User } from "../../types/User";

type AvatarProps = {
  user: User;
};

export const Avatar = ({ user }: AvatarProps) => {
  return (
    <C.Container>
      <C.Frame>
        <C.Image src={user.avatar_url} alt={user.name} />
      </C.Frame>
      <C.Title>{user.name}</C.Title>
      <C.InfoContainer>
        <UsersRound size={25} />
        <C.Info>{user.followers} Seguidores</C.Info>
        <C.Info>{user.following} Seguindo</C.Info>
      </C.InfoContainer>
    </C.Container>
  );
};
