function login() {
    fetch(`${API}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            mobile: loginMobile.value,
            otp: loginOtp.value
        })
    })
    .then(res => res.json())
    .then(data => {
        alert(data.message);
        if (data.success) {
            localStorage.setItem("bb_logged_in", "true");
            localStorage.setItem("bb_mobile", loginMobile.value);
            window.location.href = "index.html";
        }
    });
}

function register() {
    fetch(`${API}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: regName.value,
            mobile: regMobile.value,
            otp: regOtp.value
        })
    })
    .then(res => res.json())
    .then(data => {
        alert(data.message);
        if (data.success) {
            localStorage.setItem("bb_logged_in", "true");
            localStorage.setItem("bb_mobile", regMobile.value);
            window.location.href = "index.html";
        }
    });
}

localStorage.setItem("bb_logged_in", "true");
localStorage.setItem("bb_mobile", mobile);

