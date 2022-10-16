// import { useState } from "react";
// import { BsArrowLeftShort,BsChevronDown, BsPerson, BsPersonCircle } from "react-icons/bs"
// import { AiFillEnvironment, AiOutlineFileText, AiOutlineLogout, AiOutlineSetting } from "react-icons/ai"
// import { RiDashboardFill } from "react-icons/ri";

// const SideNavbar = () => {
//     const [open, setOpen] = useState(true);
//     const [submenuOpen, setSubmenuOpen] = useState(false);

//     const admin = [
//         { title: "Dashboard" },
//         { title: "Students", spacing: true},
//     ]
//     const student = []
//     const teacher = [
//         {
//         title: "Teachers", icon:<BsPersonCircle/>,
//         submenu: true,
//         submenuItems: [
//             { title: "Announcements" }
//         ],
//         },
//         { title: "Profile", spacing: true , icon:<BsPerson/>},
//         { title: "Setting",icon:<AiOutlineSetting/> },
//         { title: "Logout",icon:<AiOutlineLogout/> },
//     ]

//     //assign user type to user variable
//     let user = teacher; 
//     let Menu = [];

//     if (user === admin) {
//         Menu = admin
//     } else if (user === student) {
//         Menu = student
//     } else if (user === teacher) {
//         Menu = teacher
//     }

//   // const Menus = [
//   //   { title: "Dashboard" },
//   //   { title: "Courses", icon:<AiOutlineFileText/> },
//   //   { title: "Students", spacing: true},
//   //   {
//   //     title: "Teachers", icon:<BsPersonCircle/>,
//   //     submenu: true,
//   //     submenuItems: [
//   //       { title: "Announcements" }
//   //     ],
//   //   },
//   //   { title: "Profile", spacing: true , icon:<BsPerson/>},
//   //   { title: "Setting",icon:<AiOutlineSetting/> },
//   //   { title: "Logout",icon:<AiOutlineLogout/> },
//   // ];
//     return (
//          <div className="flex"> 
//       <div className={`${open ? "w-72" : "w-30"} duration-300 h-screen p-5 pt-8 bg-lms-green relative`}>
//         <BsArrowLeftShort
//           className={`bg-lms-white text-lms-black text-3xl rounded-full absolute -right-3 w-7 top-9 border-2 border-lms-green cursor-pointer ${!open && "rotate-180"}`}
//           onClick={()=> setOpen(!open)}
//         />
//         <div className="inline-flex">
//           <AiFillEnvironment className= {`bg-lms-light-green text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${open && "rotate-[360deg]"}`} />
//           <h1 className={`text-lms-white origin-left font-medium text-2xl duration-300 ${!open && "scale-0"}`}>
//             LMS
//           </h1>
//         </div>
        
//         <ul className="pt-2">
//           {Menu.map((menu, index) => (
//             <>
//               <li
//                 key={index}
//                 className={`text-lms-black text-sm flex gap-x-4 cursor-pointer p-2 hover:bg-lms-light-green rounded-md ${menu.spacing ? "mt-9" : "mt-2"}`}>
//                 <span className="text-2xl block float-left">
//                   {menu.icon ? menu.icon : <RiDashboardFill />}
//                 </span>
//                 <span className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"}`}>{menu.title}</span>
//                 {menu.submenu && open &&(
//                   <BsChevronDown className={`${submenuOpen && "rotate-180"} mt-2`} onClick={() => setSubmenuOpen(!submenuOpen)} />
//                 )}
//               </li>

//               {menu.submenu && submenuOpen && open &&(
//                 <ul>
//                   {menu.submenuItems.map((submenuItem, index) => (
//                     <li key={index} className="text-lms-black text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-lms-light-green rounded-md">
//                       {submenuItem.title}
//                     </li>
//                   ))}
//                 </ul>
//                 )}
//             </>
//           ))}
//         </ul>

//       </div>
      

//       {/* <div className="p-7">
//           <h1 className="text-2xl font-semibold">Home Page</h1>
//       </div> */}
//   </div>
//     );
// }

// export default SideNavbar