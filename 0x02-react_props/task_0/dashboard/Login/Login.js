import React from react;

function Login (){
    return (
        <div className="App-footer">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email"> Email:</label>
        <input type='email' name='email' placeholder='Enter your email'></input>

        <label htmlFor="password"> Password:</label>
        <input type='password' name='password' placeholder='Enter your password'></input>

        <button>OK</button>
      </div>

    )
}