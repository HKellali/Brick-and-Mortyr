import { Link } from "react-router-dom";
import "./Pagination.scss";

interface Props {
  pages: string;
}

/* Add a fixed number of pages */
const Pagination = (props: Props) => {
  const queryParameters = new URLSearchParams(window.location.search);
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

  /* Add extra fields*/
  const createLink = (page = 1, name: string) => {
    let link = "/?page=" + page;
    link += name ? "&name=" + name : "";

    return link;
  };

  const getPagesLinksNumbers = () => {
    let pagesLinksNumbers: number[] = [];
    if (currentPage > 1) {
      pagesLinksNumbers.push(currentPage - 1);
    }

    if (currentPage < pages - 1) {
      pagesLinksNumbers.push(currentPage + 1);
    }
    pagesLinksNumbers.push(currentPage);
    pagesLinksNumbers = [1, ...pagesLinksNumbers, pages];
    pagesLinksNumbers = [...new Set(pagesLinksNumbers)].sort(compareNumbers);

    return pagesLinksNumbers;
  };

  const getPagesLinks = () => {
    const pagesLinksNumbers = getPagesLinksNumbers();

    let pagesLinks = [
      <Link to={createLink(changePage(-1), name)} key="0">
        &laquo;
      </Link>,
    ];
    pagesLinksNumbers.forEach((value, i) => {
      pagesLinks.push(
        <Link
          className={currentPage === value ? "active" : ""}
          to={createLink(value, name)}
          key={value}
        >
          {value}
        </Link>
      );
      if (
        pagesLinksNumbers[i + 1] - value !== 1 &&
        i < pagesLinksNumbers.length - 1
      ) {
        pagesLinks.push(<span>...</span>);
      }
    });
    pagesLinks.push(
      <Link to={createLink(changePage(1), name)} key={pages + 1}>
        &raquo;
      </Link>
    );

    return [pagesLinks];
  };

  return (
    <div className="center">
      {/* Solve issue with unique keys */}
      <div className="pagination">{getPagesLinks()}</div>
    </div>
  );
};

export default Pagination;

const compareNumbers = (a: number, b: number) => {
  return a - b;
};
