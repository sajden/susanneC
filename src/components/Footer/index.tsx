import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

 return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <NavLink to="/">
              <SvgIcon
                src="logo.svg"
                aria-label="homepage"
                width="201px"
                height="64px"
              />
            </NavLink>
            <Col lg={10} md={10} sm={12} xs={12}>
            </Col>
            <Col>
              <a href="mailto:susanne.castwall@leadingskills.se">
                <Chat>{t("Kontakta mig")}</Chat>
              </a>
              <SocialLink
                href="https://www.linkedin.com/in/susanne-castwall-247596a/"
                src="linkedin.svg"
              />
            </Col>
          </Row>
          <Para>i Sverige AB Org.nr 559376-8046 F-Skatt</Para>
        </Container>
      </FooterSection>
    </>
  );
};

export default withTranslation()(Footer);
