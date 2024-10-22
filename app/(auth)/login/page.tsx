import Footer from "@/app/components/Footer";
import LoginPage from "@/app/components/LoginPage";
import Navbar from "@/app/components/Navbar";

export default function Login() {
    return (
        <>
            <main className="h-screen">
                <div>
                    <Navbar />
                    <LoginPage />
                </div>
            </main>
            <Footer />
        </>
    );
}