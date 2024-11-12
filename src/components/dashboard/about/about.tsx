import { Button, Rate, Skeleton } from "antd";
import customerRevImg from "../../../assets/CustomerRevImg.webp";
import customerImage from "../../../assets/profilePic.png";
import customer2 from "../../../assets/customer2.webp";
import customer3 from "../../../assets/customer3.webp";
import womenImg from "../../../assets/womenImg.webp";
import {
  FaAngleDown,
  FaAngleLeft,
  FaAngleRight,
  FaAngleUp,
} from "react-icons/fa";
import { useState } from "react";

const About = () => {
  const [activeCardSlide, setActiveCardSlide] = useState(0);
  const [timerSkeleton, setTimerSkeleton] = useState(false);

  const handleTimer = (verify: boolean) => {
    setTimerSkeleton(verify);

    setTimeout(() => {
      setTimerSkeleton(!verify);
    }, 500);
  };

  const costumerReviewsdata = [
    {
      name: "John Doe",
      image: customerImage,
      spent: "$200",
      review:
        "The shopping experience was seamless from start to finish. The product quality exceeded my expectations and delivery was prompt. The customer service team went above and beyond to assist me with my questions. I am very satisfied and will recommend this store to others!",
      rating: 4,
    },
    {
      name: "William Albert",
      image: customer2,
      spent: "$140",
      review:
        "This is my go-to store for finding exclusive deals. I’ve purchased several items, and every time, the process has been seamless. The products are fantastic, and the variety is great. Highly recommend!",
      rating: 3,
    },
    {
      name: "fernando hernandez",
      image: customer3,
      spent: "$340",
      review:
        "I've been shopping at this store for a while now and I must say, the experience has been consistently excellent. The products are always as described and the shipping is super fast. The customer service is also top notch. I've already recommended this store to all my friends and family.",
      rating: 5,
    },
    {
      name: "Anya johans",
      image: womenImg,
      spent: "$1210",
      review:
        "I am beyond impressed with the quality of the products and the speedy delivery! Everything was just as described, and the customer service team was extremely helpful with my inquiries. I’ll definitely be shopping here again!",
      rating: 4.5,
    },
    {
      name: "Alex Carter",
      image: customerImage,
      spent: "$50",
      review:
        "I was hesitant to order online, but this store exceeded my expectations! The items I bought arrived quickly, and they are exactly what I wanted. I’m very satisfied with my purchase and will be recommending this shop to my friends.",
      rating: 2,
    },
    {
      name: "Jamie Brooks",
      image: customer2,
      spent: "$632",
      review:
        "I was blown away by the variety of products available on the website. The prices are unbeatable, and the products are top-notch. I've already recommended this store to my friends and family. Keep up the great work!",
      rating: 5,
    },
  ];

  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      <div
        className="w-full h-[40vh] md:h-full flex flex-col bg-cover bg-center justify-center items-center text-center rounded-md"
        style={{ backgroundImage: `url(${customerRevImg})` }}
      >
        <div className="w-full h-full flex justify-center items-center bg-black/40">
          <div className="flex flex-col bg-white/90 space-y-2 w-fit text-2xl uppercase p-4 rounded-md opacity-80">
            <h1 className="font-semibold text-3xl"> Customers review </h1>
            <span className="font-bold text-5xl">4.6k+</span>
          </div>
        </div>
      </div>

      {/* Small size  */}

      <div className="flex md:hidden justify-center items-center w-full h-[40vh] md:h-fit border-2 border-gray-300 rounded-md bg-orange-100">
        <Button disabled={activeCardSlide === 0} variant="link" color="default">
          <FaAngleLeft
            size={25}
            onClick={() => {
              setActiveCardSlide(
                (prevActiveCardSlide) => prevActiveCardSlide - 1
              ),
                handleTimer(true);
            }}
          />
        </Button>

        <div
          className="w-full h-fit flex flex-col p-2 px-4 rounded-lg space-y-4 bg-gray-100 border-2 border-gray-100 hover:bg-orange-400 cursor-pointer shadow-md hover:text-white"
          // key={costumerReviewsdata[activeCardSlide]}
        >
          {timerSkeleton ? (
            <div className="w-full h-full justify-end place-items-end">
              <Skeleton active />
              <Skeleton.Avatar active size="large" shape="circle" />
            </div>
          ) : (
            <div>
              <div className="text-start">
                "{costumerReviewsdata[activeCardSlide].review}"
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="w-fit h-fit">
                  <Rate
                    disabled
                    value={costumerReviewsdata[activeCardSlide].rating}
                  />
                </div>
                <div className="flex space-x-4 justify-end w-fit items-end ">
                  <div className="flex flex-col  ">
                    <h1 className="text-gray-500 font-bold">
                      {costumerReviewsdata[activeCardSlide].name}
                    </h1>
                    <h2 className="text-gray-600 text-sm">
                      Total Spent :{" "}
                      <span className="font-bold">
                        {" "}
                        {costumerReviewsdata[activeCardSlide].spent}{" "}
                      </span>
                    </h2>
                  </div>
                  <img
                    src={costumerReviewsdata[activeCardSlide].image}
                    alt="customer image"
                    className="w-10 h-10"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <Button
          disabled={activeCardSlide === costumerReviewsdata.length - 1}
          variant="link"
          color="default"
        >
          <FaAngleRight
            size={25}
            onClick={() => {
              setActiveCardSlide(
                (prevActiveCardSlide) => prevActiveCardSlide + 1
              ),
                handleTimer(true);
            }}
          />
        </Button>
      </div>

      {/* medim & large size  */}
      <div className="hidden md:flex justify-center items-center w-full shadow-inner md:h-[80vh] rounded-md bg-orange-100/45 space-y-3 overflow-hidden">
        <Button disabled={activeCardSlide === 0} variant="link" color="default">
          <FaAngleUp
            size={25}
            onClick={() => {
              setActiveCardSlide(
                (prevActiveCardSlide) => prevActiveCardSlide - 1
              ),
                handleTimer(true);
            }}
          />
        </Button>

        <div className="flex flex-col">
          {/* the First element */}
          {activeCardSlide > 0 ? (
            <div
              className="w-full opacity-30 translate-y-4 -z-10 h-fit flex flex-col p-4 px-4 rounded-lg space-y-4 bg-gray-100 border-2 border-gray-100"
              // key={costumerReviewsdata[activeCardSlide]}
            >
              <div>
                <div className="text-start">
                  "{costumerReviewsdata[activeCardSlide-1].review}"
                </div>
                <div className=" flex w-full h-full justify-between items-center mt-4">
                  <div className="w-fit h-full">
                    <Rate
                      disabled
                      value={costumerReviewsdata[activeCardSlide-1].rating}
                    />
                  </div>
                  <div className="flex space-x-4 justify-end w-fit items-end">
                    <div className="flex flex-col  ">
                      <h1 className="text-gray-500 font-bold">
                        {costumerReviewsdata[activeCardSlide-1].name}
                      </h1>
                      <h2 className="text-gray-600 text-sm">
                        Total Spent :{" "}
                        <span className="font-bold">
                          {" "}
                          {costumerReviewsdata[activeCardSlide-1].spent}{" "}
                        </span>
                      </h2>
                    </div>
                    <img
                      src={costumerReviewsdata[activeCardSlide-1].image}
                      alt="customer image"
                      className="w-10 h-10"
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full h-full justify-end place-items-end">
              <Skeleton />
              <Skeleton.Avatar size="large" shape="circle" />
            </div>
          )}

          {/* the medium  element*/}
          <div
            className="w-full h-fit flex flex-col p-4 px-4 rounded-lg space-y-4 bg-gray-100 border-2 border-gray-100 hover:bg-orange-400 cursor-pointer shadow-md hover:text-white"
            // key={costumerReviewsdata[activeCardSlide]}
          >
            {timerSkeleton ? (
              <div className="w-full h-full justify-end place-items-end">
                <Skeleton active />
                <Skeleton.Avatar active size="large" shape="circle" />
              </div>
            ) : (
              <div>
                <div className="text-start">
                  "{costumerReviewsdata[activeCardSlide].review}"
                </div>
                <div className=" flex w-full h-full justify-between items-center mt-4">
                  <div className="w-fit h-full">
                    <Rate
                      disabled
                      value={costumerReviewsdata[activeCardSlide].rating}
                    />
                  </div>
                  <div className="flex space-x-4 justify-end w-fit items-end">
                    <div className="flex flex-col  ">
                      <h1 className="text-gray-500 font-bold">
                        {costumerReviewsdata[activeCardSlide].name}
                      </h1>
                      <h2 className="text-gray-600 text-sm">
                        Total Spent :{" "}
                        <span className="font-bold">
                          {" "}
                          {costumerReviewsdata[activeCardSlide].spent}{" "}
                        </span>
                      </h2>
                    </div>
                    <img
                      src={costumerReviewsdata[activeCardSlide].image}
                      alt="customer image"
                      className="w-10 h-10"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* the last element */}
          {!(activeCardSlide === costumerReviewsdata.length - 1) ? (
            <div
              className="w-full opacity-30  -translate-y-4 h-fit flex flex-col p-4 px-4 rounded-lg space-y-4 bg-gray-100 border-2 border-gray-100 -z-10"
              // key={costumerReviewsdata[activeCardSlide]}
            >
              <div>
                <div className="text-start">
                  "{costumerReviewsdata[activeCardSlide+1].review}"
                </div>
                <div className=" flex w-full h-full justify-between items-center mt-4">
                  <div className="w-fit h-full">
                    <Rate
                      disabled
                      value={costumerReviewsdata[activeCardSlide+1].rating}
                    />
                  </div>
                  <div className="flex space-x-4 justify-end w-fit items-end">
                    <div className="flex flex-col  ">
                      <h1 className="text-gray-500 font-bold">
                        {costumerReviewsdata[activeCardSlide+1].name}
                      </h1>
                      <h2 className="text-gray-600 text-sm">
                        Total Spent :{" "}
                        <span className="font-bold">
                          {" "}
                          {costumerReviewsdata[activeCardSlide+1].spent}{" "}
                        </span>
                      </h2>
                    </div>
                    <img
                      src={costumerReviewsdata[activeCardSlide+1].image}
                      alt="customer image"
                      className="w-10 h-10"
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full h-full justify-end place-items-end">
              <Skeleton />
              <Skeleton.Avatar size="large" shape="circle" />
            </div>
          )}
        </div>

        <Button
          disabled={activeCardSlide === costumerReviewsdata.length - 1}
          variant="link"
          color="default"
        >
          <FaAngleDown
            size={25}
            onClick={() => {
              setActiveCardSlide(
                (prevActiveCardSlide) => prevActiveCardSlide + 1
              ),
                handleTimer(true);
            }}
          />
        </Button>
      </div>
    </div>
  );
};

export default About;
