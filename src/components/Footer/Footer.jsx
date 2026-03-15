import React from 'react';
import xIcon from "../../assets/xIcon.png"
import linkedInIcon from "../../assets/linkedInIcon.png"
import facebookIcon from "../../assets/facebookIcon.png"
import emailIcon from "../../assets/emailIcon.png"

const Footer = () => {
    return (
        <footer className = "max-w-7xl mx-auto bg-black text-white p-10">
            <section className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
                <aside>                
                    <h3 className = "text-xl mb-5 font-bold ">CS — Ticket System</h3>
                    <p className = "text-xs">A Customer Support Ticket System helps businesses manage customer requests efficiently. It records issues, assigns them to agents, tracks progress, and ensures timely responses, improving organization, accountability, and overall customer satisfaction.
                        
                    </p>
                </aside>
                <nav className = "flex flex-col gap-2">
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Our Mission</a>
                    <a className="link link-hover">Contact Saled</a>
                </nav>
                <nav className = "flex flex-col gap-2">
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Products & Services</a>
                    <a className="link link-hover">Customer Stories</a>
                    <a className="link link-hover">Download Apps</a>
                </nav>
                <nav className = "flex flex-col gap-2">
                    <h6 className="footer-title">Information</h6>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Terms & Conditions</a>
                    <a className="link link-hover">Join Us</a>
                </nav>
                <nav className = "flex flex-col gap-2">
                    <h6 className="footer-title">Social Links</h6>
                    <a className="link link-hover flex gap-2">
                        <img src = {xIcon} alt="" />
                        <span>@CS — Ticket System</span>
                    </a>
                    <a className="link link-hover flex gap-2">
                        <img src = {linkedInIcon} alt="" />
                        <span>@CS — Ticket System</span>
                    </a>
                    <a className="link link-hover flex gap-2">
                        <img src = {facebookIcon} alt="" />
                        <span>@CS — Ticket System</span>
                    </a>
                    <a className="link link-hover flex gap-2">
                        <img src = {emailIcon} alt="" />
                        <span>support@cst.com</span>
                    </a>
                    
                </nav>
            </section>

            <hr className="my-4 border-t border-gray-700" />

            <p className="text-center text-sm text-gray-400 w-full">
            © 2025 CS — Ticket System. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;