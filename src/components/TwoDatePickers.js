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
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <DatePicker
              inputLabel="Readiness date"
              date={firstDate}
              confirmDate={date => this.setState({ firstDate: new Date(date) })}
            ></DatePicker>
            <DatePicker
              date={secondDate}
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
