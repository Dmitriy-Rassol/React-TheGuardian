import "./SearchInput.css";
import config from "@/shared/config";

const SearchInput = ({
  topic,
  category,
  onTopicChange,
  onCategoryChange,
  onSearch
}) => {
  return (
    <div className="search-container">
      <form
        className="search-container__form"
        onSubmit={(e) => onSearch(e.preventDefault())}
      >
        <div>
          <select
            className="search-container__form-select"
            value={category}
            onChange={(e) => onCategoryChange(e.target.value)}
          >
            <option value="">Все категории</option>
            {Object.entries(config.categories).map(
              ([categoryId, categoryName]) => (
                <option key={categoryId} value={categoryId}>
                  {categoryName}
                </option>
              )
            )}
          </select>
        </div>
        <div className="search-container__form-search">
          <input
            className="search-container__form-input"
            type="text"
            value={topic}
            onChange={(e) => onTopicChange(e.target.value)}
          />
          <button className="search-container__form-button" type="submit">
            <svg
              aria-labelledby="title desc"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-10 0 40 17"
            >
              <title id="title">Search Icon</title>
              <desc id="desc">A magnifying glass icon.</desc>
              <g  fill="none" stroke="#ffffff">
                <path  d="M18.5 18.3l-5.4-5.4" />
                <circle cx="8" cy="8" r="7" />
              </g>
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchInput;
