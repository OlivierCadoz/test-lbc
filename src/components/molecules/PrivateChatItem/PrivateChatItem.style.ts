import styled from 'styled-components';
import { colors } from '../../../constants/colors';

const ChatWrapper = styled.article`
  overflow: hidden;
  position: relative;
`;
const ChatHeader = styled.header`
  cursor: pointer;
  pointer-events: all;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 8px 12px;
  color: #fff;
  background-color: ${colors.secondary};
  border-radius: 0 0 8px 8px;
`;

const ChatCloseButton = styled.button`
  cursor: pointer;
  position: relative;
  height: 24px;
  width: 24px;
  padding: 0;
  background-color: transparent;
  border: none;
  transform: scale(1);
  transition: ease-in-out 0.2s;

  &:hover {
    transform: scale(0.98);

    &::before,
    &::after {
      border-color: #fff;
    }
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 10px;
    right: 0;
    height: 2px;
    width: 20px;
    border-top: 2px solid rgba(255, 255, 255, 0.8);
    transition: ease-in-out 0.2s;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;

const ChatList = styled.ul`
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 455px;
  width: 328px;
  margin: 0;
  padding: 40px 8px;

  li {
    max-width: 65%;

    &.self {
      align-self: flex-end;

      p {
        color: #fff;
        background-color: ${colors.secondary};
      }
    }
  }

  form {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0;
  }
`;

const ChatContent = styled.section`
  pointer-events: all;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 455px;
  width: 328px;
  margin: 0;
  padding: 40px 0 80px;
  border-radius: 0 0 8px 8px;
  border-bottom: 3px solid ${colors.primary};
  background-color: #fff;
  box-shadow: 0 0 3px #00000029 inset;
  transform: translateY(-413px);
  transition: ease-in-out 0.3s;

  &.active {
    transform: translateY(-0);
  }
`;

export { ChatWrapper, ChatHeader, ChatCloseButton, ChatList, ChatContent };
