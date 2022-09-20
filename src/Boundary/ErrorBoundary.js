import React from "react";
export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: '',
            errorInfo: '',
        }
    }
    static getDerivedStateFromError(error) {
        return {
            hasError: true,
        }
    }
    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo,
        })
    }
    render() {
        if(this.state.hasError) {
            return <>
             <strong> Error: {this.state.error.toString()} </strong>
             <strong> ErrorInfo: {this.state.errorInfo.componentStack} </strong>
            </>
        }
        return this.props.children;
    }
}