import './App.css';
import { Div } from 'atomize';
import TextArea from './components/textArea';

const App = () => {
  return (
    <Div className="App">
      <header className="App-header">
        <TextArea />
      </header>
    </Div>
  );
};

export default App;
