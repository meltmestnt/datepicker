import React from 'react'
import styled from 'styled-components';

const CalContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 8px;
width: 100%;
overflow: hidden;

`


function CalendarContainer({children}) {
    return (
        <CalContainer>{children}</CalContainer>
    )
}

export default CalendarContainer
