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

  for (let i = 1; i <= maxPage; i++) {
    if (i == 1 || i == maxPage || (i >= leftSibling && i <= rightSibling)) {
      pageRange.push(i);
    }
  }

  for (let i of pageRange) {
    if (previousNumber) {
      if (i - previousNumber !== 1) {
        pageWithDots.push("...");
      } else if (i - previousNumber === 2) {
        pageWithDots.push(i + 1);
      }
    }
    pageWithDots.push(i);
    previousNumber = i;
  }

  return pageWithDots;
}

export default usePagination;
