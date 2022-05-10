import './App.css';
import AuthContextProvider from './contexts/AuthContextProvider';
import MainRoutes from './routes/MainRoutes';

function App() {
  return <>
   <AuthContextProvider>
     <MainRoutes />
   </AuthContextProvider>
  
  </>;
}

export default App;
