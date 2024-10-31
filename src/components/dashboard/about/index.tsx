import { Rate } from "antd";
import customerRevImg from "../../../assets/CustomerRevImg.jpg";
import customerImage from "../../../assets/profilePic.png"
import customer2 from "../../../assets/customer2.jpg"
import customer3 from "../../../assets/customer3.jpg"
import womenImg from "../../../assets/womenImg.jpg"

const About = () => {

  const costumerReviewsdata = [
    {
      name: "John Doe",
      image: customerImage,
      spent: "$200",
      review: "I am beyond impressed with the quality of the products and the speedy delivery! Everything was just as described, and the customer service team was extremely helpful with my inquiries. I’ll definitely be shopping here again!",
      rating: 4
    },
    {
      name: "William Albert",
      image: customer2,
      spent: "$140",
      review: "This is my go-to store for finding exclusive deals. I’ve purchased several items, and every time, the process has been seamless. The products are fantastic, and the variety is great. Highly recommend!",
      rating: 3
    },
    {
      name: "fernando hernandez",
      image: customer3,
      spent: "$340",
      review: "I am beyond impressed with the quality of the products and the speedy delivery! Everything was just as described, and the customer service team was extremely helpful with my inquiries. I’ll definitely be shopping here again!",
      rating: 5
    },
    {
      name: "Anya johans",
      image: womenImg,
      spent: "$1210",
      review: "I am beyond impressed with the quality of the products and the speedy delivery! Everything was just as described, and the customer service team was extremely helpful with my inquiries. I’ll definitely be shopping here again!",
      rating: 4.5
    },
    {
      name: "Alex Carter",
      image: customerImage,
      spent: "$50",
      review: "I was hesitant to order online, but this store exceeded my expectations! The items I bought arrived quickly, and they are exactly what I wanted. I’m very satisfied with my purchase and will be recommending this shop to my friends.",
      rating: 2
    },
    {
      name: "Jamie Brooks",
      image: customer2,
      spent: "$632",
      review: "I am beyond impressed with the quality of the products and the speedy delivery! Everything was just as described, and the customer service team was extremely helpful with my inquiries. I’ll definitely be shopping here again!",
      rating: 5
    },
  ]
  
  return (
    <div className="w-full h-full grid grid-cols-2 gap-4 mt-6">
      <div
        className="w-full h-full flex flex-col bg-cover bg-center justify-center items-center text-center rounded-md"
        style={{ backgroundImage: `url(${customerRevImg})` }}
      >
        <div className="flex flex-col bg-white space-y-2 w-fit text-2xl uppercase p-4 rounded-md opacity-80">
         <h1 className="font-semibold text-3xl"> Customers review </h1>
          <span className="font-bold text-5xl">2.6k+</span>
        </div>

      </div>

      <div className="flex flex-col w-full h-[80vh] rounded-md space-y-3 overflow-y-scroll">
        {costumerReviewsdata.map((item, index) => (
          <div className="w-full h-fit flex flex-col p-5 rounded-lg space-y-4 bg-gray-100 border-2 border-gray-100 hover:bg-orange-400 duration-200 cursor-pointer hover:text-white" key={index}>
          <div className="text-start">
          "{item.review}"
          </div>
          <div className="flex justify-between items-center space-x-4">
          <Rate disabled value={item.rating} />
            <div className="flex space-x-4">
            <div className="flex flex-col items-end">
              <h1 className="text-gray-500">{item.name}</h1>
              <h2 className="text-gray-600">Total Spent : <span className="font-bold"> {item.spent} </span></h2>
            </div>
            <img src={item.image} alt="customer image" className="w-10 h-10" />
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
