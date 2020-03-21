import React from 'react'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import DatePicker from './components/DatePicker';
import './globalStyles'
class App extends React.Component {
  
  render() {
    
    return (
      <MuiThemeProvider>
        <div>
          <DatePicker
            defaultDate={new Date("2011.03.10")}
            
            inputLabel="Readiness date"
          ></DatePicker>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App
