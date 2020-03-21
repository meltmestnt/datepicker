import React, { Component } from "react";
import calendar, {
  isDate,
  dateDiff,
  isBeforeDay,
  isAfterDay,
  isSameDay,
  isSameMonth,
  getDateISO,
  getDateArray,
  getNextMonth,
  getPreviousMonth,
  getMonthDays,
  WEEK_DAYS,
  CALENDAR_MONTHS
} from "./../utils/calendar";
import styled from 'styled-components';
import CalendarDayButton from './calendar_parts/CalendarDayButton';
import CalendarContainer from './calendar_parts/CalendarContainer';
import CalendarHeader from './calendar_parts/CalendarHeader';
import CalendarLeftArrow from "./calendar_parts/CalendarLeftArrow";
import CalendarRightArrow from "./calendar_parts/CalendarRightArrow";
import CalendarDayLabel from './calendar_parts/CalendarDayLabel';

const FlexContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0px;
`

export class Calendar extends Component {
         state = {
           today: new Date(),
           ...this.stateFromDate(this.props)
         };
         stateFromDate({ date, defaultDate } = {}) {
           const { current: stateCurrent } = this.state || {};

           const currentDate = date || stateCurrent || defaultDate;
           const calendarDate = currentDate || new Date();
           const [year, month] = getDateArray(calendarDate);
           return { current: currentDate, month, year, propDate: date };
         }
         changeHandler = date => () => {
           const { onDateChanged } = this.props;
           console.log(onDateChanged);
           typeof onDateChanged === "function" && onDateChanged(date);
         };
         getCalendarDates = () => {
           const { current, month, year } = this.state;
           const [currentYear, currentMonth] = current
             ? getDateArray(current)
             : [];
           return calendar(
             new Date([year || currentYear, month || currentMonth])
           );
         };
         handlePressure = evt => (fn, fnShift) => {
           if (typeof fn === "function" && typeof fnShift === "function") {
             this.pressureShift = evt.shiftKey;
             this.pressureShift ? fnShift() : fn();

             this.pressureTimeout = setTimeout(() => {
               this.pressureTimer = setInterval(
                 () => (this.pressureShift ? fnShift() : fn()),
                 100
               );
             }, 500);

             document.addEventListener("keyup", this.handlePressureKeyup);
             document.addEventListener("keydown", this.handlePressureKeydown);
           }
         };

         handlePressureKeyup = evt => {
           evt.preventDefault();
           !evt.shiftKey && (this.pressureShift = !evt.shiftKey && false);
         };

         handlePressureKeydown = evt => {
           evt.preventDefault();
           evt.shiftKey && (this.pressureShift = true);
         };

         clearPressureTimer = () => {
           this.pressureTimer && clearInterval(this.pressureTimer);
           this.pressureTimeout && clearTimeout(this.pressureTimeout);

           this.pressureShift = false;

           document.removeEventListener("keyup", this.handlePressureKeyup);
           document.removeEventListener("keydown", this.handlePressureKeydown);
         };

         clearDayTimeout = () => {
           this.dayTimeout && clearTimeout(this.dayTimeout);
         };

         handlePrevious = ev => {
           if (ev) {
             ev.preventDefault();
             this.handlePressure(ev)(
               this.gotoPreviousMonth,
               this.gotoPreviousYear
             );
           }
         };

         handleNext = ev => {
           if (ev) {
             ev.preventDefault();
             this.handlePressure(ev)(this.gotoNextMonth, this.gotoNextYear);
           }
         };

         gotoDate = date => evt => {
           evt && evt.preventDefault();
           const { current } = this.state;
           const isCurrent = current && isSameDay(date, current);

           !isCurrent &&
             this.setState(
               this.stateFromDate({ date }),
               this.changeHandler(date)
             );
         };

         gotoPreviousMonth = () => {
           const { month, year } = this.state;
           const previousMonth = getPreviousMonth(new Date([year, month]));
           const previous = new Date([previousMonth.year, previousMonth.month]);

           this.setState(previousMonth);
         };

         gotoNextMonth = () => {
           const { month, year } = this.state;
           const nextMonth = getNextMonth(new Date([year, month]));
           const next = new Date([nextMonth.year, nextMonth.month]);

           this.setState(nextMonth);
         };

         gotoPreviousYear = () => {
           const { month, year } = this.state;
           const previous = new Date([year - 1, month]);

           this.setState({ year: year - 1 });
         };

         gotoNextYear = () => {
           const { month, year } = this.state;
           const next = new Date([year + 1, month]);
           this.setState({ year: year + 1 });
         };
         // renders
         renderMonthAndYear = () => {
           const { month, year } = this.state;
           const monthname = Object.keys(CALENDAR_MONTHS)[
             Math.max(0, Math.min(month - 1, 11))
           ];
           const props = { onMouseUp: this.clearPressureTimer };

           return (
             <FlexContainer>
               <CalendarLeftArrow {...props} onMouseDown={this.handlePrevious}>
                 Left
               </CalendarLeftArrow>
               <CalendarHeader>
                 {monthname} {year}
               </CalendarHeader>
               <CalendarRightArrow {...props} onMouseDown={this.handleNext}>
                 Right
               </CalendarRightArrow>
             </FlexContainer>
           );
         };
         renderCalendarDate = (date, index) => {
           const { current, month, year, today, propDate } = this.state;
           const thisDay = new Date(date);
           const monthFirstDay = new Date([year, month]);

           const isToday = !!today && isSameDay(thisDay, today);
           const isCurrent = !!current && isSameDay(thisDay, propDate);
           const inMonth =
             !!(month && year) && isSameMonth(thisDay, monthFirstDay);

           const props = {
             index,
             inMonth,

             onClick: this.gotoDate(thisDay),
             title: thisDay.toDateString()
           };

           /* const DateComponent = isCurrent
             ? HighlightedCalendarDate
             : isToday
             ? TodayCalendarDate
             : CalendarDate; */

           return (
             <CalendarDayButton
               isToday={isToday}
               isCurrent={isCurrent}
               inMonth={inMonth}
               key={getDateISO(thisDay)}
               {...props}
             >
               {thisDay.getDate()}
             </CalendarDayButton>
           );
         };
         renderDayLabels = (day, index) => {
           const daylabel = WEEK_DAYS[day].toUpperCase();
           return (
             <CalendarDayLabel key={daylabel} index={index}>
               {daylabel}
             </CalendarDayLabel>
           );
         };
         render() {
           const { renderMonthAndYear, renderDayLabels } = this;
           return (
             <CalendarContainer>
               {renderMonthAndYear()}
               <FlexContainer>
                 {Object.keys(WEEK_DAYS).map(renderDayLabels)}
               </FlexContainer>
               <div
                 style={{
                   display: "flex",
                   flexFlow: "row wrap",
                   width: "100%"
                 }}
               >
                 {this.getCalendarDates().map(this.renderCalendarDate)}
               </div>
             </CalendarContainer>
           );
         }
       }

export default Calendar;
