import { Outlet } from 'react-router-dom';

import Categories from '../../components/categories/categories.component';

// import HomePage from './pages/homepage/homepage.component.jsx';



  


const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'Apps',
      imageUrl: 'https://www.antiquetrader.com/.image/t_share/MTY3MDE2MDU3ODUzMDYwNzgx/image-placeholder-title.jpg',
    },
    {
      id: 2,
      title: 'Ecommerce',
      imageUrl: 'https://www.antiquetrader.com/.image/t_share/MTY3MDE2MDU3ODUzMDYwNzgx/image-placeholder-title.jpg',
    },
    {
      id: 3,
      title: 'games',
      imageUrl: 'https://www.antiquetrader.com/.image/t_share/MTY3MDE2MDU3ODUzMDYwNzgx/image-placeholder-title.jpg',
    },
    {
      id: 4,
      title: 'Who I am',
      imageUrl: 'https://www.antiquetrader.com/.image/t_share/MTY3MDE2MDU3ODUzMDYwNzgx/image-placeholder-title.jpg',
    },
    {
      id: 5,
      title: 'Contact Me',
      imageUrl: 'https://www.antiquetrader.com/.image/t_share/MTY3MDE2MDU3ODUzMDYwNzgx/image-placeholder-title.jpg',
    },
  ]

  
  return (
    <div>
        <Outlet />
        <Categories categories={categories} />
    </div>
  )
}

export default Home;