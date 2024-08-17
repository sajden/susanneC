import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { ContactProps, ValidationTypeProps } from "./types";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import { Button } from "../../common/Button";
import Block from "../Block";
import Input from "../../common/Input";
import TextArea from "../../common/TextArea";
import { ContactContainer, FormGroup, Span, ButtonContainer } from "./styles";
import emailjs from 'emailjs-com';

const Contact = ({ title, content, id, t }: ContactProps) => {
  const { values, errors, handleChange, handleSubmit } = useForm(validate);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm('service_8bt7ein', 'template_k0ytobz', e.currentTarget, 'B-g0UeJk8somguA47')
      .then((result) => {
        console.log(result.text);
        alert('Message Sent!');
      }, (error) => {
        console.log(error.text);
        alert('An error occurred, Please try again');
      });
  };

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type as keyof typeof errors];
    return <Span>{ErrorMessage}</Span>;
  };

  return (
    <ContactContainer id={id}>
      <Row justify="space-between" align="middle">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left" triggerOnce>
            <Block title={title} content={content} />
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="right" triggerOnce>
          <FormGroup autoComplete="off" onSubmit={sendEmail}>
  <Col span={24}>
    <Input
      type="text"
      name="Namn"
      placeholder="Ditt namn"
      value={values.name || ""}
      onChange={handleChange}
    />
    <ValidationType type="name" />
  </Col>
  <Col span={24}>
    <Input
      type="email"
      name="Email"
      placeholder="Din mail"
      value={values.email || ""}
      onChange={handleChange}
    />
    <ValidationType type="email" />
  </Col>
  <Col span={24}>
    <TextArea
      placeholder="Ditt meddelande"
      value={values.message || ""}
      name="Meddelande"
      onChange={handleChange}
    />
    <ValidationType type="message" />
  </Col>
  <ButtonContainer>
    <Button name="submit" htmlType="submit">{t("Skicka")}</Button>
  </ButtonContainer>
</FormGroup>

          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);
