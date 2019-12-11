import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as ConfigProvider } from 'styled-components';
import { ThemeProvider } from '@zendeskgarden/react-theming';
import '@zendeskgarden/react-grid/dist/styles.css';
import '@zendeskgarden/react-buttons/dist/styles.css';
import '@zendeskgarden/react-forms/dist/styles.css';
import '@zendeskgarden/react-modals/dist/styles.css';

import './reset.css';
import theme from '../../../theme';
import Navigation from '../Navigation';

const Layout = ({ children }) => {
  const { config, garden } = theme;

  return (
    <>
      <ConfigProvider theme={config}>
        <ThemeProvider theme={garden}>
          <Navigation>
            {children}
          </Navigation>
        </ThemeProvider>
      </ConfigProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
