import "./Pagination.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination">
      <button disabled={currentPage<2} onClick={() => onPageChange(currentPage - 1)}>Назад</button>
      <span>
        {" "}
        {currentPage} из {totalPages}{" "}
      </span>
      <button disabled={currentPage == totalPages} onClick={() => onPageChange(currentPage + 1)}>Вперед</button>
    </div>
  );
};

export default Pagination;
