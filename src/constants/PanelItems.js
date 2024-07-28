import { ReactComponent as TrendingThumbnail } from "../assets/trending_thumbnail.svg";
import { ReactComponent as MoviesThumbnail } from "../assets/movies_thumbnail.svg";
import { ReactComponent as TVSeriesThumbnail } from "../assets/tv_thumbnail.svg";
import { ReactComponent as BookmarkedThumbnail } from "../assets/bookmark_thumbnail.svg";

export const PANEL_ITEMS = {
  TRENDING: {
    id: "trending",
    title: "Trending",
    logo: <TrendingThumbnail />,
  },
  MOVIES: {
    id: "movies",
    title: "Movies",
    logo: <MoviesThumbnail />,
  },
  TV_SERIES: {
    id: "tv_series",
    title: "TV Series",
    logo: <TVSeriesThumbnail />,
  },
  BOOKMARKED: {
    id: "bookmarked_movies",
    title: "Bookmarked Movies",
    logo: <BookmarkedThumbnail />,
  },
};
