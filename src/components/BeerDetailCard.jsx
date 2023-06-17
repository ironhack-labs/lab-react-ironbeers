
import { Spinner, Center, Box, Stack, Flex, Heading, Card, CardHeader, CardBody, CardFooter, Image, Text, Button} from "@chakra-ui/react";


export default function BeerDetailCard ({image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by}) {

    return (
        <Card maxW='lg'>
        <CardBody>
        <Center>
          <Image
            src={image_url}
            borderRadius='lg'
            maxW={100}
          />
          </Center>
          <Stack mt='6' spacing='3'>
            <Flex justifyContent='space-between'>
                <Heading size='lg'>{name}</Heading>
                <Heading size='md'>{attenuation_level}</Heading>
            </Flex>
            <Flex justifyContent='space-between'>
                <Heading size='md'>{tagline}</Heading>
                <Text size='sm'>{first_brewed}</Text>
            </Flex>
            <Text>{description}</Text>
            <Text><b>Created by:</b> {contributed_by}</Text>
          </Stack>
        </CardBody>
      </Card>
    )

}