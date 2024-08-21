import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Requires CSS loader

import { ContentBlockProps } from "./types";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import {
  ContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
  StyledRow,
  ButtonWrapper,
  CarouselWrapper,
  MissionTitle,
  MissionContent,
  MissionImage,
  MissionCol, // Import the styled component
} from "./styles";

const ContentBlock = ({
  icon,
  title,
  content,
  section,
  button,
  t,
  id,
  direction,
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const isMissionSection = id === "mission";

  return (
    <ContentSection>
      <Fade direction={direction} triggerOnce>
        <StyledRow
          justify="space-between"
          align="middle"
          id={id}
          direction={direction}
        >
          {isMissionSection && (
            <Col span={24}>
              <h2>{t(title)}</h2> {/* Ensure the header is displayed */}
            </Col>
          )}
          {isMissionSection ? (
            <CarouselWrapper>
              <Carousel
                showThumbs={false}
                autoPlay={true}
                infiniteLoop={true}
                renderArrowPrev={(clickHandler, hasPrev, label) =>
                  hasPrev && (
                    <button
                      type="button"
                      onClick={clickHandler}
                      title={label}
                      style={{
                        position: "absolute",
                        zIndex: 2,
                        bottom: "0",
                        width: "60px",
                        height: "10%", // Cover full height
                        cursor: "pointer",
                        left: "0%", // Stick to the left side
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        opacity: "0.5", // Initial opacity for fading
                        transition: "opacity 0.3s ease", // Smooth transition for hover
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.opacity = "1"}
                      onMouseLeave={(e) => e.currentTarget.style.opacity = "0.5"}
                    >
                      <span style={{ color: "black", fontSize: "60px", transform: "rotate(0deg)", fontWeight: "bold" }}>
                        &#x2039;
                      </span>
                    </button>
                )}
                renderArrowNext={(clickHandler, hasNext, label) =>
                  hasNext && (
                    <button
                      type="button"
                      onClick={clickHandler}
                      title={label}
                      style={{
                        position: "absolute",
                        zIndex: 2,
                        bottom: "0%",
                        width: "60px",
                        height: "10%", // Cover full height
                        cursor: "pointer",
                        right: "0%", // Stick to the right side
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        opacity: "0.5", // Initial opacity for fading
                        transition: "opacity 0.3s ease", // Smooth transition for hover
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.opacity = "1"}
                      onMouseLeave={(e) => e.currentTarget.style.opacity = "0.5"}
                    >
                      <span style={{ color: "black", fontSize: "60px", transform: "rotate(-0deg)", fontWeight: "bold" }}>
                        &#x203A;
                      </span>
                    </button>
                )}
              >
                {section?.map((item, idx) => (
                  <div key={idx}>
                    <Row>
                      <MissionCol lg={11} md={11} sm={12} xs={0}>
                        <MissionImage src={item.icon} alt={item.title} />
                      </MissionCol>
                      <Col lg={13} md={13} sm={24} xs={24}>
                        <ContentWrapper isMissionSection={isMissionSection}>
                          <MissionTitle>{t(item.title)}</MissionTitle>
                          <MissionContent>{t(item.content)}</MissionContent>
                        </ContentWrapper>
                      </Col>
                    </Row>
                  </div>
                ))}
              </Carousel>
            </CarouselWrapper>
          ) : (
            <>
              {direction === "left" && (
                <Col lg={11} md={11} sm={12} xs={24}>
                  <SvgIcon src={icon} width="100%" height="100%" />
                </Col>
              )}
              <Col lg={11} md={11} sm={11} xs={24}>
                <ContentWrapper isMissionSection={isMissionSection}>
                  <h6>{t(title)}</h6>
                  <Content>{t(content)}</Content>
                  {direction === "right" && (
                    <ButtonWrapper>
                      {button && button.length > 0 && (
                        <>
                          <Button
                            color={button[0].color}
                            onClick={() => scrollTo("service")}
                            type="button"

                          >
                            {t(button[0].title)}
                          </Button>
                          {button.length > 1 && (
                            <Button
                              color={button[1].color}
                              onClick={() => scrollTo("middleblock")}
                              type="button"
                            >
                              {t(button[1].title)}
                            </Button>
                          )}
                        </>
                      )}
                    </ButtonWrapper>
                  )}
                  {direction === "left" && (
                    <ServiceWrapper>
                      <Row justify="space-between">
                        {section?.map(
                          (
                            item: {
                              title: string;
                              content: string;
                              icon: string;
                            },
                            id: number
                          ) => (
                            <Col key={id} span={11}>
                              <SvgIcon
                                src={item.icon}
                                width="60px"
                                height="60px"
                              />
                              <MinTitle>{t(item.title)}</MinTitle>
                              <MinPara>{t(item.content)}</MinPara>
                            </Col>
                          )
                        )}
                      </Row>
                    </ServiceWrapper>
                  )}
                </ContentWrapper>
              </Col>
              {direction === "right" && (
                <Col lg={11} md={11} sm={12} xs={0}>
                  <SvgIcon src={icon} width="100%" height="100%" />
                </Col>
              )}
            </>
          )}
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(ContentBlock);
