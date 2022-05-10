import Navbar from './components/Navbar/Navbar';
import AddCourse from './components/courses/AddCourse';
import MainRoutes from './routes/MainRoutes';

function App() {
  return (
    <>
      <Navbar/>

      <AddCourse />
      <MainRoutes />
    </>
  );

}

export default App;
