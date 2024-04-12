import React from 'react';
import { createBrowserRouter } from 'react-router-dom'; // Import createBrowserRouter and Outlet
import App from "../App.jsx";
import LoginPage from '../Pages/LoginPage.jsx';
import AllergyDetailsPage from '../Pages/AllergyDetailsPage.jsx';
import QuestionnairePage from '../Pages/QuestionnairePage.jsx';
import ResultsPage from '../Pages/ResultsPage.jsx';
import HomePage from '../Pages/HomePage.jsx';
import ProfilePage from '../Pages/ProfilePage.jsx';
import ResultsPageWithIngredients from '../Pages/ResultsPageWithIngredients.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <LoginPage />,  //<Outlet/> for http://localhost:5173/
      },
      {
        path: '/login',
        element: <LoginPage />,  //<Outlet/> for http://localhost:5173/
      },
      {
        path: '/details',
        element: <AllergyDetailsPage />,
      },
      {
        path: '/questionnaire',
        element: <QuestionnairePage />,
      },
      {
        path: '/results',
        element: <ResultsPage />,
      },
      {
        path: '/resultsIngredients',
        element: <ResultsPageWithIngredients />,
      },
      {
        path: '/home',
        element: <HomePage />,
      },
      {
        path: '/profile',
        element: <ProfilePage />,
      },
    ],
  },
]);

export default router;