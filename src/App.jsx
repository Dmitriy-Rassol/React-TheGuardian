import "@/App.css";
import NewsList from "./Components/NewsList/NewsList";

function App() {
  return (
    <>
      <div className="container">
        <h1 className="header-title">
          The Guardian News App
        </h1>
      </div>
      <NewsList />
    </>
  );
}

export default App;
