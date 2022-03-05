import {
  getSeries,
  increasePageNumber,
} from "../../redux/actions/series.actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Loading from "../Loading/Loading.component";
import SeriesItem from "./SeriesItem.component";
import "./series.styles.css";

const SeriesList = () => {
  const dispatch = useDispatch();

  const { seriesData, isPending, pageNumber, ...rest } = useSelector(
    (state) => state.seriesReducer
  );

  useEffect(() => {
    dispatch(getSeries(pageNumber));
  }, [pageNumber]);
  return (
    <div>
      {isPending ? (
        <Loading />
      ) : (
        <div className="main-wrapper">
          <div className="wrapper">
            {seriesData.map((item) => (
              <SeriesItem key={item.id} data={item} />
            ))}
          </div>

          <div className="button-wrapper">
            <button onClick={() => dispatch(increasePageNumber())}>
              Load More
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SeriesList;
