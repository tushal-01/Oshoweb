function togglePassword() {
    const pass = document.getElementById("pass");

    if (pass.type === "password") {
        pass.type = "text";
        document.getElementById("eye").innerHTML = "🙈";
    } else {
        pass.type = "password";
        document.getElementById("eye").innerHTML = "👁️";
    }
}