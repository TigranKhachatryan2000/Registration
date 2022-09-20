import React from 'react';
import Button from './darkLightMode';

export const darkModeContext = React.createContext('rgb(24, 21, 19)');

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return <darkModeContext.Provider value='dark'>
                  <Button/>
            </darkModeContext.Provider>
    }
}

export default App;