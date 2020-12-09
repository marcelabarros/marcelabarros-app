import Head from "next/head";
import { Fragment } from "react";
import Hero from "../components/HeroComponent";
import BannerComponent from "../components/BannerComponent";
import BiografiaSection from "../components/BiografiaComponent";
import FajaSection from "../components/FajaSectionComponent";
import TestimoniosSection from "../components/TestimoniosSection";
// import styles from '../styles/Home.module.css's

export default function Home(props) {
  return (
    <Fragment>
      <Hero />
      <BannerComponent />
      <BiografiaSection />
      <FajaSection dataRaise={props.dataRaise} />
      <TestimoniosSection />
    </Fragment>
  );
}
