import React from 'react'
import {
  ChakraProvider,
  Box,
  Image,
  Heading,
  Text,
  Button,
  Center,
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuItem,
  Icon,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'
import { DownloadIcon, ChevronDownIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { AiFillAndroid, AiFillApple, AiFillGithub, AiOutlineMobile, AiOutlineGlobal } from 'react-icons/ai';
import { SiExpo } from 'react-icons/si'
import { HiOutlineCash } from 'react-icons/hi'

const DownloadButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Menu>
        <MenuButton shadow='md' as={Button} leftIcon={<DownloadIcon/>} rightIcon={<ChevronDownIcon /> }>
          Download
        </MenuButton>
        <MenuList>
          <MenuGroup title='Download mobile app'>
            <Link href='https://expo.dev/artifacts/eas/xjxF9AkiLLbJkB8Wiaq5R.apk'>
              <MenuItem minH='48px'>
                <Icon as={AiFillAndroid} />
                <Text ml='3'>Android</Text>
              </MenuItem>
            </Link>
            <MenuItem onClick={onOpen} minH='40px'>
              <Icon as={AiFillApple} />
              <Text ml='3'>iOS</Text>
            </MenuItem>
          </MenuGroup>
          <MenuGroup title='View on Expo'>
            <Link href='https://expo.dev/@farellfaiz/bandung-in' isExternal>
              <MenuItem minH='48px'>
                <Icon as={SiExpo} />
                <Text ml='3'>Expo Go</Text>
              </MenuItem>
            </Link>
          </MenuGroup>
        </MenuList>
      </Menu>
      <Modal isOpen={isOpen} onClose={onClose} size="sm">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader><Icon as={HiOutlineCash} mr={2} /> Sponsor Our Project</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Deploying applications for iOS requires a plenty of money. Help us by sponsoring this project! You'll also receive benefits and credits in this project as a sponsor.</Text>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} variant='ghost'>Not this time</Button>
            <Link href='https://wa.me/6285156972328' isExternal>
              <Button onClick={onClose} ml={3} bg='black' color='white' _active={{ bg: 'blackAlpha.800' }} _hover={{ bg: 'blackAlpha.500' }} rightIcon={<ArrowForwardIcon />}  mr={3}>
                Let's go!
              </Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

const App = () => {
  return (
    <ChakraProvider resetCSS>
      <Box
        backgroundColor="whiteAlpha.500"
        bgGradient="linear(to top left, blackAlpha.50,white,facebook.100)"
      >
        <Box
          backgroundColor="#31302E"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          bgGradient="linear(to left, #535250,#31302E)"
          pt={4}
          pb={4}
          pl={10}
          pr={10}
        >
          <Image
            height="50px"
            width="50px"
            src="https://i.ibb.co/1GKb6Mj/icon-white.png"
          />
          <DownloadButton />
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          pt={10}
          pr={10}
          pl={10}
          flexDirection={{ base: 'column-reverse', md: 'row' }}
        >
          <Box
            width={{ base: '100%', md: '50%' }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              width={230}
              src="https://i.ibb.co/WvNPCBv/mockup-bandung-in.png"
            />
          </Box>
          <Box width={{ base: '100%', md: '50%' }} lineHeight="normal">
            <Image
              height="100px"
              width="100px"
              src="https://github.com/farellfaiz/bandung.in/blob/master/assets/icon.png?raw=true"
              mt={4}
              mb={4}
              ml={{ base: 'auto', md: '-20px' }}
              mr='auto'
            />
            <Heading size="lg" mb={2}>
              Introducing, Bandung.in
            </Heading>
            <Heading size="sm" mb={2}>
              Your all-in-one needs in Bandung
            </Heading>
            <Text pb={4}>
              Bandung.in is a mobile application that helps the citizens of
              Bandung to meet their various needs easily, especially for
              immigrants and nomads.{' '}
            </Text>
            <Text pb={8}>
              This application has various features, especially in the geospatial
              field considering that this application was developed by students
              from the Faculty of Earth Science and Technology, Bandung Institute
              of Technology.
            </Text>
            <Box display="flex" justifyContent={{ base: 'center', md: 'flex-start' }} alignItems="center" mb={8}>
              <DownloadButton />
              <Menu>
                <MenuButton shadow='md' ml={3} as={Button}  rightIcon={<ChevronDownIcon /> }  >
                  <Icon as={AiFillGithub} />
                </MenuButton>
                <MenuList>
                  <MenuGroup title='View on Github'>
                    <Link href='https://github.com/farellfaiz/bandung.in' isExternal>
                      <MenuItem minH='48px'>
                        <Icon as={AiOutlineMobile} />
                        <Text ml='3'>Application</Text>
                      </MenuItem>
                    </Link>
                    <Link href='https://github.com/farellfaiz/bandung.in-web' isExternal>
                      <MenuItem minH='40px'>
                        <Icon as={AiOutlineGlobal} />
                        <Text ml='3'>Website</Text>
                      </MenuItem>
                    </Link>
                  </MenuGroup>
                </MenuList>
              </Menu>
            </Box>
            <Text color='blackAlpha.500' fontStyle='italic' mb={10} size='sm'>Allow uninstall from unknown source and install anyway if Play Protect warning appears.</Text>
          </Box>
        </Box>
        <Box>
          <Heading textAlign="center" m={10}>
            Our Team
          </Heading>
        </Box>
        <Box
          display="flex"
          alignItems="flex-start"
          justifyContent="space-around"
          p={10}
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width="33%"
          >
            <Image
              height={{ base: '70px', md: '130px' }}
              width={{ base: '70px', md: '130px' }}
              src="https://github.com/farellfaiz/bandung.in/blob/master/assets/team/ubeng.png?raw=true"
            />
            <Text fontWeight="bold" textAlign='center' mt={3}>Istifa' Yurbi</Text>
            <Text color="blackAlpha.600">16321009</Text>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            width="33%"
          >
            <Image
              height={{ base: '70px', md: '130px' }}
              width={{ base: '70px', md: '130px' }}
              src="https://github.com/farellfaiz/bandung.in/blob/master/assets/team/faiz.png?raw=true"
            />
            <Text fontWeight="bold" textAlign='center' mt={3}>Farell Faiz Firmansyah</Text>
            <Text color="blackAlpha.600">16321025</Text>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width="33%"
          >
            <Image
              height={{ base: '70px', md: '130px' }}
              width={{ base: '70px', md: '130px' }}
              src="https://github.com/farellfaiz/bandung.in/blob/master/assets/team/anis.png?raw=true"
            />
            <Text fontWeight="bold" textAlign='center' mt={3}>Nisrina Anindya Desvianty</Text>
            <Text color="blackAlpha.600">16321033</Text>
          </Box>
        </Box>
        <Box
          display="flex"
          alignItems="flex-start"
          justifyContent="space-around"
          p={10}
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width="33%"
          >
            <Image
              height={{ base: '70px', md: '130px' }}
              width={{ base: '70px', md: '130px' }}
              src="https://github.com/farellfaiz/bandung.in/blob/master/assets/team/luthfi.png?raw=true"
            />
            <Text fontWeight="bold" textAlign='center' mt={3}>M. Luthfi Satria Nugraha</Text>
            <Text color="blackAlpha.600">16321049</Text>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width="33%"
          >
            <Image
              height={{ base: '70px', md: '130px' }}
              width={{ base: '70px', md: '130px' }}
              src="https://github.com/farellfaiz/bandung.in/blob/master/assets/team/indri.png?raw=true"
            />
            <Text fontWeight="bold" textAlign='center' mt={3}>Amelia Indri Nastari S.</Text>
            <Text color="blackAlpha.600">16321073</Text>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width="33%"
          >
            <Image
              height={{ base: '70px', md: '130px' }}
              width={{ base: '70px', md: '130px' }}
              src="https://github.com/farellfaiz/bandung.in/blob/master/assets/team/edom.png?raw=true"
            />
            <Text fontWeight="bold" textAlign='center' mt={3}>Yehezkiel Obed Edom S.</Text>
            <Text color="blackAlpha.600">16321105</Text>
          </Box>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          p={10}
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              height={{ base: '70px', md: '130px' }}
              width={{ base: '70px', md: '130px' }}
              src="https://github.com/farellfaiz/bandung.in/blob/master/assets/team/maura.png?raw=true"
            />
            <Text fontWeight="bold" textAlign='center' mt={3}>Maura Dara Bitya</Text>
            <Text color="blackAlpha.600">16321145</Text>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              height={{ base: '70px', md: '130px' }}
              width={{ base: '70px', md: '130px' }}
              src="https://github.com/farellfaiz/bandung.in/blob/master/assets/team/alya.png?raw=true"
            />
            <Text fontWeight="bold" textAlign='center' mt={3}>Alya Nabila Ramadhani</Text>
            <Text color="blackAlpha.600">16321233</Text>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              height={{ base: '70px', md: '130px' }}
              width={{ base: '70px', md: '130px' }}
              src="https://github.com/farellfaiz/bandung.in/blob/master/assets/team/jeje.png?raw=true"
            />
            <Text fontWeight="bold" textAlign='center' mt={3}>Zelika Diva Kirana</Text>
            <Text color="blackAlpha.600">16321241</Text>
          </Box>
        </Box>
        <Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            pt={6}
            pb={10}
          >
            <Image
              height="100px"
              width="100px"
              mr={5}
              src="https://github.com/farellfaiz/bandung.in/blob/master/assets/itb.png?raw=true"
            />
            <Image
              height="100px"
              width="100px"
              src="https://massabumi21.id/img/logo.png"
            />
          </Box>
          <Box>
            <Center
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              pb={10}
            >
              <Text>Introduction to Engineering and Design</Text>
              <Text>Faculty of Earth Sciences and Technology</Text>
              <Text>Institut Teknologi Bandung</Text>
              <Text mt={3}>Group 7 at K03</Text>
            </Center>
          </Box>
        </Box>
        <Box bgGradient="linear(to right, #32312F,#535250)" p={3}>
          <Text textAlign="center" color="white">
            © Copyright 2022. All rights reserved.
          </Text>
        </Box>
      </Box>
    </ChakraProvider>
  )
}

export default App