import { Link } from "react-router-dom";
import "./Pagination.scss";

interface Props {
  pages: string;
}

/* I would like to have a fixed number of pages in the future */

const Pagination = (props: Props) => {
  const queryParameters = new URLSearchParams(window.location.search);
  const currentPage = parseInt(queryParameters.get("page")!) || 1;
  const name = queryParameters.get("name")!;
  const pages = parseInt(props.pages);

  function changePage(value: number) {
    const previousPage = currentPage;
    const nextPage = previousPage + value;
    if (nextPage === 0) {
      return "1";
    } else if (nextPage === pages + 1) {
      return pages.toString();
    }
    return nextPage.toString();
  }

  function getLink(name: string, page = "1") {
    let link = "/?page=" + page;
    link += name ? "&name=" + name : "";

    return link;
  }

  function compareNumbers(a: number, b: number) {
    return a - b;
  }

  function getPagesLinksNumbers() {
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
  }

  const getPagesLinks = () => {
    const pagesLinksNumbers = getPagesLinksNumbers();

    let pagesLinks = [<Link to={getLink(name, changePage(-1))}>&laquo;</Link>];
    pagesLinksNumbers.forEach(function (value, i) {
      pagesLinks.push(
        <Link
          className={currentPage === value ? "active" : ""}
          to={getLink(name, value.toString())}
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
    pagesLinks.push(<Link to={getLink(name, changePage(1))}>&raquo;</Link>);

    return pagesLinks;
  };

  return (
    <div className="center">
      <div className="pagination">{getPagesLinks()}</div>
    </div>
  );
};

export default Pagination;
