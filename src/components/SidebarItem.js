import React, { useState } from "react";
import { Card } from "react-bootstrap";

export default function SidebarItem({ title, author, source }) {
  const [hover, set_hover] = useState(false);
  const shortTitle =
    title.length > 50 ? title.substring(0, 45).concat("...") : title;

  const backgroundColor = hover ? "dark" : "light";

  return (
    <div
      onMouseEnter={() => set_hover(!hover)}
      onMouseLeave={() => set_hover(!hover)}
    >
      <Card
        text={hover ? "light" : "dark"}
        bg={backgroundColor}
        style={{ maxHeight: "10em" }}
      >
        <Card.Body>
          <Card.Title>{shortTitle}</Card.Title>
          <Card.Footer
            style={{ width: "100%" }}
          >{`author: ${author}`}</Card.Footer>
        </Card.Body>
      </Card>
    </div>
  );
}
