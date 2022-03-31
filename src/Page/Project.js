import React from "react";
import { ProjectList } from "../inventories/ProjectList";
import ProjectInventory from "../component/ProjectInventory";
import "../styles/Project.css";

//Project Page
function Project() {
  return (
    <main className="project">
      <h1 className="projectTitle">The Projects</h1>
        <main className="projectList">
          {ProjectList.map((projectInventory, key) => {
            return (
              <ProjectInventory
                key={key}
                  image={projectInventory.image}
                    name={projectInventory.name}
            />
          );
        })}
      </main>
    </main>
  );
}

export default Project;