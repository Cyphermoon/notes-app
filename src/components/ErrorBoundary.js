import {Component} from "react";

export function ErrorScreen({ error }){
    return(
        <div className="error">
            <h3>We are sorry something went wrong</h3>
            <p>we cannot process your request at this moment</p>
            <p>Error: {error.message}</p>
        </div>
    )
}

class ErrorBoundary extends Component{
    state = { error:null }

    static getDerivedStateFromError(error){
        return { error }
    }

    render(){
        const { error } = this.state
        const { children } = this.props

        if(error) return  <ErrorScreen error={error} />
        return children
    }
} 

export default ErrorBoundary