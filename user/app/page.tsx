// by using the "use client" directive.
"use client";
import React, { FC, useState } from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header";
import Hero from "./components/Route/Hero";
import Hero1 from "./components/Route/Hero1";
import Card from "./components/Route/Card";
interface Props {}

const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Login");
  return (
    <div>
      <Hero1 />
      <Heading
        title="insightArcAI"
        description="An AI that uses machine learning to provide insights on data."
        keywords="ArcAi, AI Tools"
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />
      <Hero />
      <Hero1 />
      <Card />
    </div>
  );
};

export default Page;
