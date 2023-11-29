import data from "./data";
import { useState } from "react";
import List from "./List";

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays Today</h3>
        <List people={people} />
        <button
          type="button"
          className="btn btn-block"
          onClick={() => setPeople([])}
        >
          Clear All
        </button>
      </section>
    </main>
  );
};
export default App;
