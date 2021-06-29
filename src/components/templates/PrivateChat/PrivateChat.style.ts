import styled from 'styled-components';
import { globals } from '../../../constants/globals';

export const PrivateChatContainer = styled.section`
  position: absolute;
  top: ${globals.headerHeight};
  right: 0;
  width: 75%;
  pointer-events: none;
`;