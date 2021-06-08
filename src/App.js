import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonGroup variant="contained" color="primary">
          <Button
            startIcon={<SaveIcon />}
            size="large" 
             >
            Save
          </Button>
          <Button
            startIcon={<DeleteIcon />}
            size="large" >
            Discard
          </Button>
        </ButtonGroup>
      
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
