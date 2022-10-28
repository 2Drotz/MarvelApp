import { Component } from "react";
import ErrorMessage from "../errorMessage/ErrorMessage";

class ErrorBoundery extends Component {
   state = {
      error: false
   }

   componentDidCatch(error, errorInfo) {
      console.log(error, errorInfo);

      this.setState({
         error: true
      })


   }
   render() {
      if (this.state.error) {
         return <div>
            <h2>Error</h2>
            <ErrorMessage />
         </div>
      }

      return this.props.children;
   }
}

export default ErrorBoundery;