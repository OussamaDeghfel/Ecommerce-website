import CountUp from "react-countup";

const Home = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex w-full h-[90vh] bg-Banner rounded-lg bg-black/60">
          <div className="flex flex-col w-full h-full bg-black/40 justify-center items-center rounded-md">
            <div className="text-5xl text-white p-8 text-center mt-12">
              <h1 className="text-orange-500 text-9xl font-bold font-outline-4">
                Welcome!
              </h1>{" "}
              <p className="font-outline-2"> Discover exclusive deals today!</p>
            </div>
            <div className="grid grid-cols-3 gap-5 mt-8 justify-center items-center">
              <div className="w-40 h-50 bg-white rounded-md border-2 border-orange-500 p-5 text-center shadow-lg">
                <h2 className="text-2xl font-bold text-orange-500">
                   <CountUp start={0} end={98} duration={6} />%
                </h2>
                <h1 className="font-medium text-xl">Customer Satisfaction</h1>
              </div>
              <div className="w-40 h-50 bg-white rounded-md border-2 border-orange-500 p-5 text-center">
                <h2 className="text-2xl font-bold text-orange-500">
                  + <CountUp start={0} end={30} duration={8} />
                </h2>
                <h1 className="font-medium text-xl">
                  {" "}
                  Shipping to countries worldwide
                </h1>
              </div>
              <div className="w-40 h-50 bg-white rounded-md border-2 border-orange-500 p-5 text-center">
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
