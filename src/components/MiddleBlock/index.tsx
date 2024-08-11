import React from 'react';
import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";

interface MiddleBlockProps {
  title: string;
  description: string;
  text: string;
  button: string;
  t: TFunction;
}

const MiddleBlock = ({ title, description, text, button, t }: MiddleBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <MiddleBlockSection>
      <Slide direction="up" triggerOnce>
        <Row justify="center" align="middle">
          <Col lg={12} md={12} sm={24} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content><em>{t(description)}</em></Content>
              <Content>{t(text)}</Content>
              {button && (
                <Button name="submit" onClick={() => scrollTo("contact")}>
                  {t(button)}
                </Button>
              )}
            </ContentWrapper>
          </Col>
          <Col lg={12} md={12} sm={24} xs={24}>
            <SvgIcon src="susanne.svg" width="100%" height="auto" />
          </Col>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
