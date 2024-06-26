import 'regenerator-runtime/runtime';
import MainPage from './pages/main';
import MainLayout from './layouts/mainLayout';
import { Routes, Route } from 'react-router-dom';
import ParticleBg from './components/particle/ParticleBg';
import ExplorePage from './pages/explore';
import InputPage from './pages/input';
function App() {
  return (
    <>
      <ParticleBg />
      <MainLayout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/input" element={<InputPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="*" element={<div>not found</div>} />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;
