"use client";
import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { Button } from "components/ui/button";
function AddInterviewDetails() {
  const [showModal, setShowModal] = useState(false);
  const [showPosition, setShowPosition] = useState("");
  const [showExperience, setShowExperience] = useState("");
  const [showDescription, setShowDescription] = useState("");

  const modalHandler = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    if (!showModal) {
      setShowPosition(" ");
      setShowDescription(" ");
      setShowExperience(" ");
    }
  }, [showModal]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(showDescription, showExperience, showPosition);
  };

  return (
    <div>
      <button
        onClick={modalHandler}
        className="w-[200px] h-[90px] bg-white border-red-400 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center gap-2 border "
      >
        <span className="text-sm text-gray-600">+ Add Item</span>
      </button>
      {showModal && (
        <div
          onClick={() => setShowModal(false)} //div outside click close
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div
            onClick={(e) => e.stopPropagation()} //stops the inside close
            className=" relative bg-white p-6 rounded-xl shadow-lg w-full max-w-lg"
          >
            <span
              className="cursor-pointer absolute right-4 top-4 "
              onClick={() => setShowModal(false)}
            >
              <IoClose size={30} />
            </span>
            <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
              Job Details
            </h2>

            <form onSubmit={onSubmitHandler} className="space-y-4">
              {/* Job Title */}
              <div>
                <label className="block  text-gray-600 text-sm font-medium mb-1">
                  Job Title
                </label>
                <input
                  value={showPosition}
                  type="text"
                  placeholder="Enter job title"
                  className="w-full  px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                  onChange={(e) => setShowPosition(e.target.value)}
                />
              </div>

              {/* Years of Experience */}
              <div>
                <label className="block text-gray-600 text-sm font-medium mb-1">
                  Years of Experience
                </label>
                <select
                  required
                  // value={showExperience}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  onChange={(e) => setShowExperience(e.target.value)}
                >
                  <option value="">Select experience</option>
                  <option value="0-1">0-1 Year</option>
                  <option value="1-3">1-3 Years</option>
                  <option value="3-5">3-5 Years</option>
                  <option value="5+">5+ Years</option>
                </select>
              </div>

              {/* Description */}
              <div>
                <label className="block text-gray-600 text-sm font-medium mb-1">
                  Description
                </label>
                <textarea
                  placeholder="Describe the job role..."
                  rows="4"
                  value={showDescription}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
                  required
                  onChange={(e) => setShowDescription(e.target.value)}
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="gap-4 flex justify-end">
                <Button onClick={() => setShowModal(false)} variant="ghost">
                  cancle
                </Button>
                <button
                  type="submit"
                  className="w-16 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Start
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddInterviewDetails;
