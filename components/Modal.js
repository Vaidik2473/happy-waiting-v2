import { useState } from 'react';
import supabase from '@/lib/supabaseClient'
import { useUser } from '@/lib/useUser';


export default function Modal  ()  {

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const { user, signIn, signOut } = useUser();
  console.log(user);
  const handleOAuthSignIn = async (provider) => {
    setLoading(true);
    const { error } = await signIn({ provider });
    if (error) {
      console.log(error.message)
      setMessage({ type: 'error', content: error.message });
    }
    setLoading(false);
  };
  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <form method="dialog" className="modal-box">
    <h3  className="font-bold text-lg">Sign in with Google</h3>
    <p onClick={() => handleOAuthSignIn('google')} className=" btn w-full btn-xl  border rounded-xl shadow mb-3 my-6 text-center"><img src='/images/google.svg' className='w-6 h-6'></img>Sign in with GOOGLE</p>
    <div className="modal-action">
      {/* if there is a button in form, it will close the modal */}
      <button  className="btn w-full md:w-32 bg-rose-500 hover:bg-rose-600 text-lg text-white">Close</button>
    </div>
  </form>
</dialog>

  )
}
