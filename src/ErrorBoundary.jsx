import React from 'react';
import { useNavigate } from 'react-router-dom';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an error reporting service
    console.error('Error caught by error boundary:', error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      // Fallback UI for when an error occurs
      return <FallbackUI />;
    }

    return children;
  }
}

function FallbackUI() {
  const navigate = useNavigate(); // Initialize the navigate function

  // Here you can perform any necessary cleanup or logging
  // And then navigate to the homepage
  navigate('/Allergan.github.io/home');

  // You can also render a custom message or component as a fallback UI
  return (
    <div>
      <h1>Oops! Something went wrong.</h1>
      <p>We're redirecting you to the homepage.</p>
    </div>
  );
}

export { ErrorBoundary };
