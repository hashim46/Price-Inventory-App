function LoggedInStatusBar({ user, setUser }) {

  return (
    <div>
    <br/>
    {user ? <div style={{ color: 'grey'}} >Logged in user: {user}</div >: <div> ...</div>}
    </div>
  );
}

export default LoggedInStatusBar