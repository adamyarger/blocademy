import React from 'react'
import {
  Box,
  Heading,
  List,
  Text
} from '@chakra-ui/react'

interface Props {
  heading: string,
  description: string,
  list: {
    title: string,
    slug: string
  }[]
}

const CourseCard = ({ heading, description }: Props) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      width="100%"
      overflow="hidden"
      p="6"
    >
      <Heading as="h2" size="lg" mb="4">{heading}</Heading>
      <Text opacity={0.7}>{description}</Text>


    </Box>
  )
}

export default CourseCard