'use client'

import { useState } from "react";
import FormInput from "./ui/FormInput";
import Button from "./ui/Button";
import Link from "next/link";

export default function SignupForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <form action="" className="sm:w-3/4 w-full">
            <FormInput type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <FormInput type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <div className="mt-5 flex items-center w-full flex-col sm:flex-row gap-3">
                <Button className="bg-dark-blue text-light-white hover:bg-hover-orange sm:w-fit w-full">submit</Button>
            </div>
        </form>
    );
}