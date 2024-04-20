import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main/Main';
import Home from '../Components/Home/Home';
import About from '../Components/About/About';
import Service from '../Components/Service/Service';
import Portfolio from '../Components/Portfolio/Portfolio';
import Blog from '../Components/Blog/Blog';
import Contact from '../Components/Contact/Contact';
import BlogThreeColumn from '../Components/BlogThreeColumn/BlogThreeColumn';
import SinglePost from '../Components/SinglePost/SinglePost';
import ServiceDetails from '../Components/ServiceDetails/ServiceDetails';
import PortfolioDetails from '../Components/PortfolioDetails/PortfolioDetails';
import Error from '../404/Error';
import Errors from '../Components/404/Errors';
import HomeTwo from '../Components/HomeTwo/HomeTwo';
import HomeThree from '../Components/HomeThree/HomeThree';


export const router = createBrowserRouter([
   {
      path: '/',
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
         {
            path: '/',
            element: <Home></Home>
         },
         {
            path: '/home-two',
            element: <HomeTwo></HomeTwo>
         },
         {
            path: '/home-three',
            element: <HomeThree></HomeThree>
         },
         {
            path: '/about',
            element: <About></About>
         },
         {
            path: '/service',
            element: <Service></Service>
         },
         {
            path: '/service-details',
            element: <ServiceDetails></ServiceDetails>
         },
         {
            path: '/portfolio',
            element: <Portfolio></Portfolio>
         },
         {
            path: '/portfolio-details',
            element: <PortfolioDetails></PortfolioDetails>
         },
         {
            path: '/blog',
            element: <Blog></Blog>
         },
         {
            path: '/blog-three-column',
            element: <BlogThreeColumn></BlogThreeColumn>
         },
         {
            path: '/single-post',
            element: <SinglePost></SinglePost>
         },
         {
            path: '/404',
            element: <Errors></Errors>
         },
         {
            path: '/contact',
            element: <Contact></Contact>
         }
      ]
   }
])