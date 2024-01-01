//All icons that are needed
import {
  AiFillCompass,
  AiFillHeart,
  AiFillMessage,
  AiFillNotification,
  AiFillPlusCircle,
  AiOutlineCompass,
  AiOutlineHeart,
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlineNotification,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { RiVideoFill, RiVideoLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

export const menu = [
  {
    title: "Home",
    icon: <AiOutlineHome className="text-2xl mr-5"></AiOutlineHome>,
    activeIcon: <AiFillHome className="text-2xl mr-5"></AiFillHome>
  },
  {
    title: "Search",
    icon: <AiOutlineSearch className="text-2xl mr-5"></AiOutlineSearch>,
    activeIcon: <AiOutlineSearch className="text-2xl mr-5"></AiOutlineSearch>
  },
  {
    title: "Explorer",
    icon: <AiOutlineCompass className="text-2xl mr-5"></AiOutlineCompass>,
    activeIcon: <AiFillCompass className="text-2xl mr-5"></AiFillCompass>
  },
  {
    title: "Reels",
    icon: <RiVideoLine className="text-2xl mr-5"></RiVideoLine>,
    activeIcon: <RiVideoFill className="text-2xl mr-5"></RiVideoFill>
  },
  {
    title: "Message",
    icon: <AiOutlineMessage className="text-2xl mr-5"></AiOutlineMessage>,
    activeIcon: <AiFillMessage className="text-2xl mr-5"></AiFillMessage>
  },
  {
    title: "Notification",
    icon: <AiOutlineHeart className="text-2xl mr-5" ></AiOutlineHeart>,
    activeIcon: <AiFillHeart className="text-2xl mr-5" ></AiFillHeart>
  },
  {
    title: "Create",
    icon: <AiOutlinePlusCircle className="text-2xl mr-5"></AiOutlinePlusCircle>,
    activeIcon: <AiFillPlusCircle className="text-2xl mr-5"></AiFillPlusCircle>
  },
  {
    title: "Profile",
    icon: <CgProfile className="text-2xl mr-5"></CgProfile>,
    activeIcon: <CgProfile className="text-2xl mr-5"></CgProfile>
  }
];
