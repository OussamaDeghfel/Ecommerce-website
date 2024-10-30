import CountUp from "react-countup";

const Home = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex w-full h-[90vh] bg-Banner rounded-lg bg-black/60">
          <div className="flex flex-col w-full h-full bg-black/40 justify-center items-center rounded-md">
            <div className="text-white p-8 text-center mt-12">
              <h1 className="text-orange-500 text-6xl font-outline-2 font-bold md:text-9xl md:font-bold md:font-outline-4">
                Welcome!
              </h1>{" "}
              <p className="text-3xl md:text-5xl md:font-outline-2"> Discover exclusive deals today!</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:mt-8 justify-center items-center">
              <div className="w-40 h-full bg-white rounded-md border-2 border-orange-500 p-5 text-center">
                <h2 className="text-2xl font-bold text-orange-500">
                   <CountUp start={0} end={98} duration={6} />%
                </h2>
                <h1 className="font-medium text-xl">Customer Satisfaction</h1>
              </div>
              <div className="w-40 h-full bg-white rounded-md border-2 border-orange-500 p-5 text-center">
                <h2 className="text-2xl font-bold text-orange-500">
                  +<CountUp start={0} end={30} duration={8} />
                </h2>
                <h1 className="font-medium text-xl">
                  {" "}
                  Shipping to countries worldwide
                </h1>
              </div>
              <div className="w-40 h-full bg-white rounded-md border-2 border-orange-500 p-5 text-center">
                <h2 className="text-2xl font-bold text-orange-500">+
                <CountUp start={0} end={500} duration={4} />
                </h2>
                <h1 className="font-medium text-xl">items sold this month!</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
