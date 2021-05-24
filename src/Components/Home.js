import React from "react";

import Card from "./Card";
import Container from "./Container";
import image from "../../src/business.jpg";

function Home() {
  return (
    <Container title="Home">
      <Card
        name="Harvey Specter"
        image={image}
        work="Lawyer at Specter Litt"
        desc="Works as lawyer at Pearson Spector. Good at hiring. Intelligent Guy. Handsome and Suave. Blah Blah Blah Blah. Works as lawyer at Pearson Spector. Good at hiring. Intelligent Guy. Handsome and Suave. Blah Blah Blah Blah."
      />
    </Container>
  );
}

export default Home;
