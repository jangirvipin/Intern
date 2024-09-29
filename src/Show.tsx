import { useState } from "react";
import Review from "./Review";
export default function Show({item2}:any){
    const [visible ,setvisible]=useState(false);
    const a=item2.images
    
    console.log(item2);
    return (
    <div className="m-10 border-black border-2 rounded-md font-light ">
            <div className="pl-10 py-10 flex justify-between h-1/2">

               <div className="flex flex-col w-1/3   justify-around ">
                <div className="text-6xl font-bold bg-gradient-to-r from-violet-800 to-orange-500 bg-clip-text text-transparent"><h1>{item2.brand} </h1></div>
                <div className="mt-28  font-medium text-xl">{item2.title}</div>
                <div className="mt-4 mb-10">{item2.description}</div>
                <div className="font-bold text-xl">{item2.returnPolicy}</div>
                <div className="">{item2.shippingInformation}</div>
                <div className="">{item2.warrantyInformation}</div>
               </div>

                <div className=" w-1/3 overflow-auto  ">
                       <img src={a[0]} className=" " alt=""></img>
                </div>

                <div className=" w-1/3">
                <div className="border-b-2  border-gray-400 mb-4 mt-16 pt-6">
                    
                <div className=" font-bold mb-4 text-xl">{item2.title}</div>
                <div className="">
                    <p>Dimensions </p>
                    <div className="">depth:{item2.dimensions.depth}</div>
                <div className="">height: {item2.dimensions.height}</div>
                <div className="">width: {item2.dimensions.width}</div>
                </div>
              

                <div className="flex justify-start ">
                <div className=" rounded-md pr-10 py-3  cross line-through ">{item2.price+100}</div>
                <div className="bg-yellow-300 w-1/3 rounded-md px-6 py-3 mb-4 ">{item2.price}</div>
                </div>
             
                <div className="">DiscountPercentage :{item2.discountPercentage}</div>
                <div className="flex mb-8">
                    <div className="mr-2">CHECK IN-STORE AVAILABILITY :</div>
                <div className="">{item2.availabilityStatus}</div>
                </div>

                </div>
               
               
                <button className="bg-black text-white rounded-md px-6 py-3 mr-5">Add To Bag</button>
                
                    <button className="bg-blue-600 text-white px-8  py-3 rounded-md " onClick={()=>{setvisible(!visible)}}>Reviews</button>
                
               
                </div>

            </div>
            {visible &&
                 <Review  Review={item2.reviews}/>
            }
           
    </div>)
}