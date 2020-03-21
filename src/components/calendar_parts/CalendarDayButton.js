import React from 'react'
import FlatButton from "material-ui/FlatButton";
import styled from 'styled-components';

const DayCell = styled.button`
  position: relative;
  width: calc(100% / 7);
  overflow: hidden;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;

  background: transparent;
  z-index: 2;
  button {
    width: 35px;
    height: 35px;
    color: ${props =>
      props.isCurrent
        ? "#fff"
        : props.isToday
        ? "#74b9ff"
        : props.inMonth
        ? "#000"
        : "lightgrey"} !important;
  }
  &::before {
    content: "";
    position: absolute;
    display: ${props => (props.inMonth ? "block" : "none")};
    z-index: 1;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    transform: ${props => (props.isCurrent ? "scale(1,1)" : "scale(0,0)")};
    background: #0984e3;
    transition: 0.3s ease-out;
    opacity: ${props => (props.isCurrent ? "0.9" : "0")};
  }
  &:hover {
    button {
      color: ${props =>
        props.isCurrent
          ? "#fff"
          : props.isToday
          ? "#74b9ff"
          : props.inMonth
          ? "#fff"
          : "lightgrey"} !important;
    }
    &::before {
      opacity: ${props => (props.isCurrent ? "0.9" : "0.5")};
      transform: scale(1, 1);
    }
  }
`;

function CalendarDayButton({children, ...rest}) {
    console.log(rest);
    return (
      <DayCell {...rest}>
        <FlatButton
          style={{ minWidth: "100%", maxWidth: "100%", height: "100%" }}
          hoverColor="transparent"
          disableTouchRipple={true}
        >
          {children}
        </FlatButton>
      </DayCell>
    );
}

export default CalendarDayButton
