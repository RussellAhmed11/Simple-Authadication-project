import { createUserWithEmailAndPassword } from "firebase/auth";
import { Form } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";


const Register = () => {
    const handleRegisterForm = (event) => {
        event.preventDefault();
        const email=event.target.email.value;
        const password=event.target.password.value
       createUserWithEmailAndPassword(auth,email,password)
       .then(user=>{console.log(user)})
       .then(error=>{console.log(error)})
    }
    return (
        <div className="max-w-xl mx-auto ">
            <h2 className="text-4xl my-8 items-center"> register</h2>
            <Form onSubmit={handleRegisterForm}>
                <label className="input validator my-7">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </g>
                    </svg>
                    <input type="email" name="email" placeholder="mail@site.com" required />
                </label>
                <div className="validator-hint hidden">Enter valid email address</div>
                <label className="input validator">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <path
                                d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                            ></path>
                            <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                        </g>
                    </svg>
                    <input
                        type="password"
                        name="password"
                        required
                        placeholder="Password"
                    />
                </label>
                <button className="btn btn-accent btn-wide mt-4">Login</button>
            </Form>
        </div>
    );
};

export default Register;