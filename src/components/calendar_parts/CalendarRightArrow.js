import React from 'react'
import {Button} from './CalendarLeftArrow'
import FontIcon from "material-ui/FontIcon";

function CalendarRightArrow(props) {
    return (
      <Button {...props}>
        <FontIcon className="material-icons">keyboard_arrow_right</FontIcon>
      </Button>
    );
}

export default CalendarRightArrow
