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

            <Footer />
          </CartContextProvider>
        </CourseContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
