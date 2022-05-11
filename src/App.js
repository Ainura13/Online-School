import './App.css';
import Navbar from './components/Navbar/Navbar';
import AddCourse from './components/courses/AddCourse';
import AuthContextProvider from './contexts/AuthContextProvider';
import MainRoutes from './routes/MainRoutes';
import CourseContextProvider from './contexts/CourseContextProvider';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <>
      <AuthContextProvider>
        <CourseContextProvider>
          <Navbar />
          <MainRoutes />
        </CourseContextProvider>

        <Footer />
      </AuthContextProvider>
    </>
  );
}

export default App;
