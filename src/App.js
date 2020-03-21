import React from 'react'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import DatePicker from './components/DatePicker';
import './globalStyles'
import TwoDatePickers from './components/TwoDatePickers';
class App extends React.Component {
  
  render() {
    
    return (
      <MuiThemeProvider>
        <div>
          <TwoDatePickers></TwoDatePickers>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App
