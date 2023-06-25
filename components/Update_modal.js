import { useState, useEffect } from 'react';
import supabase from '@/lib/supabaseClient'
import { useUser } from '@/lib/useUser';


export default function Update_modal  ()  {
    const [details, setDetails] = useState({
        mobile_number:'',
        // user_type:'',
        street:'',
        city:'',
        state:'',
        zip_code:'',

        // favoriteColor: '',
        // Add other fields as needed
      });
      
    const { user, signIn, signOut } = useUser();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    // console.log(user);
    const handleOAuthSignIn = async (provider) => {
      setLoading(true);
      const { error } = await signIn({ provider });
      if (error) {
        console.log(error.message)
        setMessage({ type: 'error', content: error.message });
      }
      setLoading(false);
    };
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    const [additionalInfo, setAdditionalInfo] = useState('Loading...');
      

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        
        // Perform the update operation using Supabase
        try {
          await supabase
            .from('user_profiles')
            .update(
                {  additional_info: details },
              )
              .eq('user_id', user.id)
      
          alert('Details updated successfully');
        } catch (error) {
          console.error('Error updating user details:', error);
        }
      };

      const handleChange = (event) => {
        setDetails((prevDetails) => ({
          ...prevDetails,
          [event.target.name]: event.target.value,
        }));
      };
  return (
    <dialog id="my_modal_3" className="modal">
        <form method="dialog" className="modal-box">



            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 text-lg font-light bg-rose-500 hover:bg-rose-600 text-white top-2" type='submit'>✕</button>
            <h3 className="font-bold text-lg">Update Details</h3>

            <form onSubmit={handleSubmit} className='mt-5'>

                <p>Mobile number</p>
                <input
                    type="text"
                    name="mobile_number"
                    className='input w-full border border-gray-500'
                    value={details.mobile_number || ''}
                    onChange={handleChange}
                />
                
                <p className='mt-6 capitalize'>street</p>
                <input
                    type="text"
                    name="street"
                    className='input w-full border border-gray-500'
                    value={details.street || ''}
                    onChange={handleChange}
                />
                
                <p className='mt-6 capitalize'>city</p>
                <input
                    type="text"
                    name="city"
                    className='input w-full border border-gray-500'
                    value={details.city || ''}
                    onChange={handleChange}
                />
                
                <p className='mt-6 capitalize'>state</p>
                <input
                    type="text"
                    name="state"
                    className='input w-full border border-gray-500'
                    value={details.state || ''}
                    onChange={handleChange}
                />
                
                <p className='mt-6 capitalize'>zip_code</p>
                <input
                    type="text"
                    name="zip_code"
                    className='input w-full border border-gray-500'
                    value={details.zip_code || ''}
                    onChange={handleChange}
                />

                <p className='w-full btn bg-blue-500 text-white mt-6 capitalize' onClick={handleSubmit}>Update Profile</p>

                </form>

        </form>
    </dialog>

  )
}
