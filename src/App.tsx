import React from 'react';
import styled from 'styled-components';
import { globals } from './constants/globals';

import { Header } from './components/Header/Header';
import { UserList } from './components/molecules/UserList';
import { PublicChat } from './components/organisms/PublicChat';
import { PrivateChat } from './components/templates/PrivateChat';

const App = () => (
  <div className="App">
    <Header />
    <MainContainer>
      <UserList />
      <PublicChat />
      <PrivateChat />
    </MainContainer>
  </div>
);

const MainContainer = styled.main`
  display: flex;
  overflow: auto;
  height: 100vh;
  padding-top: ${globals.headerHeight};
`;

export default App;
