import { useState, useEffect } from 'react';
import { useUser } from '@/lib/useUser';
import { Loading, Spacer } from "@nextui-org/react";
import supabase from '@/lib/supabaseClient';
import { data } from 'autoprefixer';
import Update_modal from '@/components/Update_modal';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';




export default function Dashboard  () {
    const [jsonData, setJsonData] = useState(null);

    const [details, setDetails] = useState({
        // mobile_number:'',
        // user_type:'',
        // street:'',
        // city:'',
        // state:'',
        // zip_code:'',

        favoriteColor: '',
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

    const [additionalInfo, setAdditionalInfo] = useState('');
      
    useEffect(() => {
        if (!user) {
            return; // User is not logged in, exit the effect
          }
        async function fetchUserDetails() {
          const { data, error } = await supabase
            .from('user_profiles')
            .select()
            .eq('user_id', user.id);
          console.log(data);
      
          if (error) {
            console.error(error);
          } else if (data && data.length === 0) {
            // Insert user ID since data is null
            const { data: insertedData, error: insertError } = await supabase
              .from('user_profiles')
              .insert([{ user_id: user.id }]);
              
            if (insertError) {
              console.error(insertError);
            } else {
              console.log('User ID inserted successfully');
            }
          } else if (data && data.length > 0) {
            setAdditionalInfo(data[0].additional_info[5]);
            setJsonData(data[0]); // Set the JSON data
                      console.log('User is present in user_profiles');
          }
        }
      
        fetchUserDetails();
    }, [user]);      
      


  
      
  return (
    <div>
        <Navbar/>

            {user==null ? (
                <div className="relative max-h-screen grid place-items-center mt-[300px]">
                    <div className='overflow-hidden p-4 bg-slate-100 rounded-xl '>
                    <Loading size="xl" css={{ padding:'4px',}}/>
                    </div>
                </div>
             


            ):(
                <>
                <div className="container mx-auto px-4">
                    <main className="py-20">
                        <h1 className="text-5xl font-bold mb-20 ">User Profile</h1>
                        <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/5 mb-6 md:mb-0">
                        <img
                            src={user.user_metadata.avatar_url}
                            alt="User Profile"
                            className="rounded-full mx-auto w-1/2 md:w-full h-auto"
                        />
                        <p className='text-2xl text-center mt-10 font-bold'>{user.user_metadata.name}</p>
                        <p className='text-xl text-center mt-5 '>{user.email}</p>
                        {/* <p className='text-xl text-center mt-5 '>{user.id}</p> */}

                        <div className='text-center mt-5 px-10'>
                        <p className='btn bg-rose-500 w-full hover:bg-rose-600 text-white' onClick={() => signOut()}>Logout</p>
                        </div>

                        </div>
                        <div className="  w-full md:w-4/5 md:ml-6  px-0 md:px-20">
                                <div className='border shadow-lg rounded-2xl p-5 md:p-17'>
                                    <h1 className="text-xl font-bold">{user.user_metadata.name}</h1>
                                    <p className="mb-4">{user.email}</p>
                                    {jsonData ? (
                                        <>
                                        
                                            <p>Mobile Number</p>
                                            <p className='mb-8 p-2 border rounded-lg bg-slate-100'>{jsonData.additional_info.mobile_number}</p>
                                            <p>City</p>
                                            <p className='mb-8 p-2 border rounded-lg bg-slate-100'>{jsonData.additional_info.city}</p>

                                            <p>State </p>
                                            <p className='mb-8 p-2 border rounded-lg bg-slate-100'>{jsonData.additional_info.state}</p>

                                            <p>Street</p>
                                            <p className='mb-8 p-2 border rounded-lg bg-slate-100'>{jsonData.additional_info.street}</p>

                                            <p>ZipCode</p>
                                            <p className='mb-8 p-2 border rounded-lg bg-slate-100'>{jsonData.additional_info.zip_code}</p>

                                        </>
                                        ) : (
                                        'Loading...'
                                        )}

                                        <button className="btn" onClick={()=>window.my_modal_3.showModal()}>Update Details</button>
                                        <Update_modal></Update_modal>



                                </div>
                        </div>
                    </div>      
                    </main>
                    </div>
                    </>

            )}

    
    </div>
  )
}


  

