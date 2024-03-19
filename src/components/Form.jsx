import { useRef, useState } from "react";
import Input from "./Input";
import formValidation from "../utils/formValidation";
import saveDate from "../utils/saveDate";

const Form = () => {
  const [errors, setErrors] = useState([]);

  const dd = useRef();
  const mm = useRef();
  const yy = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      dd: dd.current.value,
      mm: mm.current.value,
      yy: yy.current.value,
    };

    if (formValidation(formData) === null) {
      saveDate(formData);
    } else {
      setErrors(formValidation(formData));
    }

    console.log(formData);
  };

  return (
    <form action="post" className="grid gap-8" onSubmit={handleSubmit}>
      <div className="flex gap-8">
        <Input ref={dd} placeholder={"dd"} name={"dd"} />
        <Input ref={mm} placeholder={"mm"} name={"mm"} />
        <Input ref={yy} placeholder={"yyyy"} name={"yy"} />
      </div>
      <button
        type="submit"
        className="rounded-lg px-4 py-6 w-full text-4xl font-bold uppercase bg-black text-white"
      >
        sprawdź
      </button>
      {errors && (
        <ul className="text-center">
          {errors.map((error, index) => {
            return (
              <li key={index} className="text-red-900">
                {error}
              </li>
            );
          })}
        </ul>
      )}
    </form>
  );
};

export default Form;
