import Navbar from './components/Navbar/Navbar';
import AddCourse from './components/courses/AddCourse';
import MainRoutes from './routes/MainRoutes';
import CourseContextProvider from './contexts/CourseContextProvider';

function App() {
  return (
    <>
        <CourseContextProvider>

      <Navbar/>

      <AddCourse />
      <MainRoutes />
      </CourseContextProvider>

    </>
  );

}

export default App;
