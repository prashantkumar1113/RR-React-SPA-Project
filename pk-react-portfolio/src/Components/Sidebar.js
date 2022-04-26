import React from "react";
import {useState, useEffect} from "react";

export default function Sidebar() {
    //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
    let [githubUser, setGithubUser] = useState({
        avatar_url: "prashantkumar1113",
    });
    // useEffect(() => {
    //     fetch("https://api.github.com/users/prashantkumar1113/", {
    //         headers: {
    //             Accept: "application/vnd.github.v3+json",
    //         },
    //     })
    //         .then((response) => response.json)
    //         .then((resData) => {
    //             setGithubUser(resData);
    //             console.log(resData);
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //             setGithubUser({avatar_url: "Test"});
    //         });
    // }, []);

    return (
        <>
            {githubUser.avatar_url}
            <br />
            <i class="fab fa-facebook"></i>
            <br />
            <i class="fab fa-twitter"></i>
            <br />
            <i class="fab fa-github"></i>
            <br />
            <i class="fab fa-linkedin"></i>
            <br />
            <i class="fab fa-behance"></i>
            <br />
            <i class="fab fa-instagram"></i>
            <br />
            <i class="fab fa-pinterest"></i>
        </>
    );
}
