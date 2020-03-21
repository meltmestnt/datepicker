import React, { Component } from 'react'
import Calendar from './Calendar';
import CustomDialogPickerUpper from './CustomDialogPickerUpper';
import StyledMuiDialog from './StyledMuiDialog';
export class CustomDatePickerDialog extends Component {
    constructor() {
        super()
        this.handleClose = this.handleClose.bind(this);
    }
    handleClose() {
        this.props.closeDialog();
    }
    render() {
        const {open, date, dateChange, defaultDate} = this.props;
        
        return (
          <StyledMuiDialog
            open={open}
            close={this.handleClose}
            autoScrollBodyContent={true}
          >
            <CustomDialogPickerUpper date={date}></CustomDialogPickerUpper>
            <Calendar defaultDate={defaultDate} onDateChanged={dateChange} date={date}></Calendar>
          </StyledMuiDialog>
        );
    }
}

export default CustomDatePickerDialog
