import Home from "./Home/HomePage/Home";
import Tasks from "./Task/Tasks/Tasks";
import Notes from "./Notes/Notes/Notes";
import{Routes , Route} from 'react-router-dom';
function App() {
  return (
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/tasks' element={<Tasks/>} />
                <Route path='/notes' element={<Notes/>} />
            </Routes>

  );
}

export default App;
