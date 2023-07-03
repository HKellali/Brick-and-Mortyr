import { Link } from "react-router-dom";
import "./Pagination.scss";

const Pagination = () => {
  const queryParameters = new URLSearchParams(window.location.search);
  const currentPage = queryParameters.get("page")
    ? queryParameters.get("page")
    : "1";
  const lastPage = 4;

  function changePage(value: number) {
    const previousPage = parseInt(currentPage);
    const nextPage = previousPage + value;
    if (nextPage === 0) {
      return "1";
    } else if (nextPage === lastPage + 1) {
      return lastPage.toString();
    }
    return nextPage.toString();
  }

  const getAnimalsContent = () => {
    let content = [];
    for (let i = 1; i < lastPage + 1; i++) {
      content.push(
        <Link to={"/?page=" + i} key={i}>
          {i}
        </Link>
      );
    }
    return content;
  };

  return (
    <div className="center">
      <div className="pagination">
        <Link to={"/?page=" + changePage(-1)}>&laquo;</Link>
        {getAnimalsContent()}
        <Link to={"/?page=" + changePage(1)}>&raquo;</Link>
      </div>
    </div>
  );
};

export default Pagination;
