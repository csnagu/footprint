function fetchUserInfo(userId) {
    fetch(`https://api.github.com/users/${encodeURIComponent(userId)}`)
        .then(response => {
            console.log(response.status);
            if (!response.ok) {
                console.error("サーバーエラー", response);
            } else {
                response.json().then(userInfo => {
                    console.log(userInfo);
                });
            }
        }).catch(error => {
            console.error("ネットワークエラー", error);
        });
}
