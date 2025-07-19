"use client";
import React from 'react'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

// Import fonts
import { Libre_Barcode_39, El_Messiri } from 'next/font/google';

// Load font with Next.js
const libreBarcode = Libre_Barcode_39({ subsets: ['latin'], weight: '400' });
const elMessiri = El_Messiri({ subsets: ['latin'], weight: '400' });

// Emotion Cache for RTL
export const muiCache = createCache({
    key: "mui",
});

const ThemeProv = ({ children }: { children: React.ReactNode }) => {
    const theme = createTheme({
        direction: "rtl",
        palette: {
            mode: "light",
            primary: {
                main: "#755139",
            },
            secondary: {
                main: "#F2EDD7",
            },
            background: {
                default: "#fafafa",
                paper: "#fff",
            }
        },
        typography: {
            fontFamily: `${elMessiri.style.fontFamily}, sans-serif`,
            fontSize: 12.5,
            h1: {
                fontFamily: `${elMessiri.style.fontFamily}, sans-serif`,
                lineHeight: "1"
            },
        }
    });

    return (
        <AppRouterCacheProvider options={{
            key: "muirtl",
            stylisPlugins: [prefixer, rtlPlugin],
        }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </AppRouterCacheProvider>
    );
};

export default ThemeProv;
