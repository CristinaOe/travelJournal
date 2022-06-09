import React from "react";
import Card from "./components/Card";
import Nav from "./components/Nav";
import data from "./data";

export default function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return (
    <div>
      <Nav />
      <section className='cards-list'>{cards}</section>
    </div>
  );
}
