import React from 'react'
import styled from 'styled-components';
const Header = styled.h6`
  font-size: 14px;
  font-weight: 500;
  color: #000;
  text-align: center;
`;
function CalendarHeader({children}) {
    return (
        <Header>{children}</Header>
    )
}

export default CalendarHeader
