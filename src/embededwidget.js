
import Modal from './modal.js';
import React, { useState } from 'react';
function UserInfo(props) {
  const [showModal, setShowModal] = React.useState(false);
  const [signInEmail, setName] = useState(props.config.name);
  const [signInPassword, setPrice] = useState(props.config.price);
  const [currency, setCurrency] = useState(props.config.currency);
  

  function handleSignInEmailFieldChange(event) {
    event.preventDefault();
    setName(event.target.value);
  }

  function handleSignInPasswordFieldChange(event) {
    event.preventDefault();
    setPrice(event.target.value);
  }

  function handleCurrency(event) {
    event.preventDefault();
    setCurrency(event.target.value);
  }

  async function handleSignIn(event) {
    event.preventDefault();
    fetch('https://fakestoreapi.com/products/1',{
            method:"PUT",
            body:JSON.stringify(
                {
                    title: signInEmail,
                    price: signInPassword,
                    category: currency
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))

    try {
      // Sign In logic using signInEmail and signInPassword state
      
    } catch (err) {
      // Remediation logic
      
    }
  }


    return (
      <div className="UserInfo">
    <div className="flex flex-col">
  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Title</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
             
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-2 py-2 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
    
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">{props.config.name}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{props.config.price}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
              <p className="text-indigo-600 hover:text-indigo-900">{props.config.currency}</p>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <button onClick={() => setShowModal(!showModal)} className="text-red-600 hover:text-red-900">Edit</button>
              </td>
            </tr>

           
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

<>
     
     {showModal ? (
       <>
         <div
           className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
         >
           <div className="relative w-auto my-6 mx-auto max-w-3xl">
             {/*content*/}
             <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
               {/*header*/}
               <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                 <h3 className="text-3xl font-semibold" style={{color:'black'}}>
                   Update
                 </h3>
                 <button
                   className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                   onClick={() => setShowModal(false)}
                 >
                   <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                     ×
                   </span>
                 </button>
               </div>
               {/*body*/}
               <div className="relative p-6 flex-auto" style={{color:'black'}}>
                 <div>
                    <label>Name </label>
                    <input
                    style={{borderColor:'black'}}
                      type="text"
                      placeholder=""
                      defaultValue={signInEmail}
                      onChange={(e) => handleSignInEmailFieldChange(e)}
                    />
                    <br/>
                    <label>Price </label>
                    <input
                      type="text"
                      placeholder=""
                      value={signInPassword}
                      onChange={(e) => handleSignInPasswordFieldChange(e)}
                    /><br/>

                    <label>Currency </label>
                    <input
                      type="text"
                      placeholder=""
                      value={currency}
                      onChange={(e) => handleCurrency(e)}
                    /><br/>
                  
                    
                  </div>
               </div>
               {/*footer*/}
               <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                 <button
                   className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                   type="button"
                   onClick={() => setShowModal(false)}
                 >
                   Close
                 </button>
                 <button
                   className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                   type="button"
                   onClick={handleSignIn}
                 >
                   Save Changes
                 </button>
               </div>
             </div>
           </div>
         </div>
         <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
       </>
     ) : null}
   </>


      </div>

      
    );
  }

 

  export default UserInfo;