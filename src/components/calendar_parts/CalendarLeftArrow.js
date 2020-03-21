import React from 'react'
import FontIcon from "material-ui/FontIcon";
import FlatButton from "material-ui/FlatButton";
import styled from 'styled-components';

export const Button = styled(FlatButton)`
    width: 35px;
    height: 35px;
    font-weight: 18px;
    max-width: 35px;
    min-width: 35px !important;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    border-radius: 50% !important;
    div {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
    }
`


function CalendarLeftArrow(props) {
    return (
      <Button {...props}>
        <FontIcon className="material-icons">keyboard_arrow_left</FontIcon>
      </Button>
    );
}

export default CalendarLeftArrow
