import React, { Fragment } from "react";
import { Field, reduxForm } from "redux-form";
import { Form, Message, Segment } from "semantic-ui-react";

const renderCheckbox = field => (
  <Form.Checkbox
    checked={!!field.input.value}
    name={field.input.name}
    label={field.label}
    onChange={(e, { checked }) => field.input.onChange(checked)}
  />
);

const renderRadio = field => (
  <Form.Radio
    checked={field.input.value === field.radioValue}
    label={field.label}
    name={field.input.name}
    onChange={(e, { checked }) => field.input.onChange(field.radioValue)}
  />
);

const renderSelect = field => (
  <Form.Select
    label={field.label}
    name={field.input.name}
    onChange={(e, { value }) => field.input.onChange(value)}
    options={field.options}
    placeholder={field.placeholder}
    value={field.input.value}
  />
);

const renderTextArea = field => (
  <Form.TextArea
    {...field.input}
    label={field.label}
    placeholder={field.placeholder}
  />
);

const BaseForm = props => {
  const { handleSubmit, reset } = props;

  return (
    <Fragment>
      <Segment.Group>
        <Segment>
          <Form onSubmit={handleSubmit}>
            <Form.Group widths="equal">
              <Field
                component={Form.Input}
                label="Query String"
                name="query"
                placeholder="Query string"
              />
              <Field
                component={Form.Input}
                label="Salt"
                name="salt"
                placeholder="Salt"
              />
            </Form.Group>
          </Form>
        </Segment>
      </Segment.Group>
    </Fragment>
  );
};

export default reduxForm({
  form: "profile"
})(BaseForm);
