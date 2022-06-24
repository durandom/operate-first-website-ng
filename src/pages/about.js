import * as React from "react";
import '../pages/style.css';
// Component imports
import { Nav } from "../components/homepage/Navbar";
import { Footer } from "../components/homepage/Footer";
import { AboutContent } from "../components/nav-tabs/AboutPage";

const AboutPage = () => {

  return (
    <Layout>
      <AboutContent />
    </Layout>
  )
}

export default AboutPage;
