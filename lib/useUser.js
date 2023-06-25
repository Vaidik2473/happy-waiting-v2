import { useEffect, useState, createContext, useContext } from 'react';
import supabase from './supabaseClient';

export const UserContext = createContext(undefined);

export const UserContextProvider = ({ children }) => {
  const [userLoaded, setUserLoaded] = useState(false);
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
      setUser(session?.user ?? null);
    };
  
    fetchSession();    
  
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
  
        if (event === 'SIGNED_IN') {
          // Call insertOrUpdateUserProfile when the user logs in
          insertOrUpdateUserProfile();
        }
      }
    );
  
    return () => {
      authListener?.unsubscribe();
    };
  }, []);
  

  const insertOrUpdateUserProfile = async (details) => {
    if (!user) return;
  
    const { data, error } = await supabase
      .from('user_profiles')
      .update(
        {  additional_info: details },
      )
      .eq('user_id', user.id)

  
    if (error) {
      console.error('Error updating user profile:', error);
    } else {
      if (data && data.length > 0) {
        setUserDetails(data[0]);
      } else {
        console.error('No data returned after upsert operation.');
      }
    }
  };
    

  const getUserDetails = () => supabase.from('user_profiles').select('*').single();

  useEffect(() => {
    if (user) {
      Promise.allSettled([getUserDetails()]).then((results) => {
        const userDetailsPromise = results[0];

        if (userDetailsPromise.status === 'fulfilled')
          setUserDetails(userDetailsPromise.value.data);

        setUserLoaded(true);
      });
    }
  }, [user]);

  const value = {
    // ...value,
    session,
    user,
    userDetails,
    userLoaded,
    subscription,
    signIn: () =>
    supabase.auth.signInWithOAuth({
        provider: 'google',
      }),
    signUp: () =>
      supabase.auth.signUp({
        provider: 'google',
      }),
    signOut: () => {
      setUserDetails(null);
      setSubscription(null);
      return supabase.auth.signOut();
    },
    insertOrUpdateUserProfile,

  };

  

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error(`useUser must be used within a UserContextProvider.`);
  }
  return context;
};
