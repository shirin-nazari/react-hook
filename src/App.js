import './App.css';
import EffectTutorial from './useEffect/EffectTutorial';
import LayoutEffectTutorial from './useLayoutEffect/LayoutEffectTutorial';
import ReducerTutorial from './useReducer/ReducerTutorial';
import RefTutorial from './useRef/RefTutorial';
import StateTutorial from './useState/StateToturial';

function App() {
  return (
    <div className="App">
      {/* <StateTutorial />
      <ReducerTutorial />
      <EffectTutorial />
      <RefTutorial /> */}
      <LayoutEffectTutorial />
    </div>
  );
}

export default App;
