import React, { Component } from 'react'
import Calendar from './Calendar';
import CustomDialogPickerUpper from './CustomDialogPickerUpper';
import StyledMuiDialog from './StyledMuiDialog';
import YearsList from './YearsList';
export class CustomDatePickerDialog extends Component {
    state = {
        active: 'date'
    }
    changeTab(tab) {
        if (tab) this.setState({active: tab})
    }
    handleClose() {
        this.props.closeDialog();
    }
    render() {
        const {open, date, dateChange, defaultDate, minYear, maxYear, applyDate, clearDate} = this.props;
        const {active} = this.state;
        return (
          <StyledMuiDialog
            open={open}
            close={() => this.handleClose()}
            applyDate={applyDate}
            clearDate={clearDate}
            tab={active}
            autoScrollBodyContent={true}
          >
            <CustomDialogPickerUpper
              changeTab={tab => this.changeTab(tab)}
              active={active}
              date={date}
            ></CustomDialogPickerUpper>
            {active === "date" ? (
              <Calendar
                defaultDate={defaultDate}
                onDateChanged={dateChange}
                date={date}
              ></Calendar>
            ) : (
              <YearsList
                onDateChanged={dateChange}
                date={date}
                minYear={minYear}
                maxYear={maxYear}
              ></YearsList>
            )}
          </StyledMuiDialog>
        );
    }
}

export default CustomDatePickerDialog
