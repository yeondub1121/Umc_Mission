import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import MainPage from '../pages/main';
import NowPlayingPage from '../pages/nowPlaying';
import PopularPage from '../pages/popular';
import TopRatedPage from '../pages/topRated';
import UpComingPage from '../pages/upComing';


export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" Component={MainPage} />
          <Route path="/nowplaying" Component={NowPlayingPage} />
          <Route path="/popular" Component={PopularPage} />
          <Route path="/toprated" Component={TopRatedPage} />
          <Route path="/upcoming" Component={UpComingPage} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
