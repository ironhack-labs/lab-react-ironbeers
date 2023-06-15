import { Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

export default function ErrorPage() {
  return (
    <>
      <Navbar />
      <Text fontSize={32} textAlign={"center"} mt={4}>
        Vaya parece que te has perdido, haz click en la casita de arriba 👆
      </Text>
    </>
  );
}
