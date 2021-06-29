import styled from 'styled-components';
import { colors } from '../../../constants/colors';

export const UserItemWrapper = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 20px;
  border-bottom: 2px solid ${colors.primary};
  background-color: #fff;
  transition: ease-in-out 0.2s;

  &:hover {
    background-color: #e2e2e2;

    p {
      transform: translateX(2px) scale(1.02);
      color: ${colors.secondary};
    }
  }
`;

export const UserName = styled.p`
  transform: translateX(0) scale(1);
  transition: ease-in-out 0.2s;
`;
