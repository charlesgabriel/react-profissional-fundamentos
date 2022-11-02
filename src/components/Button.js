// import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// const Button = ({ type, children }) => <Button type={type}>{children}</Button>;

const Button = styled.button`
  background-color: #ffc107;
  border: 2px solid #ffc107;
  color: #212121;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 12px 36px;
`;

Button.defaultProps = {
  type: "button",
  children: undefined,
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
