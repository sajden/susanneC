import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import ServiceBlock from "../../components/ServiceBlock";
import ServiceData from "../../content/ServiceBlock.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="LSimg1.png"
        id="intro"
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        description={MiddleBlockContent.description}
        text={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
        id="middleblock"
      />
      <ContentBlock
        direction="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="LSteamwork3.png"
        id="about"
      />
      <ServiceBlock
        services={ServiceData.services}  // Use data from the JSON file
        title={ServiceData.title}        // Use data from the JSON file
        id="service"
      />
      
      {/* <ContentBlock
        direction="right"
        title={MissionContent.title}
        content={MissionContent.text}
        section={MissionContent.missions}  // Use the missions array
        icon="product-launch.svg"
        id="mission"
      /> */}
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
