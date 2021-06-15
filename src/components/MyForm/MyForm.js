import React from "react";

function MyForm() {
    return (
        <form className="myForm">
            <label>Email:</label>
            <input type="email" />
            <label>user name:</label>
            <input type="text" />
            <label>password:</label>
            <input type="password" autoComplete="current-password" />
        </form>
    );
}

export default MyForm;
