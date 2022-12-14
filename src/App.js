import './App.css';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Basket } from './Basket';
function App() {
  return (
    <div className="App">
    <DndProvider backend={HTML5Backend}>
    <Basket/>
  </DndProvider>
    </div>
  );
}

export default App;
