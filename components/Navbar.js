import { useState } from 'react';
import { Dropdown, Avatar, Text, Grid, User, Button, Modal, Input, Row, Checkbox } from "@nextui-org/react";
import { useUser } from '@/lib/useUser';
import Link from 'next/link';


const Navbar = () => {

  const { user, signIn, signOut } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
<div className="navbar backdrop-blur-lg md:px-20 px-0 bg-white bg-opacity-80  sticky top-0">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-lg dropdown-content mt-3 z-[1] gap-4 p-8 text-xl shadow  rounded-box w-52  backdrop-blur-lg bg-white">
      <li><Link href='/' className='text-lg'>Home</Link></li>
    <li><Link href='/Dahboard' className='text-lg'>Features</Link></li>
    <li><Link href='/Pricing' className='text-lg'>Pricing</Link></li>

      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl font-bold">Happy Waiting</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><Link href='/' className='text-lg'>Home</Link></li>
    <li><Link href='/Dahboard' className='text-lg'>Features</Link></li>
    <li><Link href='/Pricing' className='text-lg'>Pricing</Link></li>

    </ul>
  </div>
  <div className="navbar-end">
  {user == null ? (
    <a className="btnPrimary text-lg" onClick={()=>window.my_modal_5.showModal()}><span className='text-sm md:text-xl'>Sign in</span></a>
  ):(
    <div className='me-2'>
              <Grid >
                <Dropdown placement="bottom-right">
                  <Dropdown.Trigger>
                    <Avatar
                      size="lg"
                      as="button"
                      color="primary"
                      src={user.user_metadata.avatar_url}
                    />
                  </Dropdown.Trigger>
                  <Dropdown.Menu color="primary" aria-label="Avatar Actions">
                    <Dropdown.Item key="profile" css={{ height: "$18" }}>
                      <Text b color="inherit" css={{ d: "flex" }}>
                        Signed in as
                      </Text>
                      <Text b color="inherit" css={{ d: "flex" }}>
                      {user.email}
                      </Text>
                    </Dropdown.Item>
                  
                    <Dropdown.Item key="Memberships" withDivider>
                      <Link href='/Scan'>Scan</Link>
                    </Dropdown.Item>

                    <Dropdown.Item key="dashboard" withDivider>
                      <Link href='/Dashboard'>Dashboard</Link>
                    </Dropdown.Item>

                    <Dropdown.Item key="coupon" withDivider >
                      <Link href='/Copouns' className=''>Coupons</Link>
                    </Dropdown.Item>

                    <Dropdown.Item onClick={() => signOut()} key="logout" color="error" withDivider>
                      <p onClick={() => signOut()}>Log Out</p>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Grid>
              </div>
  )}

  </div>
</div>  

);
};

export default Navbar;
