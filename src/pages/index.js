import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import KeyFeature from 'sections/key-feature';
import SecurePayment from 'sections/secure-payment';
import CoreFeature from 'sections/core-feature';
import WorkFlow from 'sections/workflow';
import MessengerCustomerChat from 'react-messenger-customer-chat';
export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Apollon Lab Studios" />
          <Banner />
          <KeyFeature />
          <SecurePayment />
          <CoreFeature />
          <WorkFlow />
          <MessengerCustomerChat pageId="100838041817677" appId="252601093131267" />,
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
