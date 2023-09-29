import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function CompanyPage({ companies }) {
  const { companySlug } = useParams();
  const [oneCompany, setOneCompany] = useState(
    companies.find((company) => company.slug === companySlug)
  );

  return (
    <>
      <div>
        <h1>Company Profile</h1>
        <>
          {" "}
          <img src={oneCompany.logo} style={{ height: "100px" }} />{" "}
          <p>{oneCompany.name}</p> <p>{oneCompany.website}</p>{" "}
          <p>{oneCompany.description}</p>{" "}
          <ul>
            {oneCompany.techStack.map((oneTech) => {
              return (
                <li key={oneTech.slug}>
                  <Link to={`/tech/${oneTech.slug}`}>
                    {`${oneTech.name}`}
                    <img src={oneTech.image} style={{ height: "100px" }} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </>
      </div>
    </>
  );
}

export default CompanyPage;
