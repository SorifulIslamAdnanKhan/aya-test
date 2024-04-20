import Navbar from '../../Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import { useState } from 'react';
import { useEffect } from 'react';
import Loader from '../../Components/Loader/Loader';
import ScrollToTopButton from '../../ScrollToTopButton/ScrollToTopButton';

const Main = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  if (loading) {
    return <Loader></Loader>
  }
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <ScrollToTopButton></ScrollToTopButton>
    </div>
  );
};

export default Main;