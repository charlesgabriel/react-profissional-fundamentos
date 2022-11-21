import styled from "styled-components";

const Heading = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    margin-bottom: 25px;
    padding-bottom: 8px;
    position: relative;

    &::after {
      background-color: ${(props) => props.theme.colors.primary.main};
      bottom: -3px;
      content: "";
      height: 5px;
      left: 0;
      position: absolute;
      width: 70px;
    }
  }

  h1 {
    padding-bottom: 25px;
  }
`;

export default Heading;
