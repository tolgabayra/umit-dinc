import type { NextPage } from 'next';
import {
  About,
  Hero,
  Contact,
  Projects,
  Layout,
} from '../containers';

/**
 * TODO: Create separate page for all the projects with filters (vercel | netlify | github api for automation)
 * TODO: Switch to next13 app dir feature, when lottie files start working in app dir
 * TODO: Try test cases
 */

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </Layout>
    </>
  );
};

export default Home;
