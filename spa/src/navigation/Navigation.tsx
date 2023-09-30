import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CatalogPage } from '../pages/CatalogPage';
import { ChocoPage } from '../pages/ChocoPage';
import { ContactsPage } from '../pages/ContactsPage';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { MainPage } from '../pages/MainPage/MainPage';

export const Navigation: FC = () => {
    return (
        <div className="layout">
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/catalog" element={<CatalogPage />} />
                <Route path="/catalog/:id" element={<ChocoPage />} />
                <Route path="/contacts" element={<ContactsPage />} />
            </Routes>
            <Footer />
        </div>
    );
};
