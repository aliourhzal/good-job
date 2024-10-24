'use client'

import { FormEventHandler, useState } from "react";
import FormInput from "./ui/FormInput";
import Button from "./ui/Button";
import axios from "axios";
import { useRouter } from 'next/navigation'

export default function SignupForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [logining, setLogining] = useState(false);
    const router = useRouter()

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        setLogining(true);
        try {
            const response = await axios.post('/api/v1/auth', {
                email, password
            })
            console.log(response);
            router.push('/dashboard');
        } catch (error) {
            setLogining(false);
            alert('invalid credentials');   
        }
    }

    return (
        <form onSubmit={handleSubmit} className="sm:w-3/4 w-full">
            <FormInput type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <FormInput type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <div className="mt-5 flex items-center w-full flex-col sm:flex-row gap-3">
                <Button disable={logining} className="bg-dark-blue text-light-white hover:bg-hover-orange sm:w-fit w-full disabled:cursor-not-allowed">
                    {
                        logining ? "wait.." : "submit"
                    }
                </Button>
            </div>
        </form>
    );
}