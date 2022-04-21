import { useEffect } from 'react';
import Grid from './components/layout/Grid';
import Header from './components/layout/Header';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import Footer from './components/layout/Footer';
import { saveTheme } from './utils/theme';

function App() {
  useEffect(() => {
    saveTheme();
  });
  return (
    <Grid>
      <main>
        <Header />
        <ProjectsSection />
      </main>
      <Footer />
    </Grid>
  );
}

export default App;
