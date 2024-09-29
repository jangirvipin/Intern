import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import Show from "./Show";

export default function Item({selectcat}){
    return (
        <div>
            {selectcat && 
      selectcat.map((item2: { title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; })=>(
         <Show item2={item2} />
      ))
    }
        </div>
    )
}