import React, { Component } from 'react'
import DatePicker from './DatePicker';
export class TwoDatePickers extends Component {
    state = {
        firstDate: null,
        secondDate: null
    }
    render() {
        const {firstDate, secondDate} = this.state;
        return (
          <div
            style={{ width: "100%", display: "flex", justifyContent: "space-around" }}
          >
            <DatePicker
              inputLabel="Readiness date"
              confirmDate={date => this.setState({ firstDate: new Date(date) })}
            ></DatePicker>
            <DatePicker
              defaultDate={firstDate}
              inputLabel="Departure date"
              confirmDate={date =>
                this.setState({ secondDate: new Date(date) })
              }
            ></DatePicker>
          </div>
        );
    }
}

export default TwoDatePickers
