/* eslint-disable react/prop-types */
import { forwardRef } from "react";

const Input = forwardRef(function Input({ ...props }, ref) {
  let style =
    "aspect-square uppercase text-6xl h-32 text-center rounded-xl shadow-lg border-4 border-gray-400";

  props.placeholder.length > 2 ? (style += " w-64") : (style += " w-32");

  return <input ref={ref} {...props} className={style} />;
});

export default Input;
