import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import twitterIcon from "@public/images/icons/twitter.svg";
import facebookIcon from "@public/images/icons/facebook.svg";
import youtubeIcon from "@public/images/icons/youtube.svg";
import instagramIcon from "@public/images/icons/instagram.svg";
import locationWhiteIcon from "@public/images/icons/location-white.svg";
import { FaTwitter, FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';
import { IoLocationOutline } from "react-icons/io5"; 

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-6">

    <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-6 border-b border-gray-700 pb-8">
    
        <div>
            <h3 className="text-sm font-semibold mb-4">FIND A STORE</h3>
            <ul className="space-y-2 text-sm">
              
                <li><Link href="#" className="hover:underline">Become Link Member</Link></li>
                <li><Link href="#" className="hover:underline">Sign Up for Email</Link></li>
                <li><Link href="#" className="hover:underline">Send Us Feedback</Link></li>
                <li><Link href="#" className="hover:underline">Student Discounts</Link></li>
            </ul>
        </div>

        <div>
            <h3 className="text-sm font-semibold mb-4">GET HELP</h3>
            <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:underline">Order Status</Link></li>
                <li><Link href="#" className="hover:underline">Delivery</Link></li>
                <li><Link href="#" className="hover:underline">Returns</Link></li>
                <li><Link href="#" className="hover:underline">Payment Options</Link></li>
                <li><Link href="#" className="hover:underline">Contact Us on Nike.com</Link></li>
                <li><Link href="#" className="hover:underline">Contact Us on All Other Inquiries</Link></li>
            </ul>
        </div>

 
        <div>
            <h3 className="text-sm font-semibold mb-4">ABOUT NIKE</h3>
            <ul className="space-y-2 text-sm">
                
                <li><Link href="#" className="hover:underline">News</Link></li>
                <li><Link href="#" className="hover:underline">Careers</Link></li>
                <li><Link href="#" className="hover:underline">Investors</Link></li>
                <li><Link href="#" className="hover:underline">Sustainability</Link></li>
            </ul>
        </div>


        <div className="flex justify-start lg:justify-end items-start gap-4">
          
            <FaTwitter className="text-lg cursor-pointer hover:text-gray-400" />
            <FaFacebook className="text-lg cursor-pointer hover:text-gray-400" />
            <FaYoutube className="text-lg cursor-pointer hover:text-gray-400" />
            <FaInstagram className="text-lg cursor-pointer hover:text-gray-400" />
        </div>
    </div>

 
    <div className="mt-8 flex flex-wrap justify-between items-center text-xs text-gray-400">
      
        <div className="flex mb-4 md:mb-0 gap-2">
            <IoLocationOutline /> 
            <p>India</p>
            <p>© 2023 Nike Inc. All Rights Reserved</p>
        </div>

        <div className="flex flex-wrap gap-4">
            <Link href="#" className="hover:underline">Guides</Link>
            <Link href="#" className="hover:underline">Terms of Sale</Link>
            <Link href="#" className="hover:underline">Terms of Use</Link>
            <Link href="#" className="hover:underline">Nike Privacy Policy</Link>
        </div>
    </div>
</footer>
  )
}

export default Footer