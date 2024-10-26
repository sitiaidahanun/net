import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import EditPhoto from './routes/EditPhoto';
import Home from './routes/Home';
import Photos from './routes/Photos';
import AddPhoto from './routes/AddPhoto';
import NotFound from './routes/NotFound';

const App = () => {
  return (
    <>
      <div className='navbar'>
        <div className='studentInfo'>
          {/* TODO: answer here */}
          <h2 className="studentName">Siti Aida Hanun</h2>
          <p className="studentId">FS11896309</p>
        </div>
        <Link to='/'>Home</Link>
        <Link to='/photos'>My Photos</Link>
        <Link to='/add'np>Add Photo</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photos">
          <Route index element={<Photos />} />
          <Route path=":id" element={<EditPhoto />} />
        </Route>
        <Route path="/add" element={<AddPhoto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
