import './App.css';
import Clock from './Clock';
import Main from './components/Main-to-do';
import Message from './Message';

import Welcome from './Welcome';

function App() {
  return (
    <div>
      <Welcome />
      <Message message="You can easily add,edit,mark done and delete tasks" />
      <Main />
      <Clock />
    </div>
  );
}
export default App;
