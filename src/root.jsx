import { Outlet, Link, useLoaderData } from "react-router-dom";

const nflScores = [
  {
    game: "SF/NE",
    score: "24/7",
  },
];

export const loader = () => {
  return { nflScores };
};

export default function Root() {
  const { nflScores } = useLoaderData();

  return (
    <>
      <div id="sidebar">
        <nav>
          <ul>
            <li>
              <Link to={`contacts/1`}> {nflScores[0].game}</Link>
            </li>
            <li>
              <Link to={`contacts/2`}>Your Friend</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
