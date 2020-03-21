import React, { Component } from 'react'
import DatePicker from "material-ui/DatePicker";
import styled from 'styled-components';

const PickersWrapper = styled.div`
    width: 100%;
    display: flex;
    height: 100%;
    flex-direction: ${props => props.column ? 'column' : 'row'};
    justify-content: space-around;

`
const Title = styled.h1`
    color: #000;
    font-size: 36px;
    width: 100%;
    margin: 25px 0px;
    text-align: center;
    font-weight: 500;

`


export class TwoControlledMuiDatePickers extends Component {
         state = {
           pickerRef: null,
           firstInputDate: null,
           secondInputDate: null
         };
         firstDateChanged = (ev, date) =>
           this.setState({ firstInputDate: date });
         secondDateChanged = (ev, date) =>
           this.setState({ secondInputDate: date });
         handleSecondDatepicker = ev => {
           const { firstInputDate: firstDate, secondInputDate } = this.state;
           let ref = this.pickerRef;
           ref.refs.dialogWindow.setState({ open: false });
           if (!firstDate) return;
           if (secondInputDate) return;
           setTimeout(() => {
             ref.refs.dialogWindow.refs.calendar.setState({
               displayDate: new Date(firstDate),
               transitionEnter: null,
               displayMonthDay: null
             });
             ref.refs.dialogWindow.refs.calendar.setState({
               displayDate: new Date(firstDate),
               transitionEnter: null,
               displayMonthDay: true
             });
           }, 1);
         };
         render() {
             const { firstInputDate, secondInputDate } = this.state;
           return (
             <PickersWrapper column={true}>
               <Title>Using refs</Title>
               <PickersWrapper>
                 <DatePicker
                   hintText="First"
                   value={firstInputDate}
                   onChange={this.firstDateChanged}
                 ></DatePicker>
                 <DatePicker
                   hintText="Second"
                   value={secondInputDate}
                   onChange={this.secondDateChanged}
                   className="datepicker-disable-animation"
                   onShow={this.handleSecondDatepicker}
                   ref={ref => (this.pickerRef = ref)}
                 ></DatePicker>
               </PickersWrapper>
             </PickersWrapper>
           );
         }
       }

export default TwoControlledMuiDatePickers
