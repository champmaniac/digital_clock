// import React, { useState } from 'react';


// const App = () => {
//   const state = useState();
//   const [count,setCount] = useState(0); 


//   const IncNum = () => {
//     setCount(count+1);
//     // console.log("clicked" + count++);
//   };
//   return (
//     <React.Fragment>
//       <h1> {count} </h1>
//       <button onClick={IncNum}> Click Me</button>
//     </React.Fragment>
//   );
// };
// export default App;


// This above code was for getting knowledge about useState and hooks!
// along with array destructing.



// import React, { useState } from 'react';

// const App = () => {

//   let newTime = new Date().toLocaleTimeString();

//   const [ctime, setCtime] = useState(newTime);

//   const UpdateTime = () => {
//     newTime = new Date().toLocaleTimeString();
//     setCtime(newTime);
//   };
//   return (
//     <React.Fragment>
//       <h1> {ctime} </h1>
//       <button onClick={UpdateTime}> Get Time </button>
//     </React.Fragment>
//   );
// };

// export default App;


// THIS CODE IS FOR CREATING TIME CHANGE/ REFRESHING ON CLICKING BUTTON


import React, { useState } from 'react';

const App =()=>{

  let time = new Date().toLocaleTimeString();

  const [ctime, setCtime] = useState(time);

  const UpdateTime =()=>{
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };

  setInterval(UpdateTime,1000)
  return(
    <React.Fragment>
    <h1> {ctime} </h1>
    </React.Fragment>
  );
};

export default App;