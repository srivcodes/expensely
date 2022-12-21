import { Formik, Field, Form, FormikHelpers } from 'formik';

interface Values {
  email: string;
  password: string;
  name: string;
}

export default function LoginForm() {
  return (
    <div className="flex flex-col items-center mt-28">
      <h1 className="text-3xl mb-4">Expensely..</h1>
      <Formik
        initialValues={{
          email: '',
          password: '',
          name: ''
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form className="ml-8 p-1">
          <div className="mb-3">
            <Field
              className="border-solid border border-black px-2 py-1 rounded text-center"
              id="name"
              name="name"
              placeholder="Full Name"
              aria-describedby="usernameHelp"
            />
          </div>

          <div className="mb-3">
            <Field
              className="border-solid border border-black px-2 py-1 rounded text-center"
              id="email"
              name="email"
              placeholder="Email"
              aria-describedby="usernameHelp"
            />
          </div>

          <div className="mb-3">
            <Field
              className="border-solid border border-black px-2 py-1 rounded mb-4 text-center"
              id="password"
              name="password"
              placeholder="Password"
              type="password"
            />
          </div>
          <div className="flex flex-col m-2">
            <button
              type="submit"
              className="border-solid border-2 border-black px-2 py-1 mb-4"
            >
              Login
            </button>
            <button
              type="submit"
              className="border-solid border-2 border-black px-2 py-1"
            >
              Sign Up
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
