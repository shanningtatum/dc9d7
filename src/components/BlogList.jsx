import BlogPost from "./BlogPost";
import Pagination from "./Pagination";
import React, {useState} from "react";
import blogs from "../data/blogs.json";

const PAGE_SIZES = [15, 25, 50, 100];

function BlogList() {

  // state that stores current page index
  const [currentPage, setCurrentPage] = useState(1);

  // state that stores number of blogs to show per page
  const [selectedPageSize, setSelectedPageSize] = useState(15);
  const [sliceAmount, setSliceAmount] = useState(15);
  const [sliceIndex, setSliceIndex] = useState(0);
  
  // updates row per page based on user selection
  const updateRowsPerPage = (userPageSize) => {
    const setUserPage = parseInt(userPageSize);
    setSelectedPageSize(setUserPage)
  };
  // updates current page when user clicks onNext or onPrevious
  const updatePage = (currentPage) => {
    console.log('we are on page', currentPage);
    setCurrentPage(currentPage);

    setSliceAmount(selectedPageSize*currentPage);
    setSliceIndex((selectedPageSize*currentPage) - selectedPageSize);
  };

  // need a way to store previous page selected to update slice range
  const currentPaginationData = blogs.posts.slice(sliceIndex , sliceAmount);

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        totalCount={blogs.posts.length}
        pageSize={selectedPageSize}
        pageSizeOptions={PAGE_SIZES}
        onPageChange={updatePage}
        onPageSizeOptionChange={updateRowsPerPage}
      />
      <ul
        // Do not remove the aria-label below, it is used for Hatchways automation.
        aria-label="blog list"
      >
        {currentPaginationData.map((blog) => (
          <BlogPost
            key={blog.id}
            author={blog.author}
            title={blog.title}
            excerpt={blog.excerpt}
            featureImage={blog.image}
          />
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
