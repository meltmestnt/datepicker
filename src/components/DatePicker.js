import React, { Component } from "react";
import TextField from "material-ui/TextField";
import CustomDatePickerDialog from './CustomDatePickerDialog';
export class DatePicker extends Component {
  state = {
    date: this.props.date,
    showDialog: false
  };
  componentWillUpdate(nextProps, nextState) {
    if (nextProps.date !== this.props.date) {
      this.setState({
        date: this.props.date
      });
    }
  }
  closeDatePickerDialog() {
      this.setState({showDialog: false})
  }
  openDialog(ev) {
      this.setState({showDialog: true})
  }
  changeDate(date) {
    console.log(date)
    this.setState({date: new Date(date)})
  }
  render() {
    const { inputLabel = "Pick date", defaultDate } = this.props;
    const { date = null, showDialog } = this.state;
    return (
      <div>
        <TextField
          onClick={ev => this.openDialog(ev)}
          defaultValue={date ? date : ""}
          hintText={inputLabel}
        />
        <CustomDatePickerDialog
          open={showDialog}
          date={date}
          defaultDate={defaultDate}
          dateChange={date => this.changeDate(date)}
          closeDialog={() => this.closeDatePickerDialog()}
        ></CustomDatePickerDialog>
      </div>
    );
  }
}

export default DatePicker;
