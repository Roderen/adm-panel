import "./CreateUser.scss";
import React from 'react';
import {Formik, Form, Field} from 'formik';
import {Button, Container, FormHelperText} from "@mui/material";
import {useCreateUserMutation} from "../../store/api/api.js"
import CreateFormInput from "../../Components/CreateFormInput/CreateFormInput.jsx";

const CreateUser = () => {
  const [createUser] = useCreateUserMutation();

  function validateEmail(value) {
    let error;
    if (!value) {
      error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }
    return error;
  }

  function validateUsername(value) {
    let error;
    if (!value || value.length < 3) {
      error = 'Required';
    }
    return error;
  }

  function validatePassword(value) {
    let error;
    if (!value || value.length < 3) {
      error = 'Required';
    }
    return error;
  }

  return (
    <Container style={{ maxWidth: '450px', backgroundColor: '#fff', borderRadius: '10px', padding: '20px' }}>
      <Formik
        initialValues={{
          username: '',
          password: '',
          email: '',
          role: 'user',
        }}
        onSubmit={values => {
          createUser(values)
            .unwrap()
            .then(() => {
              window.location.href = '/';
            })
            .catch(({ data }) =>
              alert(data.message)
            );
        }}
      >
        {({ errors, touched, isValidating }) => (
          <Form className="form">
            <div className="form__container">
              <Field className="form__field" name="username" type="text" validate={validateUsername}
                     as={CreateFormInput} />
              {errors.username && touched.username &&
                <FormHelperText className="form__label" id="component-error-text">{errors.username}</FormHelperText>}
            </div>

            <div className="form__container">
              <Field className="form__field" name="password" type="password" validate={validatePassword}
                     as={CreateFormInput} />
              {errors.password && touched.password &&
                <FormHelperText className="form__label" id="component-error-text">{errors.password}</FormHelperText>}
            </div>

            <div className="form__container">
              <Field className="form__field" name="email" type="email" validate={validateEmail} as={CreateFormInput} />
              {errors.email && touched.email &&
                <FormHelperText className="form__label" id="component-error-text">{errors.email}</FormHelperText>}
            </div>

            <Button type="submit" variant="contained">Create</Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default CreateUser;