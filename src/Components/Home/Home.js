import React from "react";
// import "./home.css"
import styled from "styled-components";
const Home = () => {
  return (
    <div className="container">
        <div className="bg-img">
            <Row>
                <div className="col-lg-7">
                    {/* <Heading>S💖A</Heading> */}
                </div>
            </Row>
        </div>
      <Heading>Home</Heading>
    </div>
  );
};
const Heading = styled.h1`
//   color: tomato;
`;
const Row = styled.h1`
  color: darkgreen;
`;
export default Home;
