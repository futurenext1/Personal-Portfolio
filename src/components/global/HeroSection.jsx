import { Button } from "../ui/button";
import { Typewriter } from "react-simple-typewriter";

export const HeroSection = () => {
    return (
        <main className="flex-1">
            {/* Hero Section */}
            <section className="w-full min-h-screen flex flex-col items-center justify-between bg-gradient-to-r from-blue-50 via-white to-blue-50 px-6 py-10">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid gap-10 lg:grid-cols-2 items-center">
                        {/* Left Content */}
                        <div className="flex flex-col justify-center items-start space-y-6">
                            <div className="space-y-4">
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-blue-800">
                                    <Typewriter
                                        words={[
                                            "Hey, I am Ayush Thakur",
                                            "I am a ",
                                            "UI/UX Designer using Figma",
                                        ]}
                                        loop={false}
                                        cursor
                                        cursorStyle="|"
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </h1>
                                <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-[600px]">
                                    My name is Ayush Thakur. I am a Front-end Developer skilled in HTML, CSS, JavaScript, React.js, Next.js, and Figma. Scroll down to discover some awesome projects!
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <Button variant="outline" size="lg">
                                    View Projects
                                </Button>
                                <Button variant="default" size="lg">
                                    Contact Me
                                </Button>
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="relative mx-auto flex items-center justify-center">
                            <img
                                src="https://keelanjon.com/static/illustration-keelanjon-68a9ba2959b48c1bef6a8a8246779e2b.png"
                                alt="hero illustration"
                                className="rounded-lg shadow-lg transform transition-transform hover:scale-105 sm:w-3/4 lg:w-full"
                            />
                        </div>
                    </div>
                </div>

                {/* Centered Contact Form */}
                <div className="w-full max-w-lg mx-auto mt-16">
                    <form
                        className="p-8 bg-white rounded-xl shadow-2xl border border-gray-300 transform transition-transform hover:scale-105"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <h2 className="text-2xl font-bold text-purple-600 mb-6 text-center">
                            Contact Me
                        </h2>
                        <div className="space-y-6">
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 transition-all"
                                    placeholder="yourname@example.com"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 transition-all"
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 px-4 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition-all"
                            >
                                Login
                            </button>
                        </div>
                        <p className="mt-4 text-sm text-gray-500 text-center">
                            Don't have an account?{" "}
                            <a
                                href="#"
                                className="text-purple-600 font-semibold hover:underline"
                            >
                                Sign Up
                            </a>
                        </p>
                    </form>
                </div>
            </section>
        </main>
    );
};
