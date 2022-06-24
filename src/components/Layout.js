<<<<<<< HEAD
// inspired by https://github.com/mantinedev/mantine-gatsby-template/blob/master/src/components/Layout/Layout.tsx

import React from 'react';
import PropTypes from 'prop-types';
import { MantineProvider } from '@mantine/core';

import { Nav } from "./homepage/Navbar";
import { Footer } from "./homepage/Footer";

export const Layout = ({ children }) => {
    const colorScheme = 'light';

    return (
        <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
            {/* Add your theme here */}
            <Nav />
            {children}
            <Footer />
        </MantineProvider>
=======
import React from 'react';
import PropTypes from 'prop-types';

import { Nav } from "../components/homepage/Navbar";
import { Footer } from "../components/homepage/Footer";

export const Layout = ({ children }) => {
    return (
        <main>
            <Nav />
                {children}
            <Footer />
        </main>
>>>>>>> f88d620 (wip)
    );
};

Layout.propTypes = {
    children: PropTypes.node,
}
<<<<<<< HEAD
=======

export default Layout;
>>>>>>> f88d620 (wip)
