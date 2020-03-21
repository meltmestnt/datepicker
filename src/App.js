import React from 'react'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import './globalStyles'
import TwoDatePickers from './components/TwoDatePickers';
import TwoControlledMuiDatePickers from "./components/TwoControlledMuiDatePickers";
class App extends React.Component {
  
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <TwoDatePickers></TwoDatePickers>
          <TwoControlledMuiDatePickers></TwoControlledMuiDatePickers>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App
