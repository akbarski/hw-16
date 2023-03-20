import React from "react";
import styled from "styled-components";

const MyOrders = () => {
  return (
    <Container>
      <Title>My Orders</Title>
    </Container>
  );
};

export default MyOrders;

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
