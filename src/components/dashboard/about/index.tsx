import customerRevImg from "../../../assets/CustomerRevImg.jpg";
import customerImage from "../../../assets/profilePic.png"

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

      <div className="flex flex-col w-full h-full border-2 border-gray-400 rounded-md space-y-3">
        <div className="w-full h-fit flex flex-col p-5 rounded-lg space-y-4 bg-orange-50">
        <div className="text-start">
        "I am beyond impressed with the quality of the products and the speedy delivery! Everything was just as described, and the customer service team was extremely helpful with my inquiries. I’ll definitely be shopping here again!"
        </div>
        <div className="flex justify-start items-center space-x-4">
          <img src={customerImage} alt="customer image" className="w-10 h-10" />
          <div className="flex flex-col">
            <h1>Emily R.</h1>
            <h2>Customer Title</h2>
          </div>
        </div>
        </div>

        <div className="w-full h-fit flex flex-col p-5 rounded-lg space-y-4 bg-orange-50">
        <div className="text-start">
        "This is my go-to store for finding exclusive deals. I’ve purchased several items, and every time, the process has been seamless. The products are fantastic, and the variety is great. Highly recommend!"
        </div>
        <div className="flex justify-start items-center space-x-4">
          <img src={customerImage} alt="customer image" className="w-10 h-10" />
          <div className="flex flex-col">
            <h1>James D.</h1>
            <h2>Customer Title</h2>
          </div>
        </div>
        </div>

        <div className="w-full h-fit flex flex-col p-5 rounded-lg space-y-4 bg-orange-50">
        <div className="text-start">
        "I was hesitant to order online, but this store exceeded my expectations! The items I bought arrived quickly, and they are exactly what I wanted. I’m very satisfied with my purchase and will be recommending this shop to my friends."
        </div>
        <div className="flex justify-start items-center space-x-4">
          <img src={customerImage} alt="customer image" className="w-10 h-10" />
          <div className="flex flex-col">
            <h1>Sofia M.</h1>
            <h2>Customer Title</h2>
          </div>
        </div>
        </div>
      </div>

      <div  className="w-full col-span-2 h-fit border-2 border-gray-400">invitation for try the store</div>
    </div>
  );
};

export default About;
