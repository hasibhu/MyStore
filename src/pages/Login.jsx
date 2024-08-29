import { Form, Link } from "react-router-dom";
import { FormInput, SubmitButton } from "../components";



const Login = () => {


    return (
        <section className="h-screen grid place-items-center">
           <h2 className="text-3xl font-bold"> Login is here</h2>

            <Form
                method="post"
                className="card w-96 p-8 bg-base-100 shadow-lg flex gap-y-4">
                <FormInput label='Name' name='name' type='text' defaultValue='Insert Your Name Here'></FormInput>
                <FormInput label='Password' name='password' type='text' defaultValue='Insert Your Passwrod Here'></FormInput>
                
                <div className="mt-4 grid place-items-center">
                    <SubmitButton text='Submit'></SubmitButton>
                   
                </div>
                 <button className="btn btn-secondary">Guest Login</button>

                    <p className="text-center font-bold">
                        Not a member? <Link to={'/register'}> <span className="text-purple-500">Register</span> here </Link>
                    </p>
            </Form>
        </section>
    );
};

export default Login;