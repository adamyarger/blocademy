import {
  Box,
  Stack,
  ButtonGroup,
  IconButton
} from '@chakra-ui/react'
import { RiGithubFill, RiTwitterFill } from "react-icons/ri"

const Footer = () => {
  return (
    <Box as="footer" role="contentinfo" mx="auto" py="12" px={{ base: '4', md: '8' }}>
      <Stack>
        <Stack direction="row" spacing="4" align="center" justify="space-between">
          {/* create logo component with link */}
          Logo

          <ButtonGroup variant="ghost" color="gray.600">
            <IconButton as="a" href="#" aria-label="GitHub" icon={<RiGithubFill fontSize="20px" />} />
            <IconButton as="a" href="#" aria-label="Twitter" icon={<RiTwitterFill fontSize="20px" />} />
          </ButtonGroup>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Footer