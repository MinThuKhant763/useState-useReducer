import { useReducer } from 'react';
import './App.css';

const firstReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count++ };
    case "decrement":
      return { ...state, count: state.count-- };
    case "updateKey":
      return { ...state, key: action.payload };
    default:
      throw new Error();
  }
};

const ACTION = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  UPDATE_KEY: "updateKey"
}
function App() {
  const [state, dispatch] = useReducer(firstReducer, { count: 0, key: "" });

  // const [key, setKey] = useState("");
  // const [count,setCount] = useState(0);

  return (
    <div>
      <input type="text" onChange={ (e) => dispatch({ type: ACTION.UPDATE_KEY, payload: e.target.value }) } />
      <h3>your key is - { state.key }</h3>
      <button onClick={ () => dispatch({ type: ACTION.DECREMENT}) }> - </button>
      <span>{ state.count }</span>
      <button onClick={ () => dispatch({ type: ACTION.INCREMENT }) }> + </button>
    </div>
  );
}

export default App;
