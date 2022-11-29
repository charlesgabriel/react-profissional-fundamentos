import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const getPrimaryColor = ({ theme }) => theme.colors.primary.main;

const Root = styled.div`
  text-align: center;

  & h5 {
    margin: 16px 0;
  }

  & p {
    margin: 0;
  }
`;

const IconRoot = styled.div`
  border-radius: 50%;
  display: inline-block;
  height: 116px;
  padding: 8px;
  width: 116px;

  &:hover {
    border: 1px solid ${getPrimaryColor};

    > * {
      background-color: ${getPrimaryColor};
      color: #fff;
    }
  }
`;

const IconContainer = styled.div`
  align-items: center;
  border: 1px solid #e9e9e9;
  border-radius: 50%;
  color: ${getPrimaryColor};
  display: flex;
  font-size: 32px;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

const Feature = ({ icon, title, children }) => (
  <Root>
    <IconRoot>
      <IconContainer>{icon}</IconContainer>
    </IconRoot>
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
