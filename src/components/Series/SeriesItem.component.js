import Image from "../Image/Image.component";
import { Link } from "react-router-dom";
const SeriesItem = ({ data = {} }) => {
  const { posterPath, name, id, ...rest } = data;
  return (
    <Link to={`/details/${id}`} className="item-unit">
      <Image url={posterPath} />
      <h2> {name} </h2>
    </Link>
  );
};

export default SeriesItem;
