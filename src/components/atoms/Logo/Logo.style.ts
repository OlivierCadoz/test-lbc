import styled from 'styled-components';
import { colors } from '../../../constants/colors';

export const LogoWrapper = styled.h1`
  color: ${colors.primary};
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;

  span {
    color: ${colors.secondary};
  }
`;
