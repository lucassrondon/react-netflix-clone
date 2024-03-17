import NavBar from "../components/NavBar";
import Billboard from "../components/Billboard";
import MovieList from "../components/MovieList";
import UseMoviesList from "../hooks/UseMoviesList";
import { useCallback, useEffect, useState, useRef } from "react";

export default function BrowsePage() {
  const { fetchMoviesList, data, loadingData, lastPage } = UseMoviesList();
  const [offset, setOffset] = useState(0);
  const observer = useRef<null | IntersectionObserver>(null);

  const lastElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (loadingData) return;

      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setOffset(offset + 12);
          fetchMoviesList(offset);
          console.log("intersecting");
        }
      });

      if (node && !lastPage) observer.current.observe(node);
    },
    [loadingData]
  );

  useEffect(() => {
    fetchMoviesList(offset), setOffset(offset + 12);
  }, []);

  return (
    <div>
      <NavBar />
      <Billboard />
      <div className="w-screen">
        <MovieList
          loadingData={loadingData}
          data={data}
          lastElementRef={lastElementRef}
        />
      </div>
    </div>
  );
}
