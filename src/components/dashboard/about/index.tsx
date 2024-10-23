import customerRevImg from "../../../assets/CustomerRevImg.jpg";

const About = () => {
  return (
    <div className="w-full h-full grid grid-cols-2 gap-4">
      <div
        className="w-full h-[80vh] flex flex-col bg-cover bg-center justify-center items-center text-center rounded-md"
        style={{ backgroundImage: `url(${customerRevImg})` }}
      >
        <div className="flex flex-col bg-white space-y-2 w-fit text-2xl uppercase p-4 rounded-md opacity-80">
         <h1 className="font-semibold text-3xl"> Customers review about our store </h1>
          <span className="font-bold text-5xl">2.6k+</span>
        </div>

      </div>

      <div className="w-full h-full border-2 border-gray-400 rounded-md">
        
      </div>

      <div  className="w-full col-span-2 h-fit border-2 border-gray-400">invitation for try the store</div>
    </div>
  );
};

export default About;
