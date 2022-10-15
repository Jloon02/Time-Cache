// import './loginPage.css';
// import React from 'react'

// function Login() {
//     return (
//         <form method="POST">
//             <input type="text" id="ID" placeholder="username"></input>
//             <br></br>
//             <input type="text" id="Password" placeholder="password"></input>
//             <br></br>
//             <button type="button" id="login" onclick="check()">Log-In</button>
//         </form>




//         // <div id = "login_container">
//         // <form>
//         //     <label for="username"></label>
//         //     <input type="text" id="username" placeholder="Username" name="username" required>
//         //     <label for="password"></label>
//         //     <input type="password" id="password" placeholder="Password" name="password" required>
//         //     <div id = "incorrect_credentials" class = "center">
//         //         <b>Your username or password is not correct!</b>
//         //     </div>

//         //     <div class="buttons">
//         //         <button type="button" id="login" onclick="handleLogin()">Log-In</button>
//         //         <button type="button" id="signup">Sign-Up</button>
//         //     </div>
//         // </form>

//         // </div>


//     );
// }

function handleLogin() {
    var form = $('form').serializeArray();

    if ((form[0].value == "user") && (form[1].value == "pass")) {
        // return data
        console.log("correct credentials");

    } else {
        $("#incorrect_credentials").show();
    }
}

//export default Login;