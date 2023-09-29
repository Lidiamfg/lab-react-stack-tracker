import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function TechnologyPage({ technologies }) {
  const { slug } = useParams();
  return (
    <div>
      <h1>Technology Details</h1>
      {technologies.map((oneTech) => {
        return (
          oneTech.slug === slug && (
            <Fragment key={oneTech.id}>
              {" "}
              <img src={oneTech.image} style={{ height: "100px" }} />{" "}
              <p>{oneTech.name}</p>
              <p>{oneTech.description}</p>{" "}
            </Fragment>
          )
        );
      })}
    </div>
  );
}

export default TechnologyPage;
