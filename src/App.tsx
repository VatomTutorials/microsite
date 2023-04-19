import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ExperienceProvider } from '@vatom/experience-sdk';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
//
function App() {
  return (
    <Router basename={"/" }>
      <ExperienceProvider>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
        </Routes>
      </ExperienceProvider>
    </Router>
  )
}
//
export default App;