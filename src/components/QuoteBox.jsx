import React, { useState } from "react";

import { connect } from "react-redux";
import { generateRandomQuote } from "../actions/quotesActions";

// bootstrap
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";

import Card from "react-bootstrap/Card";

const mapStateToProps = (state) => ({ quote: state.randomQuote });
const mapDispatchToProps = { generateRandomQuote };

function QuoteBox(props) {
  const [color, setColor] = useState("lightblue");

  const colors = [
    "#1B0808",

    "#EBE2E2",

    "#EBD9C7",

    "#D0EB48",

    "#D0EB5B",

    "#D9EB76",

    "#D9EB91",

    "#E2EBAC",

    "#E2EBC7",

    "#EBEBE2",

    "#D0EB2D",

    "#D0EB12",

    "#7FEB5B",

    "#91EB76",

    "#A3EB91",

    "#B5EBAC",

    "#C7EBC7",

    "#E2EBE2",

    "#76EB9A",

    "#91EBAC",

    "#ACEBBE",

    "#C7EBD0",
  ];

  const twitterLink =
    "https://www.twitter.com/intent/tweet?" +
    "text=" +
    '"' +
    props.quote.quote +
    '" ' +
    props.quote.author;

  const [className, setClassName] = useState("grow");

  function handleAnimationEnd(e) {
    console.log(e);
    if (e.animationName === "shrink") {
      setClassName("grow");

      props.generateRandomQuote();
      setColor(getNewColor());
    }
  }

  function getNewColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  return (
    <div
      className="d-flex align-items-center"
      style={{
        backgroundColor: color,
        transition: "all .5s ease",
        WebkitTransition: "all .5s ease",
        MozTransition: "all .5s ease",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Container
        className={className}
        style={{ backgroundColor: "#813C9A", padding: 0, borderRadius: "20px" }}
        id="quote-box"
        onAnimationEnd={(e) => handleAnimationEnd(e)}
      >
        <Card
          className="border-0"
          style={{
            backgroundColor: "#813C9A",
            color: color,
            textAlign: "center",
          }}
        >
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <Row>
                {" "}
                <p className="quote-text" id="text">
                  {" "}
                  {' "'}
                  {props.quote.quote}
                  {'" '}{" "}
                </p>{" "}
              </Row>

              <Row>
                <p className="quote-author" id="author">
                  <cite>{props.quote.author}</cite>
                </p>
              </Row>
            </blockquote>
          </Card.Body>
        </Card>

        <Row>
          <Col xs={2}>
            <a
              href={twitterLink}
              id="tweet-quote"
              target="_blank"
              rel="noreferrer"
            >
              <Button style={{ width: "100%" }} variant="primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-twitter"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </Button>
            </a>
          </Col>
          <Col xs={6} />

          <Col xs={4}>
            <Button
              style={{ width: "100%" }}
              variant="primary"
              id="new-quote"
              onClick={() => {
                setClassName("shrink");
              }}
            >
              New Quote
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(QuoteBox);
