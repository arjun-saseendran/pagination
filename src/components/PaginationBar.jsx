import React from "react";

export const PaginationBar = ({
  noOfPage,
  setCurrentPage,
  currentPage,
  start,
  end,
  totalProducts,
}) => {
  const handlePageChange = (n) => {
    setCurrentPage(n);
  };

  return (
    <div className="flex gap-4 w-96 mt-10 mx-auto">
      <button
        disabled={currentPage === start}
        className={`px-4 py-2 text-white rounded-lg ${currentPage === start ? "bg-gray-600" : "bg-blue-600"}`}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Previous
      </button>
      {[...Array(noOfPage).keys()].map((n) => (
        <span
          onClick={() => handlePageChange(n)}
          className={`border  rounded-lg p-2 cursor-pointer ${currentPage === n ? "bg-blue-600 text-white" : ""}`}
          key={n}
        >
          {n}
        </span>
      ))}
      <button
        disabled={end >= totalProducts - noOfPage}
        onClick={() => setCurrentPage(currentPage + 1)}
        className={` text-white px-4 py-2 rounded-lg ${end >= totalProducts - noOfPage ? "bg-gray-600" : "bg-blue-600"}`}
      >
        Next
      </button>
    </div>
  );
};
