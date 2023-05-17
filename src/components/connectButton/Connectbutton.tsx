"use client";

import React, { useMemo, useState } from 'react'
import { getZeroDevSigner, getSocialWalletOwner, ZeroDevSigner } from '@zerodevapp/sdk'
import {
  SocialWallet,
} from '@zerodevapp/social-wallet';


declare global {
  interface Window {
    ethereum: any;
  }
}

function ConnectButton() {
  const [address, setAddress] = useState<string>()
  const [loading, setLoading] = useState(false)

  console.log("First Address")
  console.log(address)

  const socialWallet = useMemo(() => {
    return new SocialWallet()
  }, [])

  const createWallet = async () => {

    console.log("Second Address")
    console.log(address)

    try {

      setLoading(true)

      const signer = await getZeroDevSigner({
        projectId: 'b5486fa4-e3d9-450b-8428-646e757c10f6',
        owner: await getSocialWalletOwner('b5486fa4-e3d9-450b-8428-646e757c10f6', socialWallet)
      })


      const userAddress = await signer.getAddress();
      setAddress(userAddress)

      // try {
      //   const nonce: string = await signUpFlow(userAddress)
      //   if (!nonce) {
      //     throw new Error('No Nonce Found');
      //   } 
      //   const message = `My App Auth Service Signing nonce: ${nonce}`;
      //   let signature = await signer.signMessage(message)

      //   alert(`Your signed message: $(signature}`)

      //   const token = await login(userAddress, signature)

      //   new CurrentToken().set({token: token.data});

      //   setAddress(userAddress)

      //   setAddress(userAddress)
      // }

    }
    catch (e) {

      console.log(e)
    }
    finally {
      setLoading(false)
    }

  }

  const disconnect = async () => {
    await socialWallet.disconnect();
    setAddress(undefined)


  }

  return (

    <center style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div>
        {!address && <button className='mb-2 hover:bg-gray-300 bg-gray-400 hover:rounded-2xl rounded-xl text-red-500 hover:text-red-600 italic hover:font-bold transition-all shadow-xl shadow-green-500 hover:shadow-red-400 p-3 border-blue-600 hover:border-orange-400 border-2' onClick={createWallet} disabled={loading}>{loading ? 'loading...' : 'Connect Wallet'}</button>}
        {!!address &&
          <button className='mb-2 hover:bg-gray-300 bg-gray-400 hover:rounded-2xl rounded-xl text-red-500 hover:text-red-600 italic hover:font-bold transition-all shadow-xl shadow-green-500 hover:shadow-red-400 p-3 border-blue-600 hover:border-orange-400 border-2' onClick={disconnect} disabled={loading}>Disconnect</button>
        }
      </div>
      <div>
        <label className="text-purple-500 hover:text-pink-500 text-xl italic hover:font-bold transition-all shadow-xl shadow-purple-700 hover:shadow-yello-400"> {address} </label>
      </div>
    </center>

  )
}

export default ConnectButton






// "use client";

// import React, { useMemo, useState } from 'react'
// import { getZeroDevSigner, getSocialWalletOwner, ZeroDevSigner } from '@zerodevapp/sdk'
// import {
//   SocialWallet,
// } from '@zerodevapp/social-wallet';
// import { CurrentToken, getUserClient } from '@/utils/localStorage';



// declare global {
//   interface Window {
//     ethereum: any;
//   }
// }

// function ConnectButton() {

//   const user = getUserClient();

//   console.log("user ", user)

//   const [address, setAddress] = useState(user?.publicAddress)
//   const [loading, setLoading] = useState(false)

//   const socialWallet = useMemo(() => {
//     return new SocialWallet()
//   }, [])


//   const fetchUser = async (address: string) => {
//     const res = await fetch(`http://localhost:3000/api/auth/get-user-nonce/${address}`, {
//       cache: 'no-cache'
//     })
//     return res.json();
//   }

//   const signUp = async (address: string) => {
//     const newUser = await fetch("http://localhost:3000/api/auth/signup", {
//       method: "post",
//       body: JSON.stringify({ publicAddress: address })
//     })
//     return newUser.json()
//   }

//   const logout = async () => {
//     const res = await fetch(`http://localhost:3000/api/auth/logout`, {
//       cache: 'no-cache'
//     })
//     return res.json();
//   }

//   const login = async (address: string, signature: string) => {
//     const newUser = await fetch("http://localhost:3000/api/auth/login", {
//       method: "post",
//       body: JSON.stringify({ publicAddress: address, signature })
//     })
//     return newUser.json()
//   };

//   const signUpFlow = async (address: string) => {
//     // try {
//     const user = await fetchUser(address)
//     if (user.nonce) {
//       return user.nonce;
//     }
//     const newUser = await signUp(address)
//     console.log('newUser ', newUser)
//     return newUser.user.nonce
//     // }
//   };

//   const createWallet = async () => {

//     try {

//       setLoading(true)
//       const signer = await getZeroDevSigner({
//         projectId: 'a20209e6-ed96-4d2f-82c3-0cdd9c469cdf',
//         owner: await getSocialWalletOwner('a20209e6-ed96-4d2f-82c3-0cdd9c469cdf', socialWallet)
//       })


//       const userAddress = await signer.getAddress();

//       try {
//         const nonce: string = await signUpFlow(userAddress)
//         if (!nonce) {
//           throw new Error('No Nonce Found');
//         }
//         const message = `My App Auth Service Signing nonce: ${nonce}`;
//         let signature = await signer.signMessage(message)

//         alert(`Your signed message: ${signature}`)

//         const token = await login(userAddress, signature)

//         new CurrentToken().set({ token: token.data });

//         setAddress(userAddress)

//         setAddress(userAddress)
//       }
//       catch (err) {
//         console.log("Oh! No Error Bro! 😨😰😱", err)
//         setAddress('')

//       }

//     }
//     catch (e) {

//       console.log(e)
//       setAddress('')

//     }
//     finally {
//       setLoading(false)
//     }
//   }

//   const disconnect = async () => {
//     await socialWallet.disconnect();
//     new CurrentToken().remove();
//     await logout()
//     setAddress('')
//   }


//   return (
//     <center style={{ width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
//       <div>
//         {!address && <button className='bg-gray-300 p-3' onClick={createWallet} disabled={loading}>{loading ? 'loading...' : 'Connect Wallet'}</button>}
//         {!!address &&
//           <button className='hover:bg-gray-300 bg-gray-400 hover:rounded-2xl rounded-xl text-red-500 hover:text-red-600 italic hover:font-bold transition-all shadow-xl shadow-green-500 p-3 border-blue-600 hover:border-orange-400 border-2' onClick={disconnect} disabled={loading}>Disconnect</button>
//         }
//       </div>
//       <div>
//         <label className="text-purple-500 hover:text-pink-500 text-xl italic hover:font-bold transition-all shadow-xl shadow-red-700"> {address} </label>
//       </div>
//     </center>
//   )
// }

// export default ConnectButton