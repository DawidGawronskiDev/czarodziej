import Form from "../components/Form";

const MainPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-lg md:text-3xl lg:text-4xl xl:text-6xl font-bold uppercase text-center">
        Kiedy zostaniesz czarodziejem?
      </h1>
      <Form />
    </div>
  );
};

export default MainPage;
