import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { breakAt, BreakpointSize } from "./Breakpoints";

const colorYellow = "#ffc107";

const Root = styled.div`
  color: #fff;
  padding: 100px 0;

  ${(props) => css`
    background: url(${props.image}), rgba(0, 0, 0, 0.4);
    background-blend-mode: overlay;
    background-position: center;
    background-size: cover;
  `}
`;

const Container = styled.div`
  padding: 0 8px;
  width: 100%;

  ${breakAt(BreakpointSize.sm)} {
    padding: 0 16px;
  }

  ${breakAt(BreakpointSize.lg)} {
    margin: 0 auto;
    padding: 0;
    width: 1140px;
  }
`;

// const Title = styled.h1`
//   border-bottom: 1px solid rgba(255, 255, 255, 0.2);
//   font-weight: 700;
//   letter-spacing: 2px;
//   margin-bottom: 25px;
//   padding-bottom: 25px;
//   position: relative;

//   &::after {
//     background-color: ${colorYellow};
//     bottom: -3px;
//     content: "";
//     height: 5px;
//     left: 0;
//     position: absolute;
//     width: 70px;
//   }
// `;

const Content = styled.div`
  p,
  li {
    font-size: 20px;
    font-weight: 300;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  li {
    &::before {
      content: "\\2713\\0020";
      color: ${colorYellow};
    }
  }
`;

const Hero = ({ image, children }) => (
  <Root image={image}>
    <Container>
      <Content>{children}</Content>
    </Container>
  </Root>
);

Hero.propTypes = {
  image: PropTypes.string,
  children: PropTypes.node,
};

export default Hero;
