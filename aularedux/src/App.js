import './App.css';
import Video from './components/Video';
import Sidebar from './components/Sidebar';
import { Provider } from 'react-redux';

import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Video />
        <Sidebar />
      </Provider>
    </div>
  );
}

export default App;
