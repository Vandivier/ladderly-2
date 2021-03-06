import '../styles/globals.css';

import { Provider as SessionProvider } from 'next-auth/client';
import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from '../lib/theme';

export default function App(props: { Component: any; pageProps: any }): JSX.Element {
    const { Component, pageProps } = props;

    return (
        <>
            <Head>
                <title>Ladderly</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
                <meta name="theme-color" content={theme.palette.primary.main} />
            </Head>

            <SessionProvider session={pageProps.session}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Component {...pageProps} />
                </ThemeProvider>
            </SessionProvider>
        </>
    );
}

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
};
