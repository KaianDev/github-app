import { Package } from "lucide-react";
import { UserRepo } from "../../types/UserRepo";
import * as C from "./styles";

type ReposListProps = {
  repos: UserRepo[];
};

export const ReposList = ({ repos }: ReposListProps) => {
  return (
    <C.Container>
      <C.QuantityContainer>
        <p>
          <Package size={25} />
          Repositórios:
        </p>
        <p>Quantidade: {repos.length}</p>
      </C.QuantityContainer>
      {repos.map((item) => (
        <C.RepoItem key={item.id}>
          <div>
            <C.RepoItemTitle>
              <span>Nome:</span> {item.name}
            </C.RepoItemTitle>
            <p>{item.language}</p>
          </div>
          <C.Link href={item.html_url} target="_blank">
            Acessar Repositório
          </C.Link>
        </C.RepoItem>
      ))}
    </C.Container>
  );
};
