import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";

const Root = styled.div`
  background-color: #fff;
  border-radius: 4px;
`;

const Body = styled.div`
  padding: 16px;
  h6 {
    margin-top: 0;
  }
`;

const Card = () => (
  <Root>
    <div />
    <Body>
      <Heading>
        <h6>Titulo</h6>
      </Heading>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div>
        <Button color="primary" variant="link">
          Saiba mais
        </Button>
      </div>
    </Body>
  </Root>
);

Card.defaultProps = {};

Card.propTypes = {};

export default Card;
