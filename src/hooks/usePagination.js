export const DOTS = "...";

function usePagination(object) {
  const { currentPage, totalCount, pageSize } = object;
  const lowestPage = 1;
  const pageIncrement = 1;
  const rightSibling = currentPage + pageIncrement;
  const leftSibling = currentPage - pageIncrement;
  const maxPage = Math.ceil(totalCount / pageSize);
  const pageRange = [];
  const pageWithDots = [];
  let previousNumber;

  // if (currentPage === 1) {
  //   console.log(leftSibling, rightSibling);
  // } else {
  //   console.log(leftSibling, rightSibling);
  // }

  for (let i = 1; i <= maxPage; i++) {
    if (i == 1 || i == maxPage || (i >= leftSibling && i <= rightSibling)) {
      pageRange.push(i);
    }
  }

  for (let i of pageRange) {
    if (previousNumber) {
      if (i - currentPage !== 1) {
        pageWithDots.push("...");
      } else if (i - currentPage === 1) {
        pageWithDots.push(i + 1);
      }
    }
    pageWithDots.push(i);
    console.log(pageWithDots);
    previousNumber = i;
  }
  console.log(pageRange);

  // THREE scenarios
  // -- 1. (1), 2, 3 .. maxPageNumber
  // -- 2. 1 .. 2 (3) 4.. maxPageNumber
  // -- 3. 1 .. 11, 12, 13
  // determine lowest page number
  // determine highest page number
  // grab current page value
  // if min number, add current page value by 2
  // -- add dots after the second sibling
  // -- otherwise add current page value by 1 and subtract by 1
  // -- add dots before and after siblings
  // -- if this value returns the highest page number as a sibg, set the DOTS BEFORE the first number

  /*
    Rewrite the logic here to map out the pagination to be displayed

    !!!!!! ATTENTION !!!!!!
    Please replace this comment here with a description of this hook.
    
  */
  return [1, 2, 3, DOTS, maxPage];
}

export default usePagination;
