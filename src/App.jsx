import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Navbar from './component/layout/Navbar.jsx';
import Footer from './component/layout/Footer.jsx';
import Alert from './component/layout/Alert.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import User from './pages/User.jsx';
import NotFound from './pages/notFound.jsx';
import { GithubProvider } from './component/context/github/githubContext.jsx';
import { AlertProvider } from './component/context/alert/AlertContext.jsx';

export default function App() {
  return (
    <GithubProvider>
      <AlertProvider> 
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <main className="container p-10 mx-auto mb-4">
              <Alert />
              <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/user/:login' element={<User />}></Route>
                <Route path='/notFound' element={<NotFound />}></Route>
                <Route path='/*' element={<NotFound />}></Route>
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}