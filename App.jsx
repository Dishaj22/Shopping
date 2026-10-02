// // // import { useRef } from "react";
// // // import CustomVideo from "./Component/CustomVideo";

// // // function App() {
// // //   const videoRef = useRef(null);

// // //   function handlePlay() {
// // //     videoRef.current.play();
// // //   }

// // //   function handlePause() {
// // //     videoRef.current.pause();
// // //   }

// // //   return (
// // //     <div>
// // //       <h1>Custom Video</h1>

// // //       <CustomVideo
// // //         ref={videoRef}
// // //         src="https://lorem.video/720p"

// // //       />

// // //       <button onClick={handlePlay}>Play</button>
// // //       <button onClick={handlePause}>Pause</button>
// // //     </div>
// // //   );
// // // }

// // // export default App;
// // import ImageSlider from "./Component/ImageSlider";

// // function App() {
// //     return (
// //         <>
// //             <ImageSlider />
// //         </>
// //     );
// // }

// // export default App;

// import { Routes, Route, NavLink } from "react-router-dom";

// import "./App.css";

// function Home() {
//   return (
//     <h1>Home Page</h1>
//   );
// }

// function About() {
//   return (
//     <h1>About Page</h1>
//   );
// }

// function Contact() {
//   return (
//     <h1>Contact Page</h1>
//   );
// }

// function NotFound() {
//   return (
//     <h1>404 - Page Not Found</h1>
//   );
// }

// function App() {
//   return (
//     <div>
//       <nav>
//         <NavLink to="/">Home</NavLink>
//         <NavLink to="/about">About</NavLink>
//         <NavLink to="/contact">Contact</NavLink>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
import {Link, Routes, Route, useParams} from "react-router-dom";

const users = [
    {id: 1, name: "Alice"},
    {id: 2, name: "Bob"}
]

function Directory(){
    return(
        <div>
           <h1>Users</h1>
           {users.map((user)=>(
            <div key={user.id}>
                <Link to={`/users/${user.id}`}>
                {user.name}</Link>
                 </div>
           ))}
        </div>

    )
}

function UserProfile() {
  const { id } = useParams();

  const user = users.find(
    (user) => user.id === parseInt(id)
  );

  if(!user){
    return(
        <h2>User Not Found</h2>
    )
  }

  return (
    <h2>{user.name}</h2>
  );
}

function App(){
    return(
        <div>
            <h1>User Directory</h1>
            <Directory/>
    
        <Routes>
            <Route path="/users/:id" element={<UserProfile/>}/>
            </Routes>    

        </div>
    )
}
export default App;
