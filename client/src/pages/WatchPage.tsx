import { useParams } from "react-router-dom";
import UseMovieInfo from "../hooks/UseMovieInfo";
import { useEffect } from "react";
import VideoLayout from "../components/VideoLayout";
import LoadingMovieLayout from "../components/LoadingMovieLayout";

export default function WatchPage() {
  const { id } = useParams();
  const { fetchMovieInfo, data, loadingData, fetchingFail } = UseMovieInfo();

  useEffect(() => {
    fetchMovieInfo(id);
  }, []);

  if (data) return <VideoLayout movie={data} />;
  else if (loadingData) return <LoadingMovieLayout />;
  else if (fetchingFail) return <div></div>;
  else return <div></div>;
}
