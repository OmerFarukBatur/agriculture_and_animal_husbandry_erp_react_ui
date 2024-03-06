import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './screens/dashboard/components/PageTitle';
import SignIn from './screens/ui/pages/authentication/SignIn';
import SignUp from './screens/ui/pages/authentication/SignUp';
import Calendar from './screens/dashboard/defaults/pages/Calendar';
import Chart from './screens/dashboard/defaults/pages/Chart';
import Default_Dashboard from './screens/dashboard/defaults/pages/Dashboard/Default_Dashboard';
import Profile from './screens/dashboard/defaults/pages/Profile';
import Settings from './screens/dashboard/defaults/pages/Settings';
import Tables from './screens/dashboard/defaults/pages/Tables';
import MainPage from './screens/ui/pages/mainpage/MainPage';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
       <Route
          index
          element={
            <>
              <PageTitle title="Anasayfa" />
              <MainPage />
            </>
          }
        /> 
      <Route
          path="/signin"
          element={
            <>
              <PageTitle title="Giriş Yap" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <PageTitle title="Kayıt Ol" />
              <SignUp />
            </>
          }
        />
        <Route
           path="/dashboard"
          element={
            <>
              <PageTitle title="Dashboard | FAM Technology" />
              <Default_Dashboard />
            </>
          }
        />
        <Route
          path="/calendar"
          element={
            <>
              <PageTitle title="Calendar" />
              <Calendar />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <PageTitle title="Profile" />
              <Profile />
            </>
          }
        />        
        <Route
          path="/tables"
          element={
            <>
              <PageTitle title="Tables" />
              <Tables />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="Settings" />
              <Settings />
            </>
          }
        />
        <Route
          path="/chart"
          element={
            <>
              <PageTitle title="Basic Chart" />
              <Chart />
            </>
          }
        />       
        
      </Routes>
    </>
  );
}

export default App;
