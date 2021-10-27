import './App.css';
import Dashboard from './Component/Dashboard';
import Store from './redux/Store'
import {Provider} from 'react-redux'

function App() {
  return (
    <Provider store={Store}>
    <div className="App">
      <Dashboard />
    </div>
    </Provider>
  );
}

export default App;
