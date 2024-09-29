import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

export default function Review({Review}:any){
    return(
        <div className="flex justify-between p-10 overflow-auto bg-gray-200">
            {Review.map((item: { reviewerName: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; reviewerEmail: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; date: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; comment: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; rating: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; })=>(<div className= "">
                    
                  
                        
                        <div className="font-bold text-xl">{item.reviewerName}</div>
                        <div className="">{item.reviewerEmail}</div>
                        
                        <div className="mb-10">On: {item.date}</div>
                    
                
                
                <div className="text-xl  uppercase">{item.comment}</div>
                
                <div className="">Rating: {item.rating}</div>
             
                
                </div>
            ))
            }
        </div>
    )
}