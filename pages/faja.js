import { Fragment } from "react";
import FajaSection from "../components/FajaSectionComponent";

export default function Faja(props) {
  const dataRaise = (sizeSelected, colorSelected) => {
    props.dataRaise(sizeSelected, colorSelected);
  };
  return (
    <Fragment>
      <FajaSection dataRaise={dataRaise} />
    </Fragment>
  );
}
