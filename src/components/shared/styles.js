import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        --main-header-color: rgb(247, 249, 252);
    }

    @font-face {
        font-family: 'Montserrat';
        src: url(fonts/Montserrat-Bold.ttf);
    }

    .green {
        background-color: rgb(162, 235, 162);
    }

    .red {
        background-color: rgb(238, 63, 63) !important;
    }

    body {
        background-color: rgb(214, 214, 214);
        font-family: 'Montserrat';
        margin: 0;
    }

    .content {
        margin-top: 50px;
        margin-left: 50px;
    }



    h3 {
        width: 100%;
        font-size: 30px;
    }

    form {
        width: 100%;
    }



    label {
        font-family: inherit;
    }

    .button {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
        height: 100%;
        width: 100px;
        font-family: inherit;
        font-size: 13.3px;
        box-sizing: border-box;
        box-shadow: 0px 0px 1px 1px #1c0527;
        color: rgb(43, 30, 30);
        text-decoration: none;
    }

    a {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .header .button {
        background-color: var(--main-header-color);
    }

    .transparent {
        border: none;
        outline: none;
        box-shadow: none;
    }

    link {
        background-color: black;
    }

    .button:hover {
        filter: brightness(85%);
    }

    .button:active {
        filter: brightness(50%);
        color: white;
    }

    .button:focus {
        outline: none;
        box-shadow: none;
    }

    i {
        padding-right: 5px;
    }

    .vl {
        border-right: 1px solid rgb(43, 30, 30);
        height: 80%;
        padding-left: 10px;
    }

    .modal {
        position: absolute;
        width: 100%;
        height: 100%;
        margin: 0;
        top: 0;
        left: 0;
        background-color: rgba(31, 29, 41, 0.678);
    }

    input[type=submit] {
        display: block;
        margin: 10px auto;
    }

    input {
        border-radius: 10px;
        margin-left: 10px;
        border: 1px rgb(45, 63, 82) inset;
        font-family: inherit;
    }

    .modal .content {
        justify-content: center;
        border: rgb(37, 36, 36) solid 1px;
        border-radius: 6px;
        box-shadow: 1px 2px 4px 2px #1c0527;
        background-color: var(--main-header-color);
        text-align: center;
        border: 0;
        padding: 10px;
        margin: 0;
        position: absolute;
        left: 50%;
        top: 20%;
        transform: translate(-50%, -50%);
    }
    
    .header {
        background-color: var(--main-header-color);
        width: 100%;
        height: 125px;
        margin-bottom: 20px;
        display: grid;
        box-shadow: 1px 2px 4px 2px #1c0527;
    }
    
    .title {
        color: rgb(253, 255, 249);
        padding-left: 10px;
        font-size: 28px;
        font-family: Montserrat;
        background-color: rgb(70, 81, 184);
        display: inline-block;
    }
    
    .title h1 {
        display: inline;
        padding-left: 20px;
    }
    
    .nav {
        height: 100%;
        text-align: center;
        font-size: 20px;
    }
    
    .nav-right {
        float: right;
        height: 100%;
    }
    
    .nav .button {
        float: left;
    }
    
    .nav .user {
        float: left;
        height: 100%;
        display: flex;
        align-items: center;
        padding-left: 10px;
    }
`;
