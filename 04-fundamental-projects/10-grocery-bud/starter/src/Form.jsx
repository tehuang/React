import { useState } from "react";
import { toast } from "react-toastify";
const Form = ({ addItem }) => {
  const [newItemName, setNewItemName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(newItemName);

    if (!newItemName) {
      toast.error("Please provide value");
      return;
    }
    addItem(newItemName);
    setNewItemName("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery bud</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
        />
        <button type="submit" className="btn">
          Add Item
        </button>
      </div>
    </form>
  );
};
export default Form;
