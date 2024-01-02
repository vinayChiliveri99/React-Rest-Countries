import Body from '../components/Body';
import CountryDetail from '../components/CountryDetail';
import Header from '../components/Header';
import { Route, Routes } from 'react-router-dom';
import { createContext, useState } from 'react';
import NoUrlMatch from '../components/NoUrlMatch';

export const DarkMode = createContext([]);

function App() {
  const [mode, setMode] = useState('light');
  return (
    <>
      <DarkMode.Provider value={{ mode, setMode }}>
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/country/:id" element={<CountryDetail />} />
          <Route path="*" element={<NoUrlMatch />} />
        </Routes>
      </DarkMode.Provider>
    </>
  );
}

export default App;
