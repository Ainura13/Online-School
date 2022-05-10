import './App.css';
import Navbar from './components/Navbar/Navbar';
import AddCourse from './components/courses/AddCourse';
import AuthContextProvider from './contexts/AuthContextProvider';
import MainRoutes from './routes/MainRoutes';
import CourseContextProvider from './contexts/CourseContextProvider';

function App() {
  return (
    <>
   <AuthContextProvider>

        <CourseContextProvider>

      <Navbar/>

      <AddCourse />
      <MainRoutes />
      </CourseContextProvider>

   </AuthContextProvider>
  
  </>
  )
};

export default App;
