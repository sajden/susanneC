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
  id?: string;  // Ensure id is optional
  t: TFunction;
}

const MiddleBlock = ({ title, description, text, button, id, t }: MiddleBlockProps) => { // Destructure id here
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <MiddleBlockSection id={id}>  {/* Apply the id to the section */}
      <Slide direction="up" triggerOnce>
        <Row justify="center" align="middle">
          <Col lg={12} md={12} sm={24} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content><em>{t(description)}</em></Content>
              <Content>{t(text)}</Content>
              {button && (
                <a href="mailto:susanne.castwall@leadingskills.se" style={{ textDecoration: 'none' }}>
                <Button name="emailButton">
                  {t(button)}
                </Button>
              </a>
            )}
            </ContentWrapper>
          </Col>
          <Col lg={12} md={12} sm={24} xs={24}>
            <SvgIcon src="mamma4.png" width="100%" height="auto" />
          </Col>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
