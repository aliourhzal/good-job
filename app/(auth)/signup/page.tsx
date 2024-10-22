import SignupPage from "@/app/components/SignupPage";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function Signup() {
    return (
        <>
            <main className="h-screen">
                <div>
                    <Navbar />
                    <SignupPage />
                </div>
            </main>
            <Footer />
        </>
    );
}