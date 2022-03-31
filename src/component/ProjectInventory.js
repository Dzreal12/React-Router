import React from "react";

function ProjectInventory({ image, name }) {
  //Showing the image and the name
  return (
    <main className="projectInventory">
      <main style={{ backgroundImage: `url(${image})` }}> </main>
        <h1> {name} </h1>
    </main>
  );
}

export default ProjectInventory;