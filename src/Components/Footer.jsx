import React from "react";
import Contact from "./Contact";

const navLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Porto", link: "#porto" },
    { name: "Contact", link: "#contact" },
];

const Footer = () => {
    return (
        <footer className="bg-gray-200">
            <div className="max-w-5xl mx-auto px-4 py-10 flex flex-col items-center gap-6 text-center">
                <p className="text-lg font-semibold text-gray-800">Fendi Permadi</p>

                <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                    {navLinks.map((item) => (
                        <a
                            key={item.name}
                            href={item.link}
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>

                <Contact />

                <a
                    href="#home"
                    className="text-sm text-gray-600 hover:text-gray-900 underline-offset-4 hover:underline transition-colors"
                >
                    Back to top ↑
                </a>

                <p className="text-sm text-gray-500">Copyright &#169; 2025 | Fendi Permadi</p>
            </div>
        </footer>
    );
}
export default Footer;