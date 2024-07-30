import { SearchIcon } from "./Icons";

type PolicySearchProps = {
  cb: (search: string) => void;
};

export function PolicySearch({ cb }: PolicySearchProps) {
  return (
    <div className="search">
      <label htmlFor="search-input-unique-id">Search policies</label>
      <div className="search__input">
        <div className="search__input__icon">
          <SearchIcon />
        </div>
        <input
          id="search-input-unique-id"
          placeholder="e.g. AB12 CDE"
          type="text"
          onChange={(e) => {
            cb(e.target.value);
          }}
        />
      </div>
    </div>
  );
}
