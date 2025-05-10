// pages/index.tsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type Project = {
  id: number;
  title: string;
  description: string;
};

type Review = {
  id: number;
  title: string;
  content: string;
  continuation: string;
};

type IndexPageProps = {
  projects: Project[];
  reviews: Review[];
};

const IndexPage: React.FC<IndexPageProps> = ({ projects, reviews }) => {
  return (
    <>
      <Navbar />
      <p>This website serves WMW</p>
      <p>This website serves WMW</p>
      <p>This website serves WMW</p>
      <p>This website serves WMW</p>
      <p>This website serves WMW</p>
      <p>This website serves WMW</p>
      <p>This website serves WMW</p>
      <p>This website serves WMW</p>
      <p>This website serves WMW</p>
      <p>This website serves WMW</p>
      <p>This website serves WMW</p>
      <p>This website serves WMW</p>
      <Footer />
    </>
  );
};

export default IndexPage;
