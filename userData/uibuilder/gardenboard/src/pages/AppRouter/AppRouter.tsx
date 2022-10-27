import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mainlayout from '~/compontents/layout/MainLayout';
import UserData from '~/compontents/UserData/UserData';

export default function AppRouter() {

  return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Routes>
                <Route
                    path="/"
                    element={<Mainlayout/>}
                >
                    <Route
                        index
                        element={<UserData />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
  );
}
