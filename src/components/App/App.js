import React from 'react';
import styled, { ThemeProvider } from 'styled-components/macro';

import Header from '../Header';
import ShoeIndex from '../ShoeIndex';
import { THEME } from '../../constants';

const App = () => {
  const [sortId, setSortId] = React.useState('newest');

  return (
    <ThemeProvider theme={THEME}>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </ThemeProvider>
  );
};

const Main = styled.main`
  padding: 64px 32px;

  @media ${(props) => props.theme.queries.tabletAndSmaller} {
    padding: 48px 32px;
  }

  @media ${(props) => props.theme.queries.phoneAndSmaller} {
    padding: 48px 12px;
  }
`;

export default App;
