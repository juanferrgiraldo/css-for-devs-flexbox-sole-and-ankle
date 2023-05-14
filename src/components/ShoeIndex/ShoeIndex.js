import React from 'react';
import styled from 'styled-components/macro';

import { WEIGHTS } from '../../constants';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';
import ShoeGrid from '../ShoeGrid';

const ShoeBreadcrubms = () => (
  <Breadcrumbs>
    <Breadcrumbs.Crumb href='/'>Home</Breadcrumbs.Crumb>
    <Breadcrumbs.Crumb href='/sale'>Sale</Breadcrumbs.Crumb>
    <Breadcrumbs.Crumb href='/sale/shoes'>Shoes</Breadcrumbs.Crumb>
  </Breadcrumbs>
);

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <div>
            <MobileBreadcrumbs>
              <ShoeBreadcrubms />
            </MobileBreadcrumbs>
            <Title>Running</Title>
          </div>
          <SortFilterWrapper>
            <Select
              label='Sort'
              value={sortId}
              onChange={(ev) => setSortId(ev.target.value)}
            >
              <option value='newest'>Newest Releases</option>
              <option value='price'>Price</option>
            </Select>
          </SortFilterWrapper>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <DesktopBreadcrumbs>
          <ShoeBreadcrubms />
        </DesktopBreadcrumbs>
        <Spacer size={42} />
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;
  @media ${(props) => props.theme.queries.tabletAndSmaller} {
    flex-direction: column;
  }
`;

const LeftColumn = styled.div`
  flex-basis: 248px;
  @media ${(props) => props.theme.queries.tabletAndSmaller} {
    display: none;
  }
`;

const MainColumn = styled.div`
  flex: 1;
  @media ${(props) => props.theme.queries.tabletAndSmaller} {
    order: 2;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  @media ${(props) => props.theme.queries.tabletAndSmaller} {
    align-items: flex-end;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

const DesktopBreadcrumbs = styled.div`
  @media ${(props) => props.theme.queries.tabletAndSmaller} {
    display: none;
  }
`;

const MobileBreadcrumbs = styled.div`
  display: none;
  @media ${(props) => props.theme.queries.tabletAndSmaller} {
    display: revert;
  }
`;

const SortFilterWrapper = styled.div`
  @media ${(props) => props.theme.queries.tabletAndSmaller} {
    display: none;
  }
`;

export default ShoeIndex;
