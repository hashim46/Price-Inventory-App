function LoggedInStatusBar({ user, setUser }) {

  return (
    <div style = {{position: "absolute", bottom: "0px"}}>
    <br/>
    <br/>
    <br/>
    <br/>
    {user ? <div style={{ color: 'black'}} >Logged in user: {user}</div >: <div style={{ color: 'grey'}}> You are not allowed to modify the Inventory or Location without log in</div>}
    </div>
  );
}

export default LoggedInStatusBar