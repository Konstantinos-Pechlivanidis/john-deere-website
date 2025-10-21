import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="text-red-500 text-6xl mb-4">⚠️</div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Κάτι πήγε στραβά
            </h1>
            <p className="text-gray-600 mb-4">
              Λυπούμαστε, αλλά κάτι δεν λειτούργησε σωστά. Παρακαλώ δοκιμάστε ξανά.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-jdgreen hover:bg-jdgreen-light text-white px-6 py-2 rounded-lg transition-colors"
            >
              Ανανέωση Σελίδας
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
