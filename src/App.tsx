import { GlobalsStyle } from "./globalsStyle";
import { ThemeProvider } from "styled-components";

import Wrapper from "./components/Wrapper";
import theme, { darkTheme } from "./theme";
import Title from "./components/Title";
import Input from "./components/Input";
import Button from "./components/Button";
import { useState } from "react";
import { getUser, getUserRepos } from "./data/api";
import Form from "./components/Form";
import FetchLoading from "./components/FetchLoading";
import { Avatar } from "./components/Avatar";
import { User } from "./types/User";
import { UserRepo } from "./types/UserRepo";
import { ReposList } from "./components/ReposList";
import ErrorInfo from "./components/ErrorInfo";
import ImageBrand from "./components/ImageBrand";

const appThemeDark = {
  ...theme.colors,
  ...darkTheme.colors,
};

const App = () => {
  const [activeTheme, setActiveTheme] = useState(theme);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [userRepos, setUserRepos] = useState<UserRepo[] | null>();

  const handleGetUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userResult = await getUser(inputValue);
      setUser(userResult);
      const reposResult = await getUserRepos(inputValue);
      setUserRepos(reposResult);
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    } catch (error) {
      setLoading(false);
      setError(true);
      setInputValue("");
      setInterval(() => {
        setError(false);
      }, 5000);
    }
  };

  return (
    <ThemeProvider theme={activeTheme}>
      <Wrapper>
        <Title>GitHub App</Title>

        <Form onSubmit={handleGetUser}>
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            autoFocus
            placeholder="Digite seu nome de usuário, ex: KaianDev"
          />
          <Button disabled={inputValue.trim() === ""}>Pesquisar</Button>
        </Form>

        {user && !loading && <Avatar user={user} />}

        {userRepos && !loading && <ReposList repos={userRepos} />}

        {loading && <FetchLoading />}

        {error && <ErrorInfo />}

        {!user && !loading && <ImageBrand />}
      </Wrapper>

      <GlobalsStyle />
    </ThemeProvider>
  );
};

export default App;
