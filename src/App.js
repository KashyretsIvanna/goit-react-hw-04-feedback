import './App.css';
import Container from './components/container';

const stateInfo={
  good: 0,
    neutral: 0,
    bad: 0,
    total:0,
    positivePercentage:"0%"
}

function App() {

  const state={
    ...stateInfo,
    // good: 0,
    // neutral: 0,
    // bad: 0,
    // total:0,
    // positivePercentage:"0%"
  };

  
  return (
    <div className="App">
      <Container 
      state={state}
      
      />
      
    </div>
  );
}

export default App;
