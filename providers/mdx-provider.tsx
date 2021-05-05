import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import {
  Heading,
  Text,
} from '@chakra-ui/react'

const mdComponents = {
  h1: (props) => <Heading as="h1" {...props} />,
  h2: (props) => <Heading as="h2" {...props} />,
  h3: (props) => <Heading as="h3" {...props} />,
  h4: (props) => <Heading as="h4" {...props} />,
  p: (props) => <Text as="p" {...props} />,
  // a: (props) => <Link as="a" {...props} />,
}

export default ({ children }) => (
  <MDXProvider components={mdComponents}>{children}</MDXProvider>
)
