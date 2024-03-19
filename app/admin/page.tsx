"use client";

import { Product, products } from "@/data";
import {
  Button,
  Flex,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import NextLink from "next/link";

export default function AdminHomePage(product: Product) {
  return (
    <>
      <Flex justify="center" m="5">
        <NextLink href="/admin/product/new" data-cy="admin-add-product">
          <Button
            bg="rgba(78, 199, 145, 1)"
            color="white"
            size="lg"
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
          >
            Add Product
          </Button>
        </NextLink>
      </Flex>

      <TableContainer style={{ width: "100%", overflowX: "auto" }}>
        <Table>
          <Thead>
            <Tr>
              <Th>image</Th>
              <Th>id</Th>
              <Th>title</Th>
              <Th>description</Th>
              <Th>price</Th>
            </Tr>
          </Thead>
          <Tbody>
            {products.map((product) => (
              <Tr key={product.id} data-cy="product">
                <Td display="flex" justifyContent="center" alignItems="center" border="1px solid red">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width="80px"
                    height="80px"
                  />
                </Td>
                <Td data-cy="product-id">{product.id}</Td>
                <Td data-cy="product-title">{product.title}</Td>
                <Td
                  style={{ whiteSpace: "normal", width: "300px" }}
                  data-cy="product-description"
                >
                  {product.description.length > 100
                    ? `${product.description.slice(0, 50)}...`
                    : product.description}
                </Td>
                <Td data-cy="product-price">{product.price}</Td>
                <Td>
                  <Flex justify="center" alignItems="center" height="100%">
                    <Button
                      data-cy="admin-edit-product"
                      bg="rgba(78, 199, 145, 1)"
                      color="white"
                      size="sm"
                      mr="20px"
                      _hover={{
                        transform: "translateY(2px)",
                        boxShadow: "lg",
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      data-cy="admin-remove-product"
                      colorScheme="red"
                      size="sm"
                      _hover={{
                        transform: "translateY(2px)",
                        boxShadow: "lg",
                      }}
                    >
                      Delete
                    </Button>
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
