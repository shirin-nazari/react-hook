import './App.css';
import EffectTutorial from './useEffect/EffectTutorial';
import ReducerTutorial from './useReducer/ReducerTutorial';
import StateTutorial from './useState/StateToturial';

function App() {
  return (
    <div className="App">
      <StateTutorial />
      <ReducerTutorial />
      <EffectTutorial />
    </div>
  );
}

export default App;
