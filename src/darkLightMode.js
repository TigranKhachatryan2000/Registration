import React from "react";
import "./button.css"
import ValidationPage from "./validation";
import { darkModeContext } from './App'

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            background: '',
            isValid: true,
        }
    }
    darkLightBtn = () => {
       this.setState({isValid: !this.state.isValid});
       if(!this.state.isValid) {
        this.setState({background: this.state.background = ''});
        this.myRef.current.style.backgroundColor = this.state.background;
       } else {
        this.setState({background: this.state.background = darkModeContext._currentValue});
        this.myRef.current.style.backgroundColor = this.state.background;
       }
    }
    render() {
        return <div ref={this.myRef} style={{height: '100vh'}}>
          <button onClick={this.darkLightBtn}> {this.state.isValid ? "Dark Mode" : "Light Mode"} </button>
          <ValidationPage />
        </div>
    }
}
export default Button;