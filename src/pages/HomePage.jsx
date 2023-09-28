import { Link } from "react-router-dom";

function HomePage({ companies }) {
  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <ul>
        {companies.map((oneCompany) => {
          return (
            <li key={oneCompany.id}>
              <Link to={`/company/${oneCompany.slug}`}>
                {`${oneCompany.name}`}
                <img src={oneCompany.logo} style={{ height: "100px" }} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default HomePage;
