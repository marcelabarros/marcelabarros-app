import { Fragment } from "react";
import BiografiaComponent from "../components/BiografiaComponent";
import TestimoniosComponent from "../components/TestimoniosSection";

export default function biografia() {
  return (
    <Fragment>
      <BiografiaComponent />
      <TestimoniosComponent />
    </Fragment>
  );
}
