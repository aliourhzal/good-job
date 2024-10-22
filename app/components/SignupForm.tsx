'use client'

import { FormEventHandler, useEffect, useState } from "react";
import FormInput from "./ui/FormInput";
import Button from "./ui/Button";
import Link from "next/link";
import axios from "axios";

export default function SignupForm() {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPasswd, setConfirmPasswd] = useState("")

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        try {
            const userData = {
                email,
                firstname,
                lastname,
                password,
                confirmPasswd
            }
            const {data} = await axios.post("/api/v1/user", userData);
            console.log(data);
        } catch(e) {
            console.log(e);
        }
    }

    return (
        <form className="sm:w-3/4 w-full" onSubmit={handleSubmit}>
            <div className="flex w-full sm:flex-row flex-col sm:gap-3">
                <FormInput type="text" placeholder="First Name" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                <FormInput type="text" placeholder="Last Name" value={lastname} onChange={(e) => setLastname(e.target.value)} />
            </div>
            <FormInput type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <FormInput type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <FormInput type="password" placeholder="Confirm Password" value={confirmPasswd} onChange={(e) => setConfirmPasswd(e.target.value)} />
            <div className="mt-5 flex items-center w-full flex-col sm:flex-row gap-3">
                <Button type="submit" className="bg-dark-blue text-light-white hover:bg-hover-orange sm:w-fit w-full">submit</Button>
                <Link href="/login" className="text-dark-blue hover:text-text-orange text-sm font-medium py-2 px-3">
                    Already registered?
                </Link>
            </div>
        </form>
    );
}