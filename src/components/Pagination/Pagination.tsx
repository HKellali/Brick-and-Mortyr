import React from "react";
import { Link, useLocation } from "react-router-dom";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import "./Pagination.scss";

interface Props {
  pages: string;
}

/* Add extra fields*/
const createLink = (page = 1, name: string) => {
  let link = "/?page=" + page;
  link += name ? "&name=" + name : "";

  return link;
};

/* Add a fixed number of pages */
const Pagination = (props: Props) => {
  const location = useLocation();
  const queryParameters = new URLSearchParams(location.search);
  const currentPage = parseInt(queryParameters.get("page")!, 10) || 1;
  const name = queryParameters.get("name")!;
  const pages = parseInt(props.pages, 10);

  const changePage = (value: number) => {
    const nextPage = currentPage + value;
    if (nextPage === 0) {
      return 1;
    } else if (nextPage === pages + 1) {
      return pages;
    }
    return nextPage;
  };

  let pagesLinksNumbers: number[] = [1, pages];
  if (currentPage > 1) {
    pagesLinksNumbers.push(currentPage - 1);
  }

  if (currentPage < pages - 1) {
    pagesLinksNumbers.push(currentPage + 1);
  }
  pagesLinksNumbers.push(currentPage);
  pagesLinksNumbers = [...new Set(pagesLinksNumbers)].sort(compareNumbers);

  const unclickable = (page: number) => {
    if (currentPage === page) return "unclickable";
  };

  return (
    <div className="pagination">
      <Link to={createLink(1, name)} className={unclickable(1)} key="link0">
        &laquo;
      </Link>
      <Link
        to={createLink(changePage(-1), name)}
        className={unclickable(changePage(-1))}
        key="link1"
      >
        <ArrowLeftIcon />
      </Link>
      {pagesLinksNumbers.map((number, index) => (
        <React.Fragment key={"wrapper-span" + number}>
          <Link
            className={currentPage === number ? "active unclickable" : ""}
            to={createLink(number, name)}
            key={"link" + number + 1}
          >
            {number}
          </Link>
          {pagesLinksNumbers[index] + 1 < pagesLinksNumbers[index + 1] && (
            <Link
              to={createLink(currentPage, name)}
              className="ellipsis"
              key={"ellipsis" + number}
            >
              ...
            </Link>
          )}
        </React.Fragment>
      ))}
      <Link
        to={createLink(changePage(1), name)}
        className={unclickable(changePage(1))}
        key={"link" + pages + 2}
      >
        <ArrowRightIcon />
      </Link>
      <Link
        to={createLink(pages, name)}
        className={unclickable(pages)}
        key={"link" + pages + 3}
      >
        &raquo;
      </Link>
    </div>
  );
};

export default Pagination;

const compareNumbers = (a: number, b: number) => {
  return a - b;
};
