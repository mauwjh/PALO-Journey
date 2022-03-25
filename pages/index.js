/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import FocusLock, { AutoFocusInside } from "react-focus-lock";
import { useState, useRef, useEffect } from "react";
import Typist from "react-typist";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const style = {
  header: {
    ml: "10px",
  },
  body: {
    ml: "20px",
    mb: "10px",
  },
};

const InputLine = ({
  input,
  setInput,
  handleSubmit,
  visible,
  setVisible,
  options,
}) => {
  const [order, setOrder] = useState(0);
  const [total, setTotal] = useState(0);
  const [check, setCheck] = useState("");

  return (
    <FocusLock
      persistentFocus={true}
      returnFocus={true}
      autoFocus={true}
      group="group1"
    >
      <Flex w="100%" h="25px">
        <Text
          minW="max-content"
          color="#2fc256"
          mr="10px"
          display={visible ? "flex" : "none"}
        >{`matthew@PALO-IT$`}</Text>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setVisible(false);
            handleSubmit(input);
            setInput("");
            setCheck("");
            setOrder(0);
          }}
        >
          <AutoFocusInside>
            <Input
              style={{ maximumScale: "1" }}
              color="white"
              variant="unstyled"
              onChange={(event) => {
                setInput(event.currentTarget.value);
                setCheck(event.currentTarget.value);
                setOrder(0);
              }}
              value={input}
              onKeyDown={(event) => {
                if (event.key === "Tab") {
                  event.preventDefault();
                  setTotal(options.filter((x) => x.includes(check)).length - 1);
                  if (order < total) {
                    setInput(options.filter((x) => x.includes(check))[order]);
                    setOrder(order + 1);
                    return;
                  }
                  if (order === total) {
                    setInput(options.filter((x) => x.includes(check))[order]);
                    setOrder(0);
                    return;
                  }
                  return;
                }
              }}
            />
          </AutoFocusInside>
        </form>
      </Flex>
    </FocusLock>
  );
};

const FauxInputLine = ({ text }) => (
  <Flex>
    <Text
      minW="max-content"
      color="#2fc256"
      mr="10px"
    >{`matthew@PALO-IT$`}</Text>
    <Text>{text}</Text>
  </Flex>
);

