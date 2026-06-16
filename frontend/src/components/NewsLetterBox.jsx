import React from "react";

function NewsLetterBox() {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscibe now & get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro fugit
        corporis voluptates consequatur eos fuga tempora voluptatibus explicabo
        rerum ipsa, architecto at eligendi nam et aliquam quibusdam perferendis
        quia dolorem.
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap=3 mx-auto my-6 border pl-3"
      >
        <input
          type="email"
          name="email"
          id=""
          placeholder="Enter Your email"
          className="w-full sm:flex=1 outline-none"
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
}

export default NewsLetterBox;
