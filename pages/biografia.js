import { Fragment } from "react";
import BiografiaComponent from "../components/BiografiaComponent";
import ExtendedBio from "../components/ExtendedBio";
import TestimoniosComponent from "../components/TestimoniosSection";

export default function biografia() {
  return (
    <Fragment>
      <BiografiaComponent />
      <ExtendedBio />
      <TestimoniosComponent />
    </Fragment>
  );
}
