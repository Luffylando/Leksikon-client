import { Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import User from './Pages/Users';
import Question from './Pages/Questions';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/users" element={<User />} />
      <Route path="/questions" element={<Question />} />
    </Routes>
  );
}

export default App;
