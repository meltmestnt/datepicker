import React from 'react'
import styled from 'styled-components';

const Label = styled.span`
  width: calc(100% / 7);
  display: flex;
  justify-content: center;
  text-align: center;
  font-weight: 500;
  color: lightgrey;
  cursor: default;
  font-size: 12px;
`;


function CalendarDayLabel({children, ...rest}) {
    return (
        <Label {...rest}>
            {children.slice(0,1)}
        </Label>
    )
}

export default CalendarDayLabel
