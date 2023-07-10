import { Link, useLocation } from "react-router-dom";
import "./Pagination.scss";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import React from "react";

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
  const queryParameters = new URLSearchParams(useLocation().search);
  const currentPage = parseInt(queryParameters.get("page")!) || 1;
  const name = queryParameters.get("name")!;
  const pages = parseInt(props.pages);

  const changePage = (value: number) => {
    const nextPage = currentPage + value;
    if (nextPage === 0) {
      return 1;
    } else if (nextPage === pages + 1) {
      return pages;
    }
    return nextPage;
  };

  const getPagesLinksNumbers = () => {
    let pagesLinksNumbers: number[] = [1, pages];
    if (currentPage > 1) {
      pagesLinksNumbers.push(currentPage - 1);
    }

    if (currentPage < pages - 1) {
      pagesLinksNumbers.push(currentPage + 1);
    }
    pagesLinksNumbers.push(currentPage);
    pagesLinksNumbers = [...new Set(pagesLinksNumbers)].sort(compareNumbers);

    return pagesLinksNumbers;
  };

  const makeUnclickable = (page: number) => {
    if (currentPage === page) return "unclickable";
  };

  return (
    <div className="center">
      <div className="pagination">
        <Link
          to={createLink(1, name)}
          className={makeUnclickable(1)}
          key="link0"
        >
          &laquo;
        </Link>
        <Link
          to={createLink(changePage(-1), name)}
          className={makeUnclickable(changePage(-1))}
          key="link1"
        >
          <ArrowLeftIcon></ArrowLeftIcon>
        </Link>
        {getPagesLinksNumbers().map((number, index) => (
          <React.Fragment key={"wrapper-span" + number}>
            <Link
              className={currentPage === number ? "active unclickable" : ""}
              to={createLink(number, name)}
              key={"link" + number + 1}
            >
              {number}
            </Link>
            {getPagesLinksNumbers()[index] + 1 <
              getPagesLinksNumbers()[index + 1] && (
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
          className={makeUnclickable(changePage(1))}
          key={"link" + pages + 2}
        >
          <ArrowRightIcon></ArrowRightIcon>
        </Link>
        <Link
          to={createLink(pages, name)}
          className={makeUnclickable(pages)}
          key={"link" + pages + 3}
        >
          &raquo;
        </Link>
      </div>
    </div>
  );
};

export default Pagination;

const compareNumbers = (a: number, b: number) => {
  return a - b;
};
