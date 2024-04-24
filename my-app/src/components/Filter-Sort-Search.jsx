export default function FilterSortAndSearch() {
  const weddingFilter = ["standard", "national", "international"];

  return (
    <>
      <div className="navbar-end join flex justify-end mr-5">
        <div>
          <div>
            <input
              type="text"
              className="input input-bordered join-item"
              placeholder="Search"
            />
          </div>
        </div>
        <select defaultValue={""} className="select select-bordered join-item">
          <option disabled value={""}>
           -- Filter --
          </option>
          {weddingFilter.map((el, index) => (
            <option key={index} value={el}>
              {el}
            </option>
          ))}
        </select>
        <select defaultValue={""} className="select select-bordered join-item">
          <option disabled value={""}>
           -- Sort --
          </option>
          <option>latest</option>
          <option>oldest</option>
        </select>
      </div>
    </>
  );
}
