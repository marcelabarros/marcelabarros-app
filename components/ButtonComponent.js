import React from "react";
import Link from "next/link";

export default function ButtonComponent({
  background,
  text,
  border,
  color,
  hrefto,
}) {
  const myStyle = {
    backgroundColor: `${background}`,
    color: `${color}`,
    border: `${border}`,
  };

  return (
    <Link href={`${hrefto}`}>
      <button className="button-component" style={myStyle}>
        {text}
      </button>
    </Link>
  );
}
