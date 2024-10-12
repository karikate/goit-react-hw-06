import { useDispatch } from "react-redux";
import s from "./SearchBox.module.css";
import { filterContact } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <label className={s.label}>
        <span>Find contacts by name</span>
        <input
          type="text"
          onChange={(e) => dispatch(filterContact(e.target.value))}
        />
      </label>
    </div>
  );
};

export default SearchBox;
