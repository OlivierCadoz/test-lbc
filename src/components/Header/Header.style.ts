import styled from 'styled-components';
import { colors } from '../../constants/colors';
import { globals } from '../../constants/globals';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${globals.headerHeight};
  padding: 0 20px;
  background-color: white;
  border-bottom: 3px solid ${colors.primary};
`;
