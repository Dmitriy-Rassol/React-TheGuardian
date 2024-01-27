import { useState, useEffect } from "react";
import guardianApi from "@/api";
import config from "@/shared/config";
import "./NewsList.css";
import SearchInput from "../SearchInput/SearchInput";
import Pagination from "../Pagination/Pagination";
import NumberOfNews from "../NumberOfNews/NumberOfNews";

const NewsList = () => {
  const [topic, setTopic] = useState("");
  const [category, setCategory] = useState("");
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [errorContent, setErrorContent] = useState(false);
  const [number, setNumber] = useState(10);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    fetchNews();
  }, [category, number, currentPage]);

  const fetchNews = async () => {
    setLoader(true);
    setNews([]);
    try {
      const response = await guardianApi.get("search", {
        params: {
          q: topic !== "" ? topic : null,
          page: currentPage,
          section: category !== "" ? category : null,
          "page-size": number,
        },
      });

      const res = response.data.response;
      setNews(res.results);
      setTotalPages(res.pages);
      if (res.results.length) {
        setErrorContent(false);
      } else {
        setErrorContent(true);
      }
    } catch (error) {
      console.error("Ошибка при поиске новостей:", error);
    }
    setLoader(false);
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const setFormatDate = (date) => {
    return new Date(date).toLocaleDateString("ru-RU", config.options);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      fetchNews();
    }
  };

  return (
    <div>
      <div>
        <SearchInput
          topic={topic}
          category={category}
          onTopicChange={setTopic}
          onCategoryChange={setCategory}
          onSearch={() => {
            fetchNews();
            handlePageChange(1);
          }}
          onKeyDown={handleKeyDown}
        />
      </div>
      <ul className="news-content news-list container">
        {news.map((article) => (
          <li className="news-item" key={article.id}>
            <h3 className="news-item__title">{article.webTitle}</h3>
            <div className="news-item__desc">
              <p>{setFormatDate(article.webPublicationDate)}</p>
              <p>{article.sectionName}</p>
            </div>
            <a
              className="news-item__link"
              href={article.webUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Подробнее...
            </a>
          </li>
        ))}
      </ul>
      {loader && (
        <div className="loader-container">
          <span className="loader"></span>
        </div>
      )}
      {errorContent ? (
        <div className="error-message container">
          <p>Не удалось найти записи</p>
        </div>
      ) : (
        <div className="container footer-navigation">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
          <NumberOfNews number={number} onNumberChange={setNumber} />
        </div>
      )}
    </div>
  );
};

export default NewsList;
