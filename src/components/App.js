import React from "react";
import { connect } from "react-redux";
import { Container, Divider, Message } from "semantic-ui-react";
import CryptoJS from "crypto-js/aes";

import BaseForm from "./BaseForm";
import IncludeContainer from "./IncludeContainer";

const App = props => (
  <Container>
    <Divider hidden />

    <Message>
      <Message.Header>Form data:</Message.Header>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </Message>
    <BaseForm />
    <Message>
      <Message.Header>Encrypted params:</Message.Header>
      <pre>
        {CryptoJS.encrypt(props.query || "", props.salt || "").toString()}
      </pre>
    </Message>
    <IncludeContainer salt={props.salt} />
  </Container>
);
const copyToClipboard = str => {
  const el = document.createElement("textarea");
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
};
const mapStateToProps = state => {
  return state.form.profile
    ? {
        values: state.form.profile.values,
        salt: (state.form.profile.values || {}).salt,
        query: (state.form.profile.values || {}).query
      }
    : {
        values: {}
      };
};

export default connect(mapStateToProps)(App);
