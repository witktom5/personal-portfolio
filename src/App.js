import { useEffect } from 'react';
import Grid from './components/layout/Grid';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Footer from './components/layout/Footer';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import { saveTheme } from './utils/theme';

function App() {
  useEffect(() => {
    saveTheme();
  });
  return (
    <Grid>
      <main>
        <Header />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </Grid>
  );
}

export default App;
