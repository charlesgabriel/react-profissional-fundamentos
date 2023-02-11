import React from "react";
import PropTypes from "prop-types";

import Grid from "components/atoms/Grid";
import Card, { CardBody, CardMedia } from "components/atoms/Card";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";

const ProductGrid = ({ products }) => (
  <Grid md={3}>
    {products.map((product) => (
      <Card>
        <CardMedia image={product.image} />
        <CardBody>
          <Heading>
            <h6>{product.title}</h6>
          </Heading>
          <p>{product.summary}</p>
          <div>
            <Button color="primary" variant="link">
              Saiba mais
            </Button>
          </div>
        </CardBody>
      </Card>
    ))}
  </Grid>
);

ProductGrid.defaultProps = {
  products: [],
};

ProductGrid.propTypes = {
  products: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    summary: PropTypes.string,
  }),
};

export default ProductGrid;
