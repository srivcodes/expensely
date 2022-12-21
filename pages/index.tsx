import LoginForm from '../components/login-form';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Expensely</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <LoginForm />
      </main>
    </div>
  );
}
