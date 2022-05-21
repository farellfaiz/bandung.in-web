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
  Stack,
  ModalFooter,
  ModalBody,
  IconButton,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'
import { DownloadIcon, ChevronDownIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { AiFillAndroid, AiFillApple, AiFillGithub, AiOutlineMobile, AiOutlineGlobal } from 'react-icons/ai';
import { SiExpo } from 'react-icons/si'
import { HiOutlineCash, HiCode } from 'react-icons/hi'
import { FaChevronRight, FaHandHoldingUsd, FaUsers, FaMoneyBillWave } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { IoFootstepsSharp } from 'react-icons/io5'

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
            <Link href='https://github.com/farellfaiz/bandung.in/releases/download/v1.0.1/bandung.in_v1.0.1.apk'>
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
      <Modal isOpen={isOpen} onClose={onClose} size='md' >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader><Icon as={AiFillApple} mr={2} /> Download for iOS</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box flex='1' px={4}>
              <ol>
                <li>
                  <Box display='flex' w='100%' flexDir='row' justifyContent='space-between' alignItems='center'>
                    <Text mr="4">Download <b>Expo Go</b> in App Store</Text>
                    <Link href='https://apps.apple.com/us/app/expo-go/id982107779' isExternal>
                      <IconButton aria-label='Download Expo Go' icon={<DownloadIcon />}  />
                    </Link>
                  </Box>
                </li>
                <li>
                  <Box my='4' display='flex' w='100%' flexDir='row' justifyContent='space-between' alignItems='center'>
                    <Text mr="4">Scan the QR code below or tap the arrow icon to open the app</Text>
                    <Link href='exp://exp.host/@farellfaiz/bandung-in?release-channel=default'>
                      <IconButton aria-label='Open Bandung.in' icon={<FaChevronRight />}  />
                    </Link>
                  </Box>
                </li>
              </ol>
              <Image 
                src='https://qr.expo.dev/expo-go?owner=farellfaiz&slug=bandung-in&releaseChannel=default&host=exp.host'
              />
            </Box>
          </ModalBody>

          <ModalFooter>
            <Text>Help us to deploy as a standalone app</Text>
            <Link href='https://saweria.co/bandungin' isExternal>
              <Button onClick={onClose} ml={3} bg='black' color='white' _active={{ bg: 'blackAlpha.900' }} _hover={{ bg: 'blackAlpha.700' }} rightIcon={<ArrowForwardIcon />} leftIcon={<HiOutlineCash />}  mr={3}>
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
            src="https://github.com/farellfaiz/bandung.in/blob/master/assets/icon-white.png?raw=true"
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
              src="https://github.com/farellfaiz/bandung.in-web/blob/master/public/mockup-bandung.in.png?raw=true"
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
            <Text color='blackAlpha.500' fontStyle='italic' mb={10} size='sm'>Allow install from unknown source and install anyway if Play Protect warning appears.</Text>
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
        <Box backgroundColor="#f3f3f3">
          <Box
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            py="50px"
            px="40px"
            flexDirection={{ base: 'column', md: 'row' }}
          >
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Stack spacing={6} alignItems="center">
                <Heading size="lg">Sponsor our Project</Heading>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  backgroundColor="#000000"
                  borderRadius="50%"
                  width="80px"
                  height="80px"
                >
                  <Icon boxSize='30px' color='white' as={FaMoneyBillWave} />
                </Box>
                <Text textAlign="justify">
                  Deploying standalone app for iOS, publishing it to Play Store/App
                  Store, also upgrading services and features requires a plenty of
                  money. Help us by sponsoring this project! You'll also receive
                  benefits and credits in this project as a sponsor.
                </Text>
                <Box>
                  <Text
                    textAlign="center"
                    mb="7px"
                    fontStyle="italic"
                    color="blackAlpha.600"
                  >
                    become our sponsor
                  </Text>
                  <Stack spacing={2} isInline>
                    <Link href='https://saweria.co/bandungin' isExternal>
                      <Button
                        variant="solid"
                        size="md"
                        colorScheme='yellow'
                        leftIcon={<FaHandHoldingUsd />}
                      >
                        Donate
                      </Button>
                    </Link>
                    <Link href='https://wa.me/6285156972328'>
                      <Button
                        variant="solid"
                        size="md"
                        bg='black' color='white' _active={{ bg: 'blackAlpha.900' }} _hover={{ bg: 'blackAlpha.800' }}
                        leftIcon={<MdEmail />}
                      >
                        Contact Us
                      </Button>
                    </Link>
                  </Stack>
                </Box>
              </Stack>
            </Box>
            <Box
              backgroundColor="blackAlpha.400"
              height={{ base: '1px', md: '270px' }}
              width={{ base: '10%', md: '2px' }}
              borderRadius='6px'
              my={{ base: '40px', md: '0' }}
              mx='35px'
            />
            <Box>
              <Stack spacing={6} alignItems="center">
                <Heading size="lg">Become Contributor</Heading>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  backgroundColor="#000000"
                  borderRadius="50%"
                  width="80px"
                  height="80px"
                >
                  <Icon boxSize='30px' color='white' as={FaUsers} />
                </Box>
                <Text textAlign="justify">
                  Bandung.in is open source. Help us by contributing in Github as a
                  Developer or submitting places as a Bandung Explorer! You'll also
                  receive benefits and credits in this project as a Developer or
                  Bandung Explorer.
                </Text>
                <Box>
                  <Text
                    textAlign="center"
                    mb="7px"
                    fontStyle="italic"
                    color="blackAlpha.600"
                  >
                    choose your path
                  </Text>
                  <Stack spacing={2} isInline>
                    <Link href='https://forms.gle/x8zg7WycQz5aLGvv6' isExternal>
                      <Button
                        variant="solid"
                        size="md"
                        colorScheme="yellow"
                        leftIcon={<IoFootstepsSharp />}
                      >
                        Explorer
                      </Button>
                    </Link>
                    <Link href='https://github.com/farellfaiz/bandung-in/' isExternal>
                      <Button
                        variant="solid"
                        size="md"
                        bg='black' color='white' _active={{ bg: 'blackAlpha.900' }} _hover={{ bg: 'blackAlpha.800' }}
                        leftIcon={<HiCode />}
                      >
                        Developer
                      </Button>
                    </Link>
                  </Stack>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            pt={10}
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
