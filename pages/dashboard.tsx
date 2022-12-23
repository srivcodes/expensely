import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';

export default function Dashboard({ user }) {
  const supabase = useSupabaseClient();
  const router = useRouter();
  const logout = async () => {
    await supabase.auth.signOut();
    return router.push('/login');
  };
  return (
    <div>
      Hello {user.email}
      <button onClick={logout}>Sign Out</button>
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  // Create authenticated Supabase Client
  const supabase = createServerSupabaseClient(ctx);
  // Check if we have a session
  const {
    data: { session }
  } = await supabase.auth.getSession();

  if (!session)
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    };

  return {
    props: {
      initialSession: session,
      user: session.user
    }
  };
};
