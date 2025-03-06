import React from 'react';
import { Link } from 'react-router-dom';
import { FaTelegram, FaGithub, FaDiscord, FaInstagram, FaHeadset } from 'react-icons/fa';
import LogoWithWord from '../../images/LogoWithword.webp';

const Footer = () => {
    return (
        <footer className="footer-section" dir="rtl">
            <div className="footer-container">
                <div className="footer-main">
                    <Link to="/" className="footer-logo">
                        <img src={LogoWithWord} alt="ArchNet" />
                    </Link>
                    <div className="footer-links">
                        <Link to="/">خانه</Link>
                        <Link to="/Tutorial">آموزش</Link>
                        <Link to="/Subscription">اشتراک</Link>
                        <Link to="/FAQs">سوالات متداول</Link>
                    </div>
                    <div className="footer-social">
                        <a href="https://t.me/Arch_Net" target="_blank" rel="noopener noreferrer" title="کانال تلگرام">
                            <FaTelegram />
                        </a>
                        <a href="https://t.me/Archnet_Admin" target="_blank" rel="noopener noreferrer" title="پشتیبانی تلگرام">
                            <FaHeadset />
                        </a>
                        <a href="https://instagram.com/archnet.online" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} ArchNet</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 