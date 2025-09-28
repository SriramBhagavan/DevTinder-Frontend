import axios from "axios";
import React from "react";
import { BASE_URL } from "../utils/constants";

const Premium = () => {

    const handleBuyClick = async (type)=>{
        const order=await axios.post(BASE_URL+"/payment/create",{membershipType:type},{withCredentials:true})
        

        const {amount,keyId,currency,notes,order_id}=order.data;
        const options = {
        key: keyId, 
        amount, 
        currency,
        name: 'Dev Tinder',
        description: 'Test Transaction',
        order_id: order_id, 
        
        prefill: {
          name: notes.firstName+" "+notes.lastName,
          email: notes.emailId,
          contact: '9999999999'
        },
        theme: {
          color: '#F37254'
        },
      };

         const rzp = new window.Razorpay(options);
      rzp.open();
    } 
  return (
    <div className="m-10">
      <div className="flex w-full">
        {/* Silver Card */}
        <div className="card bg-base-300 rounded-box grid h-80 grow place-items-center p-4">
          <h1 className="text-xl font-bold">Silver Membership</h1>
          <ul className="list-disc list-inside text-left">
            <li>Chat with other people</li>
            <li>100 connection requests per day</li>
            <li>Blue Tick 3 months</li>
          </ul>
          <button className="btn btn-primary mt-4" onClick={()=>handleBuyClick("silver")}>Buy Silver</button>
        </div>

        <div className="divider divider-horizontal">OR</div>

        {/* Gold Card */}
        <div className="card bg-base-300 rounded-box grid h-80 grow place-items-center p-4">
          <h1 className="text-xl font-bold">Gold Membership</h1>
          <ul className="list-disc list-inside text-left">
            <li>Chat with other people</li>
            <li>Infinite connection requests per day</li>
            <li>Blue Tick 6 months</li>
          </ul>
          <button className="btn btn-warning mt-4" onClick={()=>handleBuyClick("gold")}>Buy Gold</button>
        </div>
      </div>
    </div>
  );
};

export default Premium;
