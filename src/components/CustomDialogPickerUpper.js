import React from "react";
import styled from "styled-components";
import { getDateArray, getWeekDay, getMonthName } from "./../utils/calendar";
const Container = styled.div`
  width: 100%;
  height: auto;
  float: none;
  font-weight: 700;
  display: inline-block;
  background-color: rgb(0, 151, 167);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-bottom-left-radius: 0px;
  color: rgb(255, 255, 255);
  padding: 20px;
  box-sizing: border-box;
`;

const Year = styled.h6`
  margin: 0px 0px 10px;
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  opacity: ${props => props.active ? '1' : '0.7'};
  cursor: pointer;
`;

const PickedDate = styled.h3`
  font-size: 36px;
  line-height: 36px;
  margin: 0px;
  opacity: 1;
  cursor: pointer;
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  width: 100%;
  opacity: ${props => (props.active ? "1" : "0.7")};
  font-weight: 500;
`;

function CustomDialogPickerUpper({ date, active, changeTab }) {
  const calendarDate = date || new Date();
  const [year, month, day] = getDateArray(calendarDate);
    const weekDay = getWeekDay(calendarDate);
    const monthName = getMonthName(calendarDate);
    const handleTabs = ev => ev.target.dataset.active && changeTab(ev.target.dataset.active)
    
  return (
    <Container onClick={handleTabs}>
      <Year data-active="year" active={active === "year"}>
        {year}
      </Year>
      <PickedDate
        data-active="date"
        active={active === "date"}
      >{`${weekDay}, ${monthName} ${day}`}</PickedDate>
    </Container>
  );
}

export default CustomDialogPickerUpper;
