import addToMailchimp from "gatsby-plugin-mailchimp";
import React, { useState } from "react";

import Section from "@components/Section";
import Headings from "@components/Headings";

import styled from "@emotion/styled";
import mediaqueries from "@styles/media";

const InPageSubscription: React.FunctionComponent<{}> = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    addToMailchimp(email)
      .then(data => {
        if (data.result === "error") {
          throw data;
        }

        setSubscribed(true);
        setEmail("");

        setTimeout(() => {
          setSubscribed(false);
        }, 6000);
      })
      .catch(error => {
        setError(error.msg);
      });
  }

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.currentTarget.value);
    setError("");
  }

  return (
    <Section narrow>
      <SubscriptionContainer>
        <Content>
          <Heading>
            Join our email list and get notified about new content
          </Heading>
          <Text>
            Be the first to receive our latest content with the ability to
            opt-out at anytime. 
          </Text>
          <Form onSubmit={handleSubmit} hasError={error}>
            <Input
              placeholder="your@email.com"
              name="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              hasError={error}
            />
            <Button
              type="submit"
              hasError={error}
              subscribed={subscribed}
              disabled={subscribed}
            >
              {subscribed ? <CheckMarkIcon /> : "Subscribe"}
            </Button>
            {error && <Error dangerouslySetInnerHTML={{ __html: error }} />}
          </Form>
        </Content>
      </SubscriptionContainer>
    </Section>
  );
};

export default InPageSubscription;

const SubscriptionContainer = styled.div`
  text-align: left;
  align-items: center;
  position: relative;
  display: flex;
  max-width: 630px;
  flex-direction: column;
  padding: 35px 0 55px;
  margin: 25px auto 65px auto;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.05);
  background: ${p => p.theme.colors.accent};
  z-index: 1;

  ${mediaqueries.desktop`
    max-width: 500px;
    padding: 50px 0 0;
    text-align: center;
  `}

  ${mediaqueries.phablet`
    margin: 40px auto 60px;
  `}
`;

const Content = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 580px;

  ${mediaqueries.desktop`
    h3 {
      padding: 0 50px;
    }
  `}

  ${mediaqueries.phone`
    h3 {
      padding: 0 24px;
    }
  `}
`;

const Heading = styled(Headings.h3)`
  font-family: "Noe Text";
  font-weight: 700 !important;
  padding: 0px 60px 15px 60px;
  color: ${p => p.theme.colors.onAccent};

  ${mediaqueries.desktop`
    margin-bottom: 15px;
  `}
`;

const Text = styled.p`
  margin: 0 auto 30px;
  color: ${p => p.theme.colors.lightGrey};
  line-height: 1.618;
  padding: 0 60px;

  ${mediaqueries.desktop`
    padding: 0 26px;
    margin: 0 auto 25px;
  `}
`;

const Form = styled.form<{ hasError: string }>`
  text-align: center;
  position: relative;
  &::after {
    content: ">";
    position: absolute;
    left: 45px;
    top: 10px;
    color: ${p => (p.hasError ? p.theme.colors.error : p.theme.colors.onAccent)};

    ${mediaqueries.desktop`
    left: 34px;
    top: 11px;
  `}
  }
`;

const Input = styled.input<{ hasError: string }>`
  position: relative;
  background: ${p =>
    p.hasError
      ? p.theme.colors.errorBackground
      : p.theme.colors.inputBackground};
  border-radius: 35px;
  border: none;
  padding: 13px 21px 13px 35px;
  width: 471px;
  color: ${p => p.theme.colors.onAccent};

  ::placeholder {
    color: ${p => p.theme.colors.lightGrey};
    opacity: 1;
  }

  :-ms-input-placeholder {
    color: ${p => p.theme.colors.lightGrey};
  }

  ::-ms-input-placeholder {
    color: ${p => p.theme.colors.lightGrey};
  }

  ${mediaqueries.desktop`
    width: calc(100% - 36px);
    margin: 0 18px;
    padding: 14px 14px 14px 30px;
    margin-bottom: 30px;
  `}
`;

const Button = styled.button<{ hasError: string; subscribed: boolean }>`
  position: absolute;
  left: 363px;
  top: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0px;
  width: 161px;
  height: 46px;
  border: 1px solid
    ${p => (p.hasError ? p.theme.colors.error : p.theme.colors.onAccent)};
  color: ${p => (p.hasError ? p.theme.colors.error : p.theme.colors.onAccent)};
  background: ${p => (p.subscribed ? p.theme.colors.onAccent : "transparent")};
  font-weight: 500;
  border-radius: 35px;
  letter-spacing: 0.42px;
  transition: border-color 0.2s var(--ease-in-out-quad),
    background 0.2s var(--ease-in-out-quad), color 0.2s var(--ease-in-out-quad);

  &:hover {
    background: ${p =>
      p.hasError ? p.theme.colors.error : p.theme.colors.onAccent};
    color: ${p => p.theme.colors.accent};
  }

  &[disabled] {
    cursor: not-allowed;
  }

  svg * {
    fill: ${p => p.theme.colors.background};
  }

  ${p => mediaqueries.desktop`
    position: relative;
    height: 60px;
    width: 100%;
    top: 0;
    left: 0;
    border: none;
    border-radius: 0;
    border-top: 1px solid ${p.theme.colors.horizontalRule};

    &:hover {
      color: initial;
      background: initial;
    }
  `}
`;

const Error = styled.div`
  position: absolute;
  left: 35px;
  bottom: -20px;
  color: ${p => p.theme.colors.error};
  font-size: 12px;

  a {
    color: ${p => p.theme.colors.error};
    text-decoration: underline;
  }

  ${mediaqueries.desktop`
    left: 50px;
    top: 50px;
  `}
`;

const CheckMarkIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.00016 16.1698L4.83016 11.9998L3.41016 13.4098L9.00016 18.9998L21.0002 6.99984L19.5902 5.58984L9.00016 16.1698Z"
      fill="#08080B"
    />
  </svg>
);
