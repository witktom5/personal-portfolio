import { useEffect } from 'react';
import Grid from './components/Grid';
import Header from './components/layout/Header';
import ProjectsSection from './components/layout/ProjectsSection';
import Footer from './components/layout/Footer';
import { saveTheme } from './utils/theme';

function App() {
  useEffect(() => {
    saveTheme();
  });
  return (
    <Grid>
      <Header />
      <ProjectsSection />
      <Footer />
    </Grid>
  );
}

export default App;