export default function Home() {
  const content = {
    help: (
      <>
        <FauxInputLine text="help" />
        <br />
        <Text fontWeight="800" ml={style.header.ml}>
          who_we_are
        </Text>
        <Text ml={style.body.ml} mb={style.body.mb}>
          - What is PALO IT and how do we stand out from the rest
        </Text>
        <Text fontWeight="800" ml={style.header.ml}>
          values
        </Text>
        <Text ml={style.body.ml} mb={style.body.mb}>
          - A summary of the PALO values and those I resonate the most with
        </Text>
        <Text fontWeight="800" ml={style.header.ml}>
          journey
        </Text>
        <Text ml={style.body.ml} mb={style.body.mb}>
          - A brief description of my time so far at PALO IT
        </Text>
        <Text fontWeight="800" ml={style.header.ml}>
          achievements
        </Text>
        <Text ml={style.body.ml} mb={style.body.mb}>
          - A list of my achievements with PALO
        </Text>
        <Text fontWeight="800" ml={style.header.ml}>
          a_thousand_words
        </Text>
        <Text ml={style.body.ml} mb={style.body.mb}>
          - A collection of photos depicting my past 3 months
        </Text>
        <Text fontWeight="800" ml={style.header.ml}>
          feedback
        </Text>
        <Text ml={style.body.ml} mb={style.body.mb}>
          - A few points for improvement
        </Text>
        <Text fontWeight="800" ml={style.header.ml}>
          clear
        </Text>
        <Text ml={style.body.ml} mb={style.body.mb}>
          - Clears all messages
        </Text>
        <br />
      </>
    ),
    who_we_are: (
      <>
        <FauxInputLine text="who_we_are" />
        <br />
        <Text fontWeight="800" ml={style.header.ml}>
          What is PALO IT?
        </Text>
        <Text ml={style.body.ml}>
          PALO IT is a global innovation consultancy and Agile software
          development company dedicated to helping organisations embrace tech as
          a force for good. We work with clients to rapidly launch products and
          services, create new business models, and prepare leadership and
          culture for the future.
        </Text>
        <br />
        <Text ml={style.body.ml} mb={style.body.mb}>
          We're committed to helping businesses transform to better our world.
          We're proud to be a World Economic Forum New Champion, and a B
          Corp-certified company in Singapore and Hong Kong, currently working
          towards certification across all other locations.
        </Text>
        <br />
      </>
    ),
    values: (
      <>
        <FauxInputLine text="values" />
        <br />
        <Text fontWeight="800" ml={style.header.ml}>
          We Care
        </Text>
        <Text ml={style.body.ml} mb={style.body.mb}>
          about our world
        </Text>
        <Text fontWeight="800" ml={style.header.ml}>
          We Share
        </Text>
        <Text ml={style.body.ml} mb={style.body.mb}>
          it's in our DNA
        </Text>
        <Text fontWeight="800" ml={style.header.ml}>
          We Act
        </Text>
        <Text ml={style.body.ml} mb={style.body.mb}>
          with courage
        </Text>
        <Text fontWeight="800" ml={style.header.ml}>
          We Deliver
        </Text>
        <Text ml={style.body.ml} mb={style.body.mb}>
          awesomeness
        </Text>
        <Text fontWeight="800" ml={style.header.ml}>
          We Choose
        </Text>
        <Text ml={style.body.ml} mb={style.body.mb}>
          positivity
        </Text>
        <br />
        <Text ml={style.header.ml}>
          I resonate the strongest with the We Act and We Deliver values. As a
          sustainable and tech-for-good company, I believe that we truly deliver
          awesomeness through the work that we produce and with the attitude
          that we bring to the table. At PALO IT, we dare to say 'we can make a
          change' and through our partnerships with our clients, we strive to
          innovate for the greater good.
        </Text>
        <br />
      </>
    ),
    journey: (
      <>
        <FauxInputLine text="journey" />
        <br />
        <Text ml={style.header.ml}>
          I began my PALO journey on 1 Jan 2022 as a software engineer with the
          Frontend Dojo. My time with PALO thus far, though short, has been a
          challenging but rewarding one. I was introduced to the PALO culture
          through an action-packed orientation program and had the opportunity
          meet many fellow Palowans along the way.
        </Text>
        <br />
        <Text ml={style.header.ml}>
          I started on my first project with Unravel shortly after the 2 weeks
          of orientation and thus began my first foray into the professional
          world as a software developer.
        </Text>
        <br />
      </>
    ),
    achievements: (
      <>
        <FauxInputLine text="achievements" />
        <br />
        <Text fontWeight="800" ml={style.header.ml}>
          New Friends!
        </Text>
        <Text ml={style.body.ml}>
          Not so much of an achievement but still noteworthy. I've had the
          opportunity to befriend so many people around the office and it just
          speaks of the friendly, welcoming, and accommodating culture that PALO
          has instilled in their Palowans making it a pleasant workplace for
          all.
        </Text>
        <br />
        <Text fontWeight="800" ml={style.header.ml}>
          Wrapped Up My First Project
        </Text>
        <Text ml={style.body.ml}>
          Unravel was my first project working as a software developer and there
          were many unknowns heading into it. With the help from other
          developers on the team as well as the unyielding guidance from the
          project lead, we were able to deliver many features in a very short
          period of time, much to the satisfaction of the client. The project
          was undeniably challenging but allowed me to grow in many aspects.
        </Text>
        <br />
      </>
    ),
    a_thousand_words: (
      <>
        <FauxInputLine text="a_thousand_words" />
        <br />
        <Text>Modal Opened</Text>
        <br />
      </>
    ),
    feedback: (
      <>
        <FauxInputLine text="feedback" />
        <br />
        <Text fontWeight="800" ml={style.header.ml}>
          Flexi-Work Arrangements
        </Text>
        <Text ml={style.body.ml}>
          - Allow for employees to WFH or WFO at their own discretion
        </Text>
        <br />
        <Text fontWeight="800" ml={style.header.ml}>
          Designated Collaboration Areas
        </Text>
        <Text ml={style.body.ml}>
          - Create designated areas catered specificially for collaboration and
          meetings
        </Text>
        <Text ml={style.body.ml}>
          - This might be more conducive for face-to-face meetings and to avoid
          disturbing others in the office
        </Text>
        <br />
      </>
    ),
  };
  const [input, setInput] = useState("");
  const [render, setRender] = useState([]);
  const [visible, setVisible] = useState(true);
  const endOfPage = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const scrollToBottom = () => {
    endOfPage.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [render]);

  const handleSubmit = (command) => {
    if (command.toLowerCase() === "clear") {
      setVisible(true);
      setRender([]);
      return;
    }
    if (Object.keys(content).indexOf(command.toLowerCase()) === -1) {
      setRender([
        ...render,
        <>
          <FauxInputLine text={command.toLowerCase()} />
          <br />
          <Text>I'm sorry, I don't recognise that command!</Text>
          <br />
          <Text>Type 'help' to view a list of commands</Text>
          <br />
        </>,
      ]);
      setVisible(true);
      return;
    }
    if (command.toLowerCase() === "a_thousand_words") {
      onOpen();
    }
    setRender([...render, content[command.toLowerCase()]]);
    setVisible(true);
  };

  return (
    <Flex
      h="100vh"
      w="100vw"
      bg="linear-gradient(90deg, rgba(5,204,152,1) 0%, rgba(255,175,59,1) 53%, rgba(239,128,53,1) 100%)"
      align="center"
      justify="center"
    >
      <Flex
        direction="column"
        w={{ base: "100%", lg: "70%" }}
        h={{ base: "100%", lg: "70%" }}
        overflow="hidden"
      >
        <Flex
          bg="#404040"
          minH="30px"
          h="30px"
          w="100%"
          borderRadius="10px 10px 0 0"
          align="center"
          justify="space-between"
          display={{ base: "none", lg: "flex" }}
        >
          <Flex minW="33%">
            <Box
              borderRadius="50%"
              w="15px"
              h="15px"
              bg="#FF605C"
              ml="10px"
              mr="5px"
            />
            <Box
              borderRadius="50%"
              w="15px"
              h="15px"
              bg="#FFBD44"
              ml="5px"
              mr="5px"
            />
            <Box
              borderRadius="50%"
              w="15px"
              h="15px"
              bg="#00CA4E"
              ml="5px"
              mr="5px"
            />
          </Flex>
          <Text
            w="33%"
            textAlign="center"
            color="#a6a2a2"
            fontWeight="bold"
            fontFamily="Arial"
          >
            Matt's Probation Journey
          </Text>
          <Text w="33%" />
        </Flex>
        <Flex
          w="100%"
          grow="1"
          bg="#262626"
          borderRadius={{ base: "", lg: "0 0 10px 10px" }}
          direction="column"
          overflow="hidden"
        >
          <Box overflowY="scroll" w="100%" h="100%" p="10px">
            <Typist cursor={{ show: false }}>
              <Text>Welcome!</Text>
              <br />
              <Text>Type 'help' to view a list of commands</Text>
              <Text>Or hit [Tab] to cycle through them</Text>
            </Typist>
            <br />
            {render.map((x, i) => (
              <Box key={x + i}>{x}</Box>
            ))}
            <InputLine
              input={input}
              setInput={setInput}
              handleSubmit={(e) => handleSubmit(e)}
              setVisible={setVisible}
              visible={visible}
              options={Object.keys(content)}
            />
            <Box ref={endOfPage} />
          </Box>
        </Flex>
      </Flex>
      <FocusLock disabled={isOpen ? false : true} group="group2">
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
          <ModalOverlay />
          <ModalContent minW="50vw" bg="#262626">
            <ModalCloseButton />
            <ModalBody minW="50vw" h="100%" pt="40px">
              <Carousel>
                <Flex h="100%" maxH="80%" align="center">
                  <Image src="/images/MicrosoftTeams-image.png" alt="image" />
                </Flex>
                <Flex h="100%" maxH="80%" align="center">
                  <Image
                    src="/images/MicrosoftTeams-image (1) (1).png"
                    alt="image"
                  />
                </Flex>
                <Flex h="100%" maxH="80%" align="center">
                  <Image
                    src="/images/MicrosoftTeams-image (2).png"
                    alt="image"
                  />
                </Flex>
                <Flex h="100%" maxH="80%" align="center">
                  <Image
                    src="/images/MicrosoftTeams-image (3).png"
                    alt="image"
                  />
                </Flex>
                <Flex h="100%" maxH="80%" align="center">
                  <Image
                    src="/images/MicrosoftTeams-image (5).png"
                    alt="image"
                  />
                </Flex>
              </Carousel>
            </ModalBody>
          </ModalContent>
        </Modal>
      </FocusLock>
    </Flex>
  );
}
