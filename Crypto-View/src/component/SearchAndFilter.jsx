const SearchAndFilter = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="card bg-base-200 shadow-lg mb-6">
      <div className="card-body">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <div className="form-control">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Search cryptocurrencies..."
                  className="input input-bordered w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchAndFilter;
