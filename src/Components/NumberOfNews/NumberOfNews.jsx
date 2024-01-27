import config from "@/shared/config";
import './NumberOfNews.css';

const NumberOfNews = ({number, onNumberChange}) => {

    return (
        <>
        <div className="number-news-container">
            <h4>Показывать записей: </h4>
          <select
            className="number-news-container__form-select"
            value={number}
            onChange={(e) => onNumberChange(e.target.value)}
          >
            {config.numberOfNews.map(
              (number) => (
                <option key={number} value={number}>
                  {number}
                </option>
              )
            )}
          </select>
        </div>
        </>
    )
}

export default NumberOfNews;