import './App.css';
import CallbackTutorial from './useCallback/CallbackTutorial';
import ContextTutorial from './useContext/ContextTutorial';
import EffectTutorial from './useEffect/EffectTutorial';
import ImperativeHandleTutorial from './useImperativeHandle/ImperativeHandleTutorial';
import LayoutEffectTutorial from './useLayoutEffect/LayoutEffectTutorial';
import MemoTutorial from './useMemo/MemoTutorial';
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
      {/* <LayoutEffectTutorial /> */}
      {/* <ImperativeHandleTutorial /> */}
      {/* <ContextTutorial /> */}
      {/* <MemoTutorial /> */}
      <CallbackTutorial />
    </div>
  );
}

export default App;
