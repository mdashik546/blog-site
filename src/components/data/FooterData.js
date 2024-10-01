import { FaInstagram, FaYoutube } from "react-icons/fa6";
import { GrFacebookOption } from "react-icons/gr";
import { RiTwitterXLine } from "react-icons/ri";

export  const footerData = [
  {
    categories: [
        {
          id: 1,
          name: "Technology",
          link: "/category/technology"
        },
        {
          id: 2,
          name: "Business",
          link: "/category/business"
        },
        {
          id: 3,
          name: "Health",
          link: "/category/health"
        },
        {
          id: 4,
          name: "Entertainment",
          link: "/category/entertainment"
        },
        {
          id: 5,
          name: "Education",
          link: "/category/education"
        }
      ],
      links: [
        {
          id: 1,
          name: "About Us",
          link: "/about"
        },
        {
          id: 2,
          name: "Contact",
          link: "/contact"
        },
        {
          id: 3,
          name: "Privacy Policy",
          link: "/privacy-policy"
        },
        {
          id: 4,
          name: "Terms of Service",
          link: "/terms-of-service"
        },
        {
          id: 5,
          name: "Careers",
          link: "/careers"
        }
      ],
      followUs: [
        {
          id: 1,
          platform: "Facebook",
          icon: <GrFacebookOption/>,
          link: "https://www.facebook.com/profile.php?id=100021923862893"
        },
        {
          id: 2,
          platform: "Twitter",
          icon: <RiTwitterXLine/>,
          link: "https://www.twitter.com"
        },
     
        {
          id: 3,
          platform: "Youtube",
          icon: <FaYoutube/>,
          link: "https://www.youtube.com"
        },   {
          id: 3,
          platform: "Instagram",
          icon: <FaInstagram/>,
          link: "https://www.instagram.com/ashik__alahi/"
        },
      ]
  }
]
  
  
  