import React from 'react';
import logo from './logo.svg';
import './App.css';
import MoviesApp from './components/movies/MoviesApp';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <main>
        <QueryClientProvider client={queryClient}>
          <MoviesApp />
        </QueryClientProvider>
      </main>
    </div>
  );
}

export default App;
