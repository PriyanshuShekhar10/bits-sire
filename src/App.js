// App.js

import React from "react";
import TeamGrid from "./TeamGrid";
import "./TeamGrid.css";
import Divider from "./Divider";
import Header from "./Header";

// Placeholder image URL
const placeholderImage =
  "https://surgassociates.com/wp-content/uploads/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.jpg"; // Replace with actual image paths

// Array of team members based on the provided list

const vc = [
  {
    id: 1,
    name: "Prof. V. Ramgopal Rao",
    title: "Vice Chancellor, BITS Pilani",
    imageSrc:
      "data:image/jpeg;base64,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",
  },
];
const directors = [
  {
    id: 2,
    name: "Prof. Sudhirkumar Barai",
    title: "Director, Pilani Campus",
    imageSrc:
      "https://www.bits-pilani.ac.in/wp-content/uploads/Prof.-Sudhirkumar-Barai.jpg",
  },
  {
    id: 3,
    name: "Prof. Srinivasan Madapusi",
    title: "Director, Dubai Campus",
    imageSrc:
      "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.bits-pilani.ac.in/wp-content/uploads/srinivasan-madapusi.jpg",
  },
  {
    id: 4,
    name: "Prof. Suman Kundu",
    title: "Director, KK Birla Goa Campus",
    imageSrc:
      "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.bits-pilani.ac.in/wp-content/uploads/Prof.-Suman-Kundu.jpg",
  },
  {
    id: 5,
    name: "Prof. Soumyo Mukherji",
    title: "Director, Hyderabad Campus",
    imageSrc:
      "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.bits-pilani.ac.in/wp-content/uploads/soumyo-mukherji-1.png",
  },
  {
    id: 6,
    name: "Prof. G. Sundar",
    title: "Director, Off Campus Programmes and Industry Engagement",
    imageSrc:
      "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.bits-pilani.ac.in/wp-content/uploads/DirectorHyd.jpg",
  },
];

const deans = [
  {
    id: 7,
    name: "Prof. Sanket Goel",
    title: "Dean (R & I)",
    imageSrc:
      "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.bits-pilani.ac.in/wp-content/uploads/IMG_81242.jpg",
  },
  {
    id: 8,
    name: "Prof. Ajit Pratap Singh",
    title: "Dean (AUGSD)",
    imageSrc:
      "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.bits-pilani.ac.in/wp-content/uploads/ajit-pratap.jpg",
  },
  {
    id: 9,
    name: "Prof. Vamsi Krishna Venuganti",
    title: "Dean (AGSRD)",
    imageSrc:
      "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.bits-pilani.ac.in/wp-content/uploads/vamsi.jpeg",
  },
  {
    id: 10,
    name: "Prof. Souri Banerjee",
    title: "Dean (FAD)",
    imageSrc:
      "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.bits-pilani.ac.in/wp-content/uploads/Souri-Banerjee-1.jpg",
  },
];
const teamMembers = [
  {
    id: 11,
    name: "Mr. Sachin Arya",
    title: "CEO, I & E",
    imageSrc:
      "https://media.licdn.com/dms/image/C5103AQECgRJxJ-Ah_Q/profile-displayphoto-shrink_400_400/0/1525617238615?e=1715212800&v=beta&t=PTe85My4HmEovqe4KxOtbaGiPFKdbSeEzUzEyusRBkQ",
  },
  {
    id: 12,
    name: "Mr. Manoj Chulliparambil",
    title: "Head – Strategy, New Areas & Knowledge Centre, ABSTCPL",
    imageSrc: placeholderImage,
  },
  {
    id: 13,
    name: "Prof. Rajendra Singh",
    title: "Professor, Department of Physics, IIT Delhi",
    imageSrc: "https://web.iitd.ac.in/~rsingh/images/image002.jpg",
    profileUrl: "https://web.iitd.ac.in/~rsingh/Default.html",
  },
  {
    id: 14,
    name: "Dr. Ramanan Laxminarayan",
    title: "Founder and President, One Health Trust",
    imageSrc:
      "https://onehealthtrust.org/wp-content/uploads/2017/06/RamananLaxminarayan-260x260.png",
    profileUrl: "https://onehealthtrust.org/researchers/ramanan_laxminarayan/",
  },
  {
    id: 15,
    name: "Prof. Sameer Sonkusale",
    title: "Professor, Tufts University",
    imageSrc:
      "https://engineering.tufts.edu/ece/sites/g/files/lrezom581/files/styles/large/public/ssonku01.jpeg?itok=qek7uzjH",
    profileUrl: "https://www.ece.tufts.edu/~sameer/index.html",
  },
  {
    id: 16,
    name: "Dr. H.D. Mathur",
    title: "Head, SIRE",
    imageSrc:
      "https://www.bits-pilani.ac.in/wp-content/uploads/hitesh-mathur.jpeg",
  },
];

function App() {
  return (
    <div className="App">
      <Header title="Governing Council" />
      <Divider />

      <TeamGrid teamMembers={vc} />
      <Divider />
      <TeamGrid teamMembers={directors} />
      <Divider />

      <TeamGrid teamMembers={deans} />
      <Divider />

      <TeamGrid teamMembers={teamMembers} />
      {/* <Divider /> */}
    </div>
  );
}

export default App;
