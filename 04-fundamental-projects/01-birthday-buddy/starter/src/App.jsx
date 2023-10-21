import data from "./data";
import { useState } from "react";
import List from "./List";

const App = () => {
  const [people, setPeople] = useState(data);

  const handleClearAll = () => {
    setPeople([]);
  };
  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays Today</h3>
        <List people={people} />
        <button
          type="button"
          className="btn btn-block"
          onClick={handleClearAll}
        >
          Clear All
        </button>
      </section>
    </main>
  );
};
export default App;
