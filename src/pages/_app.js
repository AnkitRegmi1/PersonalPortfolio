import { ThemeProvider } from '../context/ThemeContext';
import '../styles/fonts.css';
import '../styles/theme.css';
import '../styles/custom.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
