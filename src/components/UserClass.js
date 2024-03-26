import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = { userInfo: { name: "Dummy", location: "default" } };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/shubhakarc");
    const json = await data.json();

    this.setState({ userInfo: json });
    console.log(json);
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }
  render() {
    const { name, email, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        `{" "}
        {/* <h2>Count: {this.state.count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count1: this.state.count1 + 1,
            });
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count - 1,
              count1: this.state.count1 - 1,
            });
          }}
        >
          Decrement
        </button>
        <h2>Count1:{this.state.count1}</h2>` */}
        <img src={avatar_url} />
        <h1>Name: {name}</h1>
        <h4>email: {email}</h4>
        <h4>Location: {location}</h4>
      </div>
    );
  }
}
export default UserClass;
