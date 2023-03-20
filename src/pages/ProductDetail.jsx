import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const ProductDetail = () => {
  const { productId } = useParams();

  return (
    <Container>
      <Title>Product {productId}</Title>
    </Container>
  );
};

export default ProductDetail;

const Container = styled.div`
  font-size: 20px;
  width: 600px;
  background-color: #fff;
  margin: 0 auto;
  height: 250px;
  text-align: left;
`;

const Title = styled.p`
  padding: 10px;
`;
