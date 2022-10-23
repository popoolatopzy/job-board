export default function Expenses() {
    return (
      <div className="container">
 
    
  <center>
    <div style={{width:'270px',marginLeft:'0px',marginTop:'200px'}}>
        <h2>Login</h2>
        <p>login as agent</p>
        <form role="form">
            <div className="form-group">
                <label for="usr">Email:</label>
                <input type="text" className="form-control" id="usr"/>
            </div>
            <div className="form-group">
            <label for="pwd">Password:</label>
            <input type="password" className="form-control" id="pwd"/>
            </div>
            <div className="form-groug">
                <br/>
                <input type="submit" className="btn-success" value="login"/>
              
            </div>
        </form>
    </div></center>
</div>

    );
  }