import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Root = styled.div`
  text-align: center;

  & h5 {
    margin: 16px 0;
  }

  & p {
    margin: 0;
  }
`;

const Feature = ({ icon, title, children }) => (
  <Root>
    <div>{icon}</div>
    <h5>{title}</h5>
    <div>{children}</div>
  </Root>
);

Feature.defaultProps = {
  icon: undefined,
  title: "",
  children: undefined,
};

Feature.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Feature;
