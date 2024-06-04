"use client";
import {
  FacebookShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

export default function SocialShare({ url }) {
  return (
    <div className="flex gap-3 mt-4">
      <FacebookShareButton
        url={`${process.env.NEXT_PUBLIC_URL}/${url}`}
        className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
      >
        <FaFacebook size={25} />
      </FacebookShareButton>

      <TwitterShareButton
        size={25}
        url={`${process.env.NEXT_PUBLIC_URL}/${url}`}
        className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
      >
        <FaTwitter size={25} />
      </TwitterShareButton>
      <WhatsappShareButton
        size={25}
        url={`${process.env.NEXT_PUBLIC_URL}/${url}`}
        className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
      >
        <IoLogoWhatsapp size={25} />
      </WhatsappShareButton>
    </div>
  );
}
