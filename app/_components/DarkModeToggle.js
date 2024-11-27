"use client"
 import { useDarkMode } from "../_context/DarkModeContext"; 
import styled from "styled-components";
import {HiOutlineMoon, HiOutlineSun} from "react-icons/hi"

const ButtonIcon = styled.button`
  background: none;
  border: none;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.0rem;
    height: 2.0rem;
    color: var(--color-brand-600);
  }
`;

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <ButtonIcon 
    onClick={toggleDarkMode}
    >
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </ButtonIcon>
  );
}

export default DarkModeToggle;
