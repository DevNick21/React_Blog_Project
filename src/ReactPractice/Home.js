import Bloglist from "./Bloglist";
import useFetch from "./useFetch";

export default function Home() {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div> Loading&#128515;...</div>}
      {blogs && <Bloglist blogs={blogs} title="All Blogs!" />}
    </div>
  );
}
