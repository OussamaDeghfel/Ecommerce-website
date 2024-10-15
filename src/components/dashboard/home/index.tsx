const Home = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex w-full h-[90vh] bg-Banner rounded-lg bg-black/50">
          <div className="flex w-full h-full bg-black/50 justify-start items-center rounded-md">
            <h1 className="text-5xl text-white px-12">
              <span className="text-orange-500 text-9xl font-bold">Welcome!</span> <br /> 
              Discover exclusive deals today!
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-5">
          <div className="w-24 h-50 bg-white rounded-md border-2 border-black">
            <h2>900</h2>
            <h1>Visit</h1>
          </div>
          <div className="w-24 h-50 bg-white rounded-md border-2 border-black">
            <h2>12540 $</h2>
            <h1>invest</h1>
          </div>
          <div className="w-24 h-50 bg-white rounded-md border-2 border-black">
            <h2>450</h2>
            <h1>Shipping</h1>
          </div>
          <div className="w-24 h-50 bg-white rounded-md border-2 border-black">
            <h2>900</h2>
            <h1>Visit</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
