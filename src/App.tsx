import { Header } from './components/Header';
import { Tasks } from './components/Tasks';
import './global.css';
import { v4 as uuidv4 } from 'uuid';

const tasks = [
  {
    id: uuidv4(),
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
  },
  {
    id: uuidv4(),
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
  },
  {
    id: uuidv4(),
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
  },
  {
    id: uuidv4(),
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
  },
  {
    id: uuidv4(),
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
  },
  {
    id: uuidv4(),
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
  },
];

function App() {
  return (
    <>
      <Header />
      <Tasks data={tasks} />
    </>
  );
}
export default App;
