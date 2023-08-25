// const Hello = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <p>Hello {props.name}, you are {props.age} years old</p>
//     </div>
//   );
// };

const App = () => {
  const friends = ["peter", "Maya"];
  console.log(friends);
  return (
    <>
      <p>
      {friends}
      </p>
    </>
  );
};

export default App;
