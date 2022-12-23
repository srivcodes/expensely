import { Formik, Field, Form, FormikHelpers } from 'formik';
import { Layout } from '../components/Layout';
import { useRouter } from 'next/router';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Values {
  email: string;
  password: string;
}

const formInitialValues = {
  email: '',
  password: ''
};

export default function LoginForm() {
  const router = useRouter();
  const supabase = useSupabaseClient();
  const[error, setError] = useState(" ");
  const onSubmit = async (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    setSubmitting(true);
    const response = await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.password
    });
    console.log('response', response);
    if(response.error){
      setError(response.error.message)
    }
    if (response.data.user) {
      router.push('/dashboard');
    }
    setSubmitting(false);
  };

  const checkUserSession = async () => {
    try {
      const session = await supabase.auth.getSession();
      console.log('session', session);
      if (session.data) {
        router.push('/dashboard');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    checkUserSession();
  }, []);

  return (
    <Layout>
      <div className="flex flex-col items-center mt-28">
        <h1 className="text-3xl mb-4">Expensely</h1>
        <Formik initialValues={formInitialValues} onSubmit={onSubmit}>
          <Form className="ml-8 p-1">
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
            <span className='text-red-700'>{error}</span>
            <div className="flex flex-col m-2">
              <button
                type="submit"
                className="border-solid border-2 border-black px-2 py-1 mb-4"
              >
                Login
              </button>
              <Link href="/signup">Sign Up</Link>
            </div>
          </Form>
        </Formik>
      </div>
    </Layout>
  );
}

