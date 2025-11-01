import Lenis from 'lenis';
import NavBar from './Components/NavBar';
import HomePage from './Page/HomePage';
import { Route, Routes } from 'react-router-dom';
import TourSpotDetails from './Page/TourSpotDetails';
import Footer from './Components/Footer';
import BusRentCardBox from './Page/BusRentCardBox';
import HotelList from './Page/HotelList';
import CreatedBy from './Components/CreatedBy';
import { useEffect } from 'react';
import ScrollToTop from './Components/ScrollToTop';

export default function App() {

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });

    // Listen for the scroll event and log the event data
    lenis.on('scroll', (e) => {
      console.log(e);
    });
  }, []);

  return (
    <div className='relative'>
      <div className="w-full fixed top-0 z-50"><NavBar/></div>
      <CreatedBy />
      <ScrollToTop/>
       <Routes>
          <Route path="/Blog" element={<HomePage />} />
          <Route path='/spot/:id' element={ <TourSpotDetails/> }/>
          <Route path='/bus-rent' element={ <BusRentCardBox/> } />
          <Route path='/hotel' element={ <HotelList/> } />
       </Routes>
       <Footer/>
    </div>
  )
}