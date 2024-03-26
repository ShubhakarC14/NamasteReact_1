import { useEffect, useState } from "react";
const User = (props) => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(1);
  const [userInfo, setUserInfo] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch("https://api.github.com/users/shubhakarc");
    const json = await data.json();
    setUserInfo(json);
  };
  return (
    <div className="user-card">
      {/* <h2>Count:{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <h2>Count1:{count1}</h2>
      <button onClick={() => setCount1(count1 + 1)}> + </button>
      <button onClick={() => setCount1(count1 - 1)}> - </button> */}
      <img src={userInfo.avatar_url} />
      <h1>Name:{userInfo.name}</h1>
      <h4>Location: {userInfo.location}</h4>
      <h4>Email: 89shubhakar@gmail.com</h4>
    </div>
  );
};
export default User;
