import React, { Component } from 'react'
import Calendar from './Calendar';
import CustomDialogPickerUpper from './CustomDialogPickerUpper';
import StyledMuiDialog from './StyledMuiDialog';
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
        const {open, date, dateChange, defaultDate} = this.props;
        const {active} = this.state;
        return (
          <StyledMuiDialog
            open={open}
            close={() => this.handleClose()}
            autoScrollBodyContent={true}
          >
            <CustomDialogPickerUpper changeTab={tab => this.changeTab(tab)} active={active} date={date}></CustomDialogPickerUpper>
            <Calendar defaultDate={defaultDate} onDateChanged={dateChange} date={date}></Calendar>
          </StyledMuiDialog>
        );
    }
}

export default CustomDatePickerDialog
