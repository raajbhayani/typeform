import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Home() {

    const [dropOpen, setDropOpen] = useState(false)
    const [dropItem, setDropItem] = useState("English")
    const [signIn, setSignIn] = useState()
    const [password, setPassword] = useState()
    const [formOpen, setFormOpen] = useState(false)
    const [agree, setAgree] = useState(false)

    const [radio1, setRadio1] = useState("")
    const [radio2, setRadio2] = useState("")
    const [radio3, setRadio3] = useState("")

    const [show, setShow] = useState(true)

    const signHandler = () => {
        setSignIn(true)

        setTimeout(() => {
            setShow(false)
        }, [1000])
    }

    const [isAllChecked, setIsAllChecked] = useState(true)

    const radioHandler = (event, radioNumber) => {
        switch (radioNumber) {
            case 1:
                setRadio1(event.target.value);
                break;
            case 2:
                setRadio2(event.target.value);
                break;
            case 3:
                setRadio3(event.target.value);
                break;
            default:
                break;
        }
    }

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    const agreeHandler = () => {
        setAgree(!agree)

        if (isAllChecked) {
            setRadio1("yes")
            setRadio2("yes")
            setRadio3("yes")

            setIsAllChecked(false)
        }
    }

    return (
        <div className='d-grid'>

            <div className="sc-4e85dbf4-1 fWhSUv snipcss-TNYQi grid-1" style={{ backgroundColor: "#191919", marginTop: '-3px' }}>
                <h1 className="sc-4e85dbf4-3 jfDCYB">
                    Sign up
                    <br />
                    and come on in
                </h1>
                <div>
                    <picture className="sc-95dfa289-0">
                        <img alt="Typeform product sample" loading="lazy" decoding="async" fetchpriority="low" role="presentation" src="./assets/images/product-sample@1x.webp" className="sc-d3a9e6c9-0 sc-95dfa289-1 gyeWGZ sc-4e85dbf4-2 dTTneq" />
                    </picture>
                </div>
                <p className="sc-4e85dbf4-4 cfbhxT">
                    © Typeform
                </p>
            </div>

            <div className="sc-bdb57cc3-2 gUSzFV snipcss0-0-0-1 snipcss-B6oBY grid-2">
                <div className="sc-bdb57cc3-3 dmMPQA snipcss0-1-1-2">
                    <div class="sc-a9e82213-4 jVmqcp">
                        <div role="menu" class={`sc-a9e82213-8 ${dropOpen ? "cEMsbE" : "iVeRCb"}`}>
                            <Link to="#" role="menuitem" data-testid="language-item" class="sc-a9e82213-0 sc-a9e82213-5 ikAZaU gWxfeL">
                                <span to="/" class="sc-a9e82213-1 sc-a9e82213-6 daWfLx bcYHMS" onClick={() => { setDropOpen(!dropOpen); setDropItem("English") }}>English</span></Link>
                            <Link to="/" role="menuitem" data-testid="language-item" class="sc-a9e82213-0 sc-a9e82213-5 ikAZaU gWxfeL" onClick={() => { setDropOpen(!dropOpen); setDropItem("Español") }}><span to="/es/" class="sc-a9e82213-1 sc-a9e82213-6 daWfLx bcYHMS">Español</span>
                            </Link>
                        </div>
                        <button class="sc-a9e82213-7 hZiXbG" onClick={() => setDropOpen(!dropOpen)}>
                            <div class="sc-a9e82213-2 hxVXWp">
                                <svg height="17" viewBox="0 0 20 20" width="17" xmlns="http://www.w3.org/2000/svg"><path d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zM9 17.9C5.1 17.4 2 14 2 10c0-.6.1-1.2.2-1.8L7 13v1c0 1.1.9 2 2 2v1.9zm6.9-2.5c-.3-.8-1-1.4-1.9-1.4h-1v-3c0-.6-.4-1-1-1H6V8h2c.6 0 1-.4 1-1V5h2c1.1 0 2-.9 2-2v-.4c2.9 1.2 5 4.1 5 7.4 0 2.1-.8 4-2.1 5.4z" fill="#5E5E5E" fill-rule="evenodd"></path></svg>
                            </div>
                            <span class="sc-a9e82213-1 bfnwlE">{dropItem}</span>
                            <div class="sc-a9e82213-3 jClUTf"><svg fill="none" height="5" viewBox="0 0 9 5" width="9" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M4.35156 2.80708L2.33394 0.789472C1.78653 0.24205 0.898985 0.242052 0.351563 0.789472L4.35156 4.78946L8.35156 0.789472C7.80411 0.242052 6.91658 0.242052 6.36917 0.789472L4.35156 2.80708Z" fill="#5E5E5E" fill-rule="evenodd"></path></svg>
                            </div>
                        </button>
                    </div>
                </div>

                <div className="sc-2c2ab938-0 aNntR snipcss0-1-1-15">
                    <p className="sc-2c2ab938-1 bwgtwM snipcss0-2-15-16">
                        Already have an account?
                    </p>
                    <div className="sc-9d706ad1-0 bJLdFb snipcss0-2-15-17">
                        <Link to="/" className="sc-9d706ad1-1 cdXYNd snipcss0-3-17-18">
                            Log in
                        </Link>
                    </div>
                </div>

                {signIn ?
                    <>
                        {show ?
                            <div className="sc-bdb57cc3-4 dnxiGH snipcss0-0-0-1 snipcss-rNQ7w">
                                <div className="sc-bdb57cc3-5 fwwXdp snipcss0-1-1-2">
                                    <Link aria-label="Typeform" to="/" title="Typeform" target="_top" className="sc-da9128ae-2 hbuBFL snipcss0-2-2-3">
                                        <div className="sc-da9128ae-3 dDgngr snipcss0-3-3-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={33} height={22} fill="none" className="snipcss0-4-4-5">
                                                <path fill="currentColor" fillRule="evenodd" d="M0 5.34C0 1.82 1.39 0 3.72 0c2.34 0 3.73 1.82 3.73 5.34V16c0 3.52-1.4 5.34-3.73 5.34S0 19.52 0 16V5.34ZM25.08 0h-7.7c-6.9 0-7.44 2.98-7.44 6.96l-.01 7.42c0 4.14.52 6.96 7.48 6.96h7.67c6.92 0 7.43-2.97 7.43-6.94V6.97c0-3.99-.53-6.97-7.43-6.97Z" clipRule="evenodd">
                                                </path>
                                            </svg>
                                            <span className="sc-da9128ae-0 bmXElW snipcss0-4-4-6">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={108} height={24} fill="none" className="sc-da9128ae-1 bOQHzD snipcss0-5-6-7">
                                                    <path fill="currentColor" d="M69.87 16.61c-2.22 0-3.37-1.83-3.37-4.08s1.13-3.99 3.37-3.99c2.29 0 3.37 1.82 3.37 3.99-.02 2.29-1.16 4.08-3.37 4.08ZM48.1 8.54c1.3 0 1.84.76 1.84 1.42 0 1.6-1.62 2.29-5.01 2.39 0-1.97 1.12-3.8 3.17-3.8Zm-14.44 8.07c-2.1 0-2.99-1.71-2.99-4.08 0-2.35.9-3.99 3-3.99 2.12 0 3.12 1.7 3.12 3.99 0 2.39-1.04 4.08-3.13 4.08Zm-17.8-10.4h-3.3l5.46 12.51c-1.04 2.31-1.6 2.89-2.32 2.89-.77 0-1.49-.62-2-1.16l-1.45 1.92a5.14 5.14 0 0 0 3.7 1.63c1.73 0 3.05-1 3.82-2.79l6.3-15.02h-3.24l-3.28 8.97-3.7-8.95Zm87.1 2.33c1.6 0 1.92 1.1 1.92 3.67v6.75h2.85v-8.52c0-3.07-2.1-4.4-4.05-4.4-1.73 0-3.31 1.07-4.2 3.06a4.01 4.01 0 0 0-3.96-3.07c-1.63 0-3.25 1.04-4.13 2.97V6.21h-2.85v12.73h2.85V13.5c0-2.74 1.44-4.96 3.4-4.96 1.6 0 1.9 1.1 1.9 3.67v6.75h2.86l-.02-5.46c0-2.74 1.46-4.96 3.42-4.96ZM80.14 6.21h-1.36v12.73h2.85v-4.88c0-3.09 1.36-5.18 3.39-5.18.52 0 .96.02 1.44.22l.44-3c-.36-.05-.68-.09-1-.09-2 0-3.45 1.38-4.29 3.15V6.21h-1.47Zm-10.28-.2c-3.77 0-6.31 2.87-6.31 6.5 0 3.76 2.58 6.57 6.31 6.57 3.8 0 6.38-2.89 6.38-6.57C76.23 8.86 73.6 6 69.87 6Zm-21.61 10.6a2.98 2.98 0 0 1-3.05-2.29c3.77-.16 7.46-1.08 7.46-4.4 0-1.91-1.89-3.89-4.6-3.89-3.64 0-6.1 2.97-6.1 6.5 0 3.68 2.42 6.57 6.05 6.57a6.62 6.62 0 0 0 5.39-2.49l-1.38-1.87c-1.47 1.5-2.37 1.87-3.77 1.87ZM34.22 6.01c-1.44 0-2.89.84-3.45 2.16V6.2h-2.84v17.73h2.84v-6.33c.6.91 1.99 1.51 3.21 1.51 3.8 0 5.8-2.8 5.8-6.6-.02-3.74-1.99-6.5-5.56-6.5Zm-19.97-4.9H.82v2.77h5.25v15.06h2.99V3.88h5.2V1.12Zm42.33 5.1h-1.7v2.55h1.7v10.18h2.85V8.76h2.76V6.21h-2.76V4.22c0-1.27.52-1.71 1.7-1.71.44 0 .84.12 1.38.3l.65-2.4A5.44 5.44 0 0 0 60.9 0c-2.73 0-4.33 1.63-4.33 4.46v1.75Z">
                                                    </path>
                                                </svg>
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                                <h2 className="sc-bdb57cc3-7 fZkklZ snipcss0-1-1-8">
                                    Get better data with conversational forms, surveys, quizzes &amp; more.
                                </h2>

                                <div role="status">
                                    <svg aria-hidden="true" class="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                    </svg>
                                    <span class="sr-only">Loading...</span>
                                </div>

                            </div> :
                            <div className="sc-bdb57cc3-4 dnxiGH snipcss0-0-0-1 snipcss-rNQ7w" style={{ marginTop: '0px' }}>
                                <div className="sc-bdb57cc3-5 fwwXdp snipcss0-1-1-2">
                                    <Link aria-label="Typeform" to="/" title="Typeform" target="_top" className="sc-da9128ae-2 hbuBFL snipcss0-2-2-3">
                                        <div className="sc-da9128ae-3 dDgngr snipcss0-3-3-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={33} height={22} fill="none" className="snipcss0-4-4-5">
                                                <path fill="currentColor" fillRule="evenodd" d="M0 5.34C0 1.82 1.39 0 3.72 0c2.34 0 3.73 1.82 3.73 5.34V16c0 3.52-1.4 5.34-3.73 5.34S0 19.52 0 16V5.34ZM25.08 0h-7.7c-6.9 0-7.44 2.98-7.44 6.96l-.01 7.42c0 4.14.52 6.96 7.48 6.96h7.67c6.92 0 7.43-2.97 7.43-6.94V6.97c0-3.99-.53-6.97-7.43-6.97Z" clipRule="evenodd">
                                                </path>
                                            </svg>
                                            <span className="sc-da9128ae-0 bmXElW snipcss0-4-4-6">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={108} height={24} fill="none" className="sc-da9128ae-1 bOQHzD snipcss0-5-6-7">
                                                    <path fill="currentColor" d="M69.87 16.61c-2.22 0-3.37-1.83-3.37-4.08s1.13-3.99 3.37-3.99c2.29 0 3.37 1.82 3.37 3.99-.02 2.29-1.16 4.08-3.37 4.08ZM48.1 8.54c1.3 0 1.84.76 1.84 1.42 0 1.6-1.62 2.29-5.01 2.39 0-1.97 1.12-3.8 3.17-3.8Zm-14.44 8.07c-2.1 0-2.99-1.71-2.99-4.08 0-2.35.9-3.99 3-3.99 2.12 0 3.12 1.7 3.12 3.99 0 2.39-1.04 4.08-3.13 4.08Zm-17.8-10.4h-3.3l5.46 12.51c-1.04 2.31-1.6 2.89-2.32 2.89-.77 0-1.49-.62-2-1.16l-1.45 1.92a5.14 5.14 0 0 0 3.7 1.63c1.73 0 3.05-1 3.82-2.79l6.3-15.02h-3.24l-3.28 8.97-3.7-8.95Zm87.1 2.33c1.6 0 1.92 1.1 1.92 3.67v6.75h2.85v-8.52c0-3.07-2.1-4.4-4.05-4.4-1.73 0-3.31 1.07-4.2 3.06a4.01 4.01 0 0 0-3.96-3.07c-1.63 0-3.25 1.04-4.13 2.97V6.21h-2.85v12.73h2.85V13.5c0-2.74 1.44-4.96 3.4-4.96 1.6 0 1.9 1.1 1.9 3.67v6.75h2.86l-.02-5.46c0-2.74 1.46-4.96 3.42-4.96ZM80.14 6.21h-1.36v12.73h2.85v-4.88c0-3.09 1.36-5.18 3.39-5.18.52 0 .96.02 1.44.22l.44-3c-.36-.05-.68-.09-1-.09-2 0-3.45 1.38-4.29 3.15V6.21h-1.47Zm-10.28-.2c-3.77 0-6.31 2.87-6.31 6.5 0 3.76 2.58 6.57 6.31 6.57 3.8 0 6.38-2.89 6.38-6.57C76.23 8.86 73.6 6 69.87 6Zm-21.61 10.6a2.98 2.98 0 0 1-3.05-2.29c3.77-.16 7.46-1.08 7.46-4.4 0-1.91-1.89-3.89-4.6-3.89-3.64 0-6.1 2.97-6.1 6.5 0 3.68 2.42 6.57 6.05 6.57a6.62 6.62 0 0 0 5.39-2.49l-1.38-1.87c-1.47 1.5-2.37 1.87-3.77 1.87ZM34.22 6.01c-1.44 0-2.89.84-3.45 2.16V6.2h-2.84v17.73h2.84v-6.33c.6.91 1.99 1.51 3.21 1.51 3.8 0 5.8-2.8 5.8-6.6-.02-3.74-1.99-6.5-5.56-6.5Zm-19.97-4.9H.82v2.77h5.25v15.06h2.99V3.88h5.2V1.12Zm42.33 5.1h-1.7v2.55h1.7v10.18h2.85V8.76h2.76V6.21h-2.76V4.22c0-1.27.52-1.71 1.7-1.71.44 0 .84.12 1.38.3l.65-2.4A5.44 5.44 0 0 0 60.9 0c-2.73 0-4.33 1.63-4.33 4.46v1.75Z">
                                                    </path>
                                                </svg>
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                                <h2 className="sc-bdb57cc3-7 fZkklZ snipcss0-1-1-8">
                                    Get better data with conversational forms, surveys, quizzes &amp; more.
                                </h2>
                                <div className="sc-8647c37f-1 kRDunh signup-okta snipcss0-1-1-9" id="okta-widget">
                                    <main data-se="auth-container" tabIndex={-1} id="okta-sign-in" className="auth-container main-container no-beacon snipcss0-2-9-10 style-wcP56">
                                        <div className="okta-sign-in-header auth-header snipcss0-3-10-11">
                                            <div data-type="beacon-container" className="beacon-container snipcss0-4-11-12">
                                            </div>
                                        </div>
                                        <div className="auth-content snipcss0-3-10-13">
                                            <div className="auth-content-inner snipcss0-4-13-14">
                                                <div className="registration snipcss0-5-14-15">
                                                    <form onSubmit={handleSubmit(onSubmit)} data-se="o-form" slot="content" id="form29" className="o-form o-form-edit-mode snipcss0-6-15-16">
                                                        <div data-se="o-form-content" className="o-form-content o-form-theme clearfix snipcss0-7-16-17">
                                                            <h2 data-se="o-form-head" className="okta-form-title o-form-head snipcss0-8-17-18">
                                                                Get better data with conversational forms, surveys, quizzes &amp; more.
                                                            </h2>
                                                            <div className="o-form-error-container snipcss0-8-17-19" data-se="o-form-error-container">
                                                            </div>
                                                            <div className="o-form-fieldset-container snipcss0-8-17-20" data-se="o-form-fieldset-container">
                                                                <div data-se="o-form-fieldset" className="o-form-fieldset o-form-label-top snipcss0-9-20-21 o-form-input o-form-has-errors">
                                                                    <div data-se="o-form-input-container" className="o-form-input  snipcss0-10-21-22">
                                                                        <span data-se="o-form-input-email" className="o-form-input-name-email o-form-control okta-form-input-field input-fix ">
                                                                            <input type="text" placeholder="Email" name="email" id="input38" aria-label="Email" autoComplete="off" data-qa="field-email" className="snipcss0-12-23-24 focus-visible"  {...register("email", {
                                                                                required: "Email is required.",
                                                                                pattern: {
                                                                                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                                                                    message: "Email is not valid."
                                                                                }
                                                                            })} />
                                                                        </span>

                                                                        {errors.email && <p id="input-container-error101" class="error-margin errorMsg okta-form-input-error o-form-input-error o-form-explain" role="alert"><span class="icon icon-16 error-16-small" role="img" aria-label="Error" ></span>This field cannot be left blank</p>}
                                                                    </div>
                                                                </div>
                                                                <div data-se="o-form-fieldset" className="o-form-fieldset o-form-label-top snipcss0-9-20-25 o-form-has-errors">
                                                                    <div data-se="o-form-input-container" className="o-form-input snipcss0-10-25-26">
                                                                        <span data-se="o-form-input-password" className="o-form-input-name-password o-form-control okta-form-input-field input-fix snipcss0-11-26-27">
                                                                            <input type={`${password ? "text" : "password"}`} placeholder="Password" name="password" id="input45" aria-label="Password" autoComplete="off" data-qa="field-password" min-length={10} max-length={72} passwordrules="minlength: 10; maxlength: 72; required: lower; required: upper; required: digit; required: [!&quot;#$%&'()*+,-./:;<=>?@[\]^_`{|}~];" className="snipcss0-12-27-28 focus-visible"  {...register("password", {
                                                                                required: "Password is required.",
                                                                                minLength: {
                                                                                    value: 6,
                                                                                    message: "Password should be at-least 6 characters."
                                                                                }
                                                                            })} />
                                                                            {errors.password && (
                                                                                <p id="input-container-error101" class="password-padding error-margin okta-form-input-error o-form-input-error o-form-explain" role="alert"><span class="icon icon-16 error-16-small" role="img" aria-label="Error" ></span>This field cannot be left blank</p>
                                                                            )}
                                                                            <button type="button" class="o-form-input-password-toggle" onClick={() => setPassword(!password)} >
                                                                                <span class="o-form-input-eyeicon o-form-input-eyeicon-show" data-qa="reveal-password-button" style={{ display: password ? "none" : "block" }}>Reveal password</span>
                                                                                <span class="o-form-input-eyeicon o-form-input-eyeicon-hide" data-qa="hide-password-button" style={{ display: password ? "block" : "none" }}>Hide password</span></button>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="okta-form-children" className="snipcss0-7-16-47">

                                                            <label className={`sc-39ef67a9-1 sc-39ef67a9-2 hbxMNP iovUGO ${errors.agre ? "mt-25" : ""}  checkbox-label snipcss0-0-0-1 snipcss-yI4bg`} id="label-terms_and_consents">
                                                                <input id="terms_and_consents" onClick={agreeHandler} className={`sc-39ef67a9-0 gdpr-checkbox snipcss0-1-1-2 ${agree ? "bOvCOF" : "dtRSVL"}`} aria-labelledby="label-terms_and_consents" data-checked="false" data-field-id="terms_and_consents" data-testid="terms_and_consents" data-qa="field-terms_and_consents" type="checkbox" name='agre' {...register("agre", { required: "You must agree to the terms and conditions." })} />
                                                                I agree to Typeform’s{" "}
                                                                <Link rel="noopener" target="_blank" to="/" className="snipcss0-1-1-3">
                                                                    Terms of Service
                                                                </Link>,{" "}
                                                                <Link rel="noopener" target="_blank" to="/" className="snipcss0-1-1-4">
                                                                    Privacy Policy
                                                                </Link>{"  "}
                                                                and
                                                                <Link rel="noopener" target="_blank" to="/" className="snipcss0-1-1-5">
                                                                    {" "} Data Processing Agreement
                                                                </Link>
                                                                .
                                                            </label>

                                                            {errors.agre && (
                                                                <div class="subschema-unsatisfied visible error-message"><p><span role="presentation" aria-label="Error"></span>Please accept the terms and conditions to finish the signup</p></div>
                                                            )}

                                                            <div className="sc-446aec8b-0 ixkyal snipcss0-8-47-53">
                                                                <div data-marketing="true" data-tailor_to_needs_agreed="true" data-third_parties_agreed="true" data-field-id="consents-options" data-testid="consents-options" className="sc-446aec8b-2 kgbfwB snipcss0-9-53-54" onClick={() => setFormOpen(!formOpen)}>
                                                                    <p className="sc-446aec8b-1 jUtzFT snipcss0-10-54-55">
                                                                        See options
                                                                    </p>
                                                                    <span className={`sc-446aec8b-3 ${formOpen ? "jqwktG" : "OyGzb"}`}>
                                                                        {formOpen ? <svg width="12" height="7" viewBox="0 0 12 7" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.00008 2.94976L8.87876 5.82845C9.65981 6.6095 10.9261 6.60949 11.7072 5.82844L6.00008 0.121338L0.292969 5.82844C1.07402 6.60949 2.34035 6.60949 3.1214 5.82844L6.00008 2.94976Z"></path></svg> : <svg width="12" height="7" viewBox="0 0 12 7" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.00008 2.94976L8.87876 5.82845C9.65981 6.6095 10.9261 6.60949 11.7072 5.82844L6.00008 0.121338L0.292969 5.82844C1.07402 6.60949 2.34035 6.60949 3.1214 5.82844L6.00008 2.94976Z"></path></svg>}

                                                                    </span>
                                                                </div>
                                                                <div aria-hidden="true" className={`sc-8a3f566d-0 ${formOpen ? "SEjbG" : "cXVBDv"}`}>
                                                                    <div className="sc-8a3f566d-1 hmDPMZ snipcss0-10-58-59">
                                                                        <div className="radio-toggle-group snipcss0-11-59-60">
                                                                            <div className="sc-39ef67a9-3 jHYAji snipcss0-12-60-61">
                                                                                <label id="marketing" className="sc-39ef67a9-4 suRJf snipcss0-13-61-62">
                                                                                    Get useful tips, inspiration, and offers via e-communication.
                                                                                </label>
                                                                            </div>
                                                                            <div className="sc-39ef67a9-6 bFIJrf snipcss0-12-60-63">
                                                                                <div className="sc-747caa34-0 hYbokD snipcss0-13-63-64">
                                                                                    <label className="sc-747caa34-1 lcIIfk snipcss0-14-64-65">
                                                                                        <input readOnly aria-labelledby="marketing-Yes" data-testid="marketing" className="input-margin sc-747caa34-3 ldYTNE sc-39ef67a9-8 kUETNc snipcss0-15-65-66" name='communication' type="radio" value="yes" checked={radio1 === "yes"} onChange={(event) => radioHandler(event, 1)} />
                                                                                        <div className="sc-747caa34-2 kHWehz snipcss0-15-65-67">
                                                                                            <p className="sc-39ef67a9-7 eIWats snipcss0-16-67-68">
                                                                                                Yes
                                                                                            </p>
                                                                                        </div>
                                                                                    </label>
                                                                                </div>
                                                                                <div className="sc-747caa34-0 hYbokD snipcss0-13-63-69">
                                                                                    <label className="sc-747caa34-1 lcIIfk snipcss0-14-69-70">
                                                                                        <input readOnly aria-labelledby="marketing-No" data-testid="marketing" className="input-margin sc-747caa34-3 ldYTNE sc-39ef67a9-8 kUETNc snipcss0-15-70-71" name='communication' type="radio" value="no" checked={radio1 === "no"} onChange={(event) => radioHandler(event, 1)} />
                                                                                        <div className="sc-747caa34-2 kHWehz snipcss0-15-70-72">
                                                                                            <p className="sc-39ef67a9-7 kORYub snipcss0-16-72-73">
                                                                                                No
                                                                                            </p>
                                                                                        </div>
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="radio-toggle-group snipcss0-11-59-74">
                                                                            <div className="sc-39ef67a9-3 jHYAji snipcss0-12-74-75">
                                                                                <label id="tailor_to_needs_agreed" className="sc-39ef67a9-4 suRJf snipcss0-13-75-76">
                                                                                    Tailor Typeform to my needs based on my activity.
                                                                                </label>
                                                                                <Link id="tailor_to_needs_agreed" to="/" target="_blank" rel="noopener" className="sc-39ef67a9-5 cloxAA snipcss0-13-75-77">
                                                                                    See Privacy Policy
                                                                                </Link>
                                                                            </div>
                                                                            <div className="sc-39ef67a9-6 bFIJrf snipcss0-12-74-78">
                                                                                <div className="sc-747caa34-0 hYbokD snipcss0-13-78-79">
                                                                                    <label className="sc-747caa34-1 lcIIfk snipcss0-14-79-80">
                                                                                        <input aria-labelledby="tailor_to_needs_agreed-Yes" name='Tailor' data-testid="tailor_to_needs_agreed" className="input-margin sc-747caa34-3 ldYTNE sc-39ef67a9-8 kUETNc snipcss0-15-80-81" type="radio" value="yes" checked={radio2 === "yes"} onChange={(event) => radioHandler(event, 2)} />
                                                                                        <div className="sc-747caa34-2 kHWehz snipcss0-15-80-82">
                                                                                            <p className="sc-39ef67a9-7 eIWats snipcss0-16-82-83">
                                                                                                Yes
                                                                                            </p>
                                                                                        </div>
                                                                                    </label>
                                                                                </div>
                                                                                <div className="sc-747caa34-0 hYbokD snipcss0-13-78-84">
                                                                                    <label className="sc-747caa34-1 lcIIfk snipcss0-14-84-85">
                                                                                        <input ledby="tailor_to_needs_agreed-No" name='Tailor' data-testid="tailor_to_needs_agreed" className="input-margin sc-747caa34-3 ldYTNE sc-39ef67a9-8 kUETNc snipcss0-15-85-86" type="radio" value="no" checked={radio2 === "no"} onChange={(event) => radioHandler(event, 2)} />
                                                                                        <div className="sc-747caa34-2 kHWehz snipcss0-15-85-87">
                                                                                            <p className="sc-39ef67a9-7 kORYub snipcss0-16-87-88">
                                                                                                No
                                                                                            </p>
                                                                                        </div>
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="radio-toggle-group snipcss0-11-59-89">
                                                                            <div className="sc-39ef67a9-3 jHYAji snipcss0-12-89-90">
                                                                                <label id="third_parties_agreed" className="sc-39ef67a9-4 suRJf snipcss0-13-90-91">
                                                                                    Enrich my data with select third parties for more relevant content.
                                                                                </label>
                                                                                <Link id="third_parties_agreed" to="/" target="_blank" rel="noopener" className="sc-39ef67a9-5 cloxAA snipcss0-13-90-92">
                                                                                    See Privacy Policy
                                                                                </Link>
                                                                            </div>
                                                                            <div className="sc-39ef67a9-6 bFIJrf snipcss0-12-89-93">
                                                                                <div className="sc-747caa34-0 hYbokD snipcss0-13-93-94">
                                                                                    <label className="sc-747caa34-1 lcIIfk snipcss0-14-94-95">
                                                                                        <input aria-labelledby="third_parties_agreed-Yes" name='Enrich' data-testid="third_parties_agreed" className="input-margin sc-747caa34-3 ldYTNE sc-39ef67a9-8 kUETNc snipcss0-15-95-96" type="radio" value="yes" checked={radio3 === "yes"} onChange={(event) => radioHandler(event, 3)} />
                                                                                        <div className="sc-747caa34-2 kHWehz snipcss0-15-95-97">
                                                                                            <p className="sc-39ef67a9-7 eIWats snipcss0-16-97-98">
                                                                                                Yes
                                                                                            </p>
                                                                                        </div>
                                                                                    </label>
                                                                                </div>
                                                                                <div className="sc-747caa34-0 hYbokD snipcss0-13-93-99">
                                                                                    <label className="sc-747caa34-1 lcIIfk snipcss0-14-99-100">
                                                                                        <input aria-labelledby="third_parties_agreed-No" name='Enrich' data-testid="third_parties_agreed" className="input-margin sc-747caa34-3 ldYTNE sc-39ef67a9-8 kUETNc snipcss0-15-100-101" type="radio" value="no" checked={radio3 === "no"} onChange={(event) => radioHandler(event, 3)} />
                                                                                        <div className="sc-747caa34-2 kHWehz snipcss0-15-100-102">
                                                                                            <p className="sc-39ef67a9-7 kORYub snipcss0-16-102-103">
                                                                                                No
                                                                                            </p>
                                                                                        </div>
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <p color="#7F7F7F" className="sc-446aec8b-1 dEXZxc snipcss0-11-59-104">
                                                                            You can update your preferences in your Profile at any time
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="o-form-button-bar snipcss0-7-16-105">
                                                            <input className="button button-primary snipcss0-8-105-106" type="submit" value="Create my free account" data-type="save" data-qa="button-submit" />
                                                        </div>
                                                    </form>
                                                    <div className="auth-footer snipcss0-6-15-107">
                                                        <Link to="#" className="link help snipcss0-7-107-108" data-se="back-link">
                                                            Back to sign in
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </main>
                                </div>
                            </div>}

                    </>
                    :
                    <div className="sc-bdb57cc3-4 dnxiGH snipcss0-1-1-19 snipcss0-0-0-1 tether-element-attached-top tether-element-attached-center tether-target-attached-top tether-target-attached-center">
                        <div className="sc-bdb57cc3-5 fwwXdp snipcss0-2-19-20 snipcss0-1-1-2">
                            <Link aria-label="Typeform" to="/" title="Typeform" target="_top" className="sc-da9128ae-2 hbuBFL snipcss0-3-20-21 snipcss0-2-2-3">
                                <div className="sc-da9128ae-3 dDgngr snipcss0-4-21-22 snipcss0-3-3-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="22" fill="none" className="snipcss0-5-22-23 snipcss0-4-4-5">
                                        <path fill="currentColor" fillRule="evenodd" d="M0 5.34C0 1.82 1.39 0 3.72 0c2.34 0 3.73 1.82 3.73 5.34V16c0 3.52-1.4 5.34-3.73 5.34S0 19.52 0 16V5.34ZM25.08 0h-7.7c-6.9 0-7.44 2.98-7.44 6.96l-.01 7.42c0 4.14.52 6.96 7.48 6.96h7.67c6.92 0 7.43-2.97 7.43-6.94V6.97c0-3.99-.53-6.97-7.43-6.97Z" clipRule="evenodd">
                                        </path>
                                    </svg>
                                    <span className="sc-da9128ae-0 bmXElW snipcss0-5-22-24 snipcss0-4-4-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="108" height="24" fill="none" className="sc-da9128ae-1 bOQHzD snipcss0-6-24-25 snipcss0-5-6-7">
                                            <path fill="currentColor" d="M69.87 16.61c-2.22 0-3.37-1.83-3.37-4.08s1.13-3.99 3.37-3.99c2.29 0 3.37 1.82 3.37 3.99-.02 2.29-1.16 4.08-3.37 4.08ZM48.1 8.54c1.3 0 1.84.76 1.84 1.42 0 1.6-1.62 2.29-5.01 2.39 0-1.97 1.12-3.8 3.17-3.8Zm-14.44 8.07c-2.1 0-2.99-1.71-2.99-4.08 0-2.35.9-3.99 3-3.99 2.12 0 3.12 1.7 3.12 3.99 0 2.39-1.04 4.08-3.13 4.08Zm-17.8-10.4h-3.3l5.46 12.51c-1.04 2.31-1.6 2.89-2.32 2.89-.77 0-1.49-.62-2-1.16l-1.45 1.92a5.14 5.14 0 0 0 3.7 1.63c1.73 0 3.05-1 3.82-2.79l6.3-15.02h-3.24l-3.28 8.97-3.7-8.95Zm87.1 2.33c1.6 0 1.92 1.1 1.92 3.67v6.75h2.85v-8.52c0-3.07-2.1-4.4-4.05-4.4-1.73 0-3.31 1.07-4.2 3.06a4.01 4.01 0 0 0-3.96-3.07c-1.63 0-3.25 1.04-4.13 2.97V6.21h-2.85v12.73h2.85V13.5c0-2.74 1.44-4.96 3.4-4.96 1.6 0 1.9 1.1 1.9 3.67v6.75h2.86l-.02-5.46c0-2.74 1.46-4.96 3.42-4.96ZM80.14 6.21h-1.36v12.73h2.85v-4.88c0-3.09 1.36-5.18 3.39-5.18.52 0 .96.02 1.44.22l.44-3c-.36-.05-.68-.09-1-.09-2 0-3.45 1.38-4.29 3.15V6.21h-1.47Zm-10.28-.2c-3.77 0-6.31 2.87-6.31 6.5 0 3.76 2.58 6.57 6.31 6.57 3.8 0 6.38-2.89 6.38-6.57C76.23 8.86 73.6 6 69.87 6Zm-21.61 10.6a2.98 2.98 0 0 1-3.05-2.29c3.77-.16 7.46-1.08 7.46-4.4 0-1.91-1.89-3.89-4.6-3.89-3.64 0-6.1 2.97-6.1 6.5 0 3.68 2.42 6.57 6.05 6.57a6.62 6.62 0 0 0 5.39-2.49l-1.38-1.87c-1.47 1.5-2.37 1.87-3.77 1.87ZM34.22 6.01c-1.44 0-2.89.84-3.45 2.16V6.2h-2.84v17.73h2.84v-6.33c.6.91 1.99 1.51 3.21 1.51 3.8 0 5.8-2.8 5.8-6.6-.02-3.74-1.99-6.5-5.56-6.5Zm-19.97-4.9H.82v2.77h5.25v15.06h2.99V3.88h5.2V1.12Zm42.33 5.1h-1.7v2.55h1.7v10.18h2.85V8.76h2.76V6.21h-2.76V4.22c0-1.27.52-1.71 1.7-1.71.44 0 .84.12 1.38.3l.65-2.4A5.44 5.44 0 0 0 60.9 0c-2.73 0-4.33 1.63-4.33 4.46v1.75Z">
                                            </path>
                                        </svg>
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <h2 className="sc-bdb57cc3-7 fZkklZ snipcss0-2-19-26 snipcss0-1-1-8">
                            Get better data with conversational forms, surveys, quizzes &amp; more.
                        </h2>
                        <div data-testid="social-buttons" className="sc-bdb57cc3-6 ivhwfT snipcss-woQak">
                            <div className="sc-9d706ad1-0 jfKKSA sc-4d1d6756-0 ftnmuJ social-auth-button link-button social-auth-google-button">
                                <Link target="_self" data-qa="google-signin-btn" data-se="social-auth-google-button" data-testid="social-button" to="/" className="sc-9d706ad1-1 eUclur">
                                    Sign up with Google
                                </Link>
                            </div>
                            <div className="sc-9d706ad1-0 jfKKSA sc-4d1d6756-0 hKvEgf social-auth-button link-button social-auth-microsoft-button">
                                <Link target="_self" data-qa="microsoft-signin-btn" data-se="social-auth-microsoft-button" data-testid="social-button" to="/" className="sc-9d706ad1-1 eUclur">
                                    Sign up with Microsoft
                                </Link>
                            </div>
                        </div>
                        <div className="sc-de8cb90a-0 duErPZ auth-divider snipcss0-2-19-32 snipcss0-1-1-14">
                            <span className="sc-de8cb90a-1 gupdyu auth-divider-text snipcss0-3-32-33 snipcss0-2-14-15">
                                OR
                            </span>
                        </div>
                        <div className="sc-bdb57cc3-6 ivhwfT snipcss0-2-19-34 snipcss0-1-1-16">
                            <div className="sc-9d706ad1-0 jfKKSA snipcss0-3-34-35 snipcss0-2-16-17">
                                <button data-gtm-event="cta_button" data-qa="user-friendly-cta" className="sc-9d706ad1-1 gdNQSK snipcss0-4-35-36 snipcss0-3-17-18" onClick={signHandler}>
                                    Sign up with email
                                </button>
                            </div>
                        </div>
                    </div>}
            </div>
        </div>


    );
}

export default Home;
