import { React } from "react";

// function Greet() {
//   return (
//     <div>
//         <h1>Hello mayur</h1>
//     </div>
//   )   
// };

// export const Greet = ({name, patName}) => { 
//     // console.log(props)   
//     return (
//         <div>
//             <h1>Hello  {name} is {patName}</h1>
//             {/* {props.children} */}
//         </div>
//     ) 
// }

// export const Greet = props => { 
//     // console.log(props)   
//     return (
//         <div>
//             <h1>Hello  {props.name} is {props.patName}</h1>
//             {/* {props.children} */}
//         </div>
//     ) 
// }

export const Greet = props => { 
    // console.log(props)   
    const {name, patname} = props
    return (
        <div>
            <h1>Hello  {name} is {patName}</h1>
            {/* {props.children} */}
        </div>
    ) 
}
// export default Greet;


