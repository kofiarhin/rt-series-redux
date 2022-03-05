import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../redux/actions/series.actions";
import Loading from "../components/Loading/Loading.component";
import Image from "../components/Image/Image.component";
import "./details.styles.css";

// Details
const Details = () => {
  const { details, isPending, ...rest } = useSelector(
    (state) => state.seriesReducer
  );

  const { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    console.log(id);
    dispatch(getDetails(id));
  }, []);
  return (
    <div className="details">
      {isPending ? (
        <Loading />
      ) : (
        <div>
          <Image url={details.backdropPath} />
          <h1> {details.name} </h1>
          <p> {details.overview} </p>
        </div>
      )}
    </div>
  );
};

export default Details;
