import './env.d';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { createI18Next } from './commons/i18n';
import AppRouter from '~/pages/AppRouter';
import { InstUISettingsProvider } from '@instructure/ui';
import { appTheme } from '~/commons/theme/theme';
import './index.scss';

createRoot(document.getElementById('root') as HTMLElement).render(
    <>
        <InstUISettingsProvider theme={appTheme}>
            <I18nextProvider i18n={createI18Next()}>
                <AppRouter />
            </I18nextProvider>
        </InstUISettingsProvider>
    </>
);
