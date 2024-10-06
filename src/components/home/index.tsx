import { useState } from "react";
import salondesk1 from "../../assets/desk1.jpg";
import salondesk2 from "../../assets/desk2.jpeg";
import salondesk3 from "../../assets/desk3.png";
import salondesk4 from "../../assets/desk4.jpeg";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const ImageCollection = [
  {
    label: "salondesk1",
    imgPath: salondesk1,
  },
  {
    label: "salondesk2",
    imgPath: salondesk2,
  },
  {
    label: "salondesk3",
    imgPath: salondesk3,
  },
  {
    label: "salondesk4",
    imgPath: salondesk4,
  },
];
const Home = () => {
  const [index, setActiveImage] = useState(0);
  

  const nextPicture = () => {
    setActiveImage((currentIndex) => currentIndex + 1);
  };

  const prevPicture = () => {
    setActiveImage((currentIndex) => currentIndex - 1);
  };

  return (
    <>
      <div className="flex flex-col mx-auto w-fit justify-center items-center">
        <div className="">
          <img
            className="w-screen h-[550px] object-fill  "
            src={ImageCollection[index].imgPath}
            alt={ImageCollection[index].label}
          />
        </div>

        <div className="absolute top-[30%]  text-4xl text-center text-white mb-5">
          <h1 className="text-2xl text-black italic ">WOODEAN</h1>
          <h1 className="font-bold text-white stroke-white text-5xl bg-black/55 text-black rounded-md p-5">
            Here Your Total Comfort
          </h1>
        </div>

        <button className="absolute text-blue-600 bg-white/75 px-4 py-2 mt-8 rounded-md font-bold text-xl">
          <Link to="/store">SHOP NOW</Link>
        </button>

      </div>
        <div className="flex mx-auto w-[450px] justify-between items-center">
          <FaArrowLeft
            onClick={prevPicture}
            size={25}
            className="cursor-pointer"
          />
          <FaArrowRight
            onClick={nextPicture}
            size={25}
            className="cursor-pointer"
          />
        </div>
    </>
  );
};

export default Home;
