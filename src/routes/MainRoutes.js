import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutUsPage from '../pages/AboutUsPage';

const MainRoutes = () => {
  const ROUTES = [
    {
      link: '/about',
      element: <AboutUsPage />,
      id: 1,
    },
  ];

  return (
    <>
      <Routes>
        {ROUTES.map((item) => {
          return (
            <Route path={item.link} element={item.element} key={item.id} />
          );
        })}
      </Routes>
    </>
  );
};

export default MainRoutes;
