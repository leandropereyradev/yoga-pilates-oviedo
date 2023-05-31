import mail from "../assets/images/mail.svg";
import facebook from "../assets/images/facebook.svg";
import instagram from "../assets/images/instagram.svg";
import phone from "../assets/images/phone.svg";
import whatsapp from "../assets/images/whatsapp.svg";
import youtube from "../assets/images/youtube.svg";

interface Icon {
  name: string;
  icon: string;
  ref: string;
}

export const icons: Icon[] = [
  {
    name: "mail",
    icon: mail,
    ref: "mailto:bienestar@yogaypilatesoviedo.com",
  },
  {
    name: "phone",
    icon: phone,
    ref: "tel:+34984046397",
  },
  {
    name: "whatsapp",
    icon: whatsapp,
    ref: "https://wa.me/34627908108",
  },
  {
    name: "facebook",
    icon: facebook,
    ref: "https://www.facebook.com/yogaypilatesoviedo/",
  },
  {
    name: "instagram",
    icon: instagram,
    ref: "https://www.instagram.com/bienestar_yoga_pilates_oviedo/",
  },
  {
    name: "youtube",
    icon: youtube,
    ref: "https://www.youtube.com/channel/UCEE9SKwTKdmo47Zlx1OQBvA",
  },
];