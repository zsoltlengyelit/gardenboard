import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mainlayout from '~/compontents/layout/MainLayout';

export default function AppRouter() {

  return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Mainlayout/>}
                />
            </Routes>
        </BrowserRouter>
  );
}
