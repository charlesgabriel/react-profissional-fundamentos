import styled from "styled-components";

const Heading = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 25px;
  padding-bottom: 25px;
  position: relative;

  &::after {
    background-color: #ffc107;
    bottom: -3px;
    content: "";
    height: 5px;
    left: 0;
    position: absolute;
    width: 70px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 0;
  }
`;

export default Heading;
