import { Button, Container, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Product } from "../types/Products";
import Loading from "../components/Loading";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState<boolean>(false);

  const getProductDetail = async (id: string) => {
    try {
      setLoading(true);
      const { data } = await axios.get(`http://localhost:3000/products/${id}`);
      setProduct(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (!id) return;
    getProductDetail(id);
  }, [id]);

  return (
    <>
      <Loading isShow={loading} />
      <Container>
        {product && (
          <Stack direction={"row"} gap={3}>
            <img src={product.image} alt="" width={"500px"} />
            <Stack gap={"24px"}>
              <Typography variant="h3" component={"h1"} fontSize={"24px"}>
                {product.title}
              </Typography>
              <Typography fontSize={"18px"}>{product.description}</Typography>
              <Typography color={"red"} fontWeight={"bold"}>
                Price: {product.price}
              </Typography>
              <Typography>Category: {product.category}</Typography>
              <Button variant="outlined">Add to Cart</Button>
            </Stack>
          </Stack>
        )}
      </Container>
    </>
  );
}

export default ProductDetail;
