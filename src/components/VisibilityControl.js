export const VisibilityControl = ({
  isChecked,
  setShowCompleted,
  cleanTask,
}) => {
  const handleDelete = () => {
    if (window.confirm("are you sure delete it?")) {
      cleanTask();
    }
  };

  return (
    <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          checked={isChecked}
          type="checkbox"
          onChange={(e) => setShowCompleted(e.target.checked)}
        />{" "}
        <label>task done</label>
      </div>

      <button onClick={handleDelete} className="btn btn-danger">
        clear
      </button>
    </div>
  );
};
