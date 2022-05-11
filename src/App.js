import './App.css';
import Navbar from './components/Navbar/Navbar';
import AuthContextProvider from './contexts/AuthContextProvider';
import MainRoutes from './routes/MainRoutes';
import CourseContextProvider from './contexts/CourseContextProvider';
import CartContextProvider from './contexts/CartContextProvider';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <AuthContextProvider>
        <CourseContextProvider>
          <CartContextProvider>
            <Navbar />
            <MainRoutes />
          </CartContextProvider>
        </CourseContextProvider>
        <Footer />
      </AuthContextProvider>
    </>
  );
}

export default App;
