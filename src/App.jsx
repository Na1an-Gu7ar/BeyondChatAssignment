import { BrowserRouter as Router } from 'react-router-dom';
import Conversations from './page/Conversations';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Conversations />
      </div>
    </Router>
  );
}

export default App;