import React, { useState } from "react";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      quote: "This is the best product I've ever used!",
      author: "Jane Doe",
    },
    {
      quote: "I highly recommend this product to everyone!",
      author: "John Smith",
    },
    {
      quote: "This product has completely changed my life!",
      author: "Bob Johnson",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    console.log(testimonials.length);
    //setCurrentIndex((currentIndex + testimonials.length - 1) % testimonials.length);
  };

  const handleNext = () => {
    //if current index is the last item  , then current index modulo array length will loop back to zero
    // e.g 3 % 3 = 1 (remainder is 0)
    setCurrentIndex((nextIndex) =>
      nextIndex === testimonials.length - 1 ? 0 : nextIndex + 1
    );
  };
  return (
    <div>
      {/* card */}
      <div className="container flex justify-center items-center h-screen mx-auto">
        <div className="card min-h-48 p-4 bg-[#EAE1DF] rounded-md ">
          {/* testimonial message */}
          <div className="content flex flex-col  mt-5 justify-between items-center h-full">
            <p className="font-semibold mb-5 w-3/4 leading-4">
              {testimonials[currentIndex].quote}
            </p>
            <span className="author">-{testimonials[currentIndex].author}</span>
          </div>
          <div className="buttons flex flex-row justify-evenly mt-5">
            <button
              onClick={handlePrev}
              className="prev text-white bg-[#917C78] px-7 py-2 rounded-sm"
            >
              Prev
            </button>
            <button
              onClick={handleNext}
              className="next text-white bg-[#B79492] px-7 py-2 rounded-sm"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
