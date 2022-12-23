// import { useState, useEffect } from 'react';
// import {
//   useUser,
//   useSupabaseClient,
//   Session
// } from '@supabase/auth-helpers-react';
// import { Database } from '../utils/database.types';
// type Profiles = Database['public']['Tables']['profiles']['Row'];

// export default function Account({ session }: { session: Session }) {
//   const supabase = useSupabaseClient<Database>();
//   const user = useUser();
//   const [loading, setLoading] = useState(true);
//   const [username, setUsername] = useState<Profiles['username']>(null);

//   useEffect(() => {
//     getProfile();
//   }, [session]);

//   async function getProfile() {
//     try {
//       setLoading(true);
//       if (!user) throw new Error('No user');

//       let { data, error, status } = await supabase
//         .from('profiles')
//         .select(`username`)
//         .eq('id', user.id)
//         .single();

//       if (error && status !== 406) {
//         throw error;
//       }

//       if (data) {
//         setUsername(data.username);
//       }
//     } catch (error) {
//       alert('Error loading user data!');
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   }

//   async function updateProfile({
//     username
//   }: {
//     username: Profiles['username'];
//   }) {
//     try {
//       setLoading(true);
//       if (!user) throw new Error('No user');

//       const updates = {
//         id: user.id,
//         username,
//         updated_at: new Date().toISOString()
//       };

//       let { error } = await supabase.from('profiles').upsert(updates);
//       if (error) throw error;
//       alert('Profile updated!');
//     } catch (error) {
//       alert('Error updating the data!');
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <div className="form-widget">
//       <div>
//         Account page
//         {/* <label htmlFor="email">Email</label>
//         <input id="email" type="text" value={session.user.email} disabled />
//       </div>
//       <div>
//         <label htmlFor="username">Username</label>
//         <input
//           id="username"
//           type="text"
//           value={username || ''}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//       </div>
//       <div>
//         <button
//           className="button primary block"
//           onClick={() => updateProfile({ username })}
//           disabled={loading}
//         >
//           {loading ? 'Loading ...' : 'Update'}
//         </button>
//       </div>

//       <div>
//         <button
//           className="button block"
//           onClick={() => supabase.auth.signOut()}
//         >
//           Sign Out
//         </button> */}
//       </div>
//     </div>
//   );
// }

export default function account( ){
    return(
        <div>
            <h2>Account page</h2>
        </div>
    )
}