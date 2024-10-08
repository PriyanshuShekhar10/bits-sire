import React from "react";
import TeamGrid from "./TeamGrid";
import "./TeamGrid.css";
// import Divider from "./Divider";
import DirectorsList from "./DirectorsList";
import Header from "./Header";

// const placeholderImage =
//   "https://surgassociates.com/wp-content/uploads/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.jpg";

const vc = [
  {
    id: 1,
    name: "Prof. V. Ramgopal Rao",
    title: "Vice Chancellor, BITS Pilani",
    profileUrl: "https://www.bits-pilani.ac.in/pilani/v-ramgopal-rao/",
    role: "Chairman",
    imageSrc: "https://data.org/wp-content/uploads/2023/05/v-ramgopal-rao.jpg",
  },
];
const directors = [
  {
    id: 2,
    name: "Prof. Sudhirkumar Barai",
    title: "Director |Pilani Campus",
    profileUrl: "https://www.bits-pilani.ac.in/pilani/sudhir-kumar-barai/",
    imageSrc:
      "https://www.bits-pilani.ac.in/wp-content/uploads/Prof.-Sudhirkumar-Barai.jpg",
    role: "Member",
  },

  {
    id: 3,
    name: "Prof. Souri Banerjee",
    title: "Director |Dubai Campus",
    profileUrl: "https://www.bits-pilani.ac.in/hyderabad/souribanerjee/",
    imageSrc:
      "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.bits-pilani.ac.in/wp-content/uploads/Souri-Banerjee-1.jpg",
    role: "Member",
  },
  {
    id: 4,
    name: "Prof. Suman Kundu",
    title: "Director |KK Birla Goa Campus",
    profileUrl: "https://www.bits-pilani.ac.in/goa/suman-kundu/",
    imageSrc: "https://i.imgur.com/z34CUuy.jpeg",
    role: "Member",
  },
];
const directors_2 = [
  {
    id: 5,
    name: "Prof. Soumyo Mukherji",
    title: "Director Hyderabad Campus",
    profileUrl: "https://www.bits-pilani.ac.in/hyderabad/mukherjis/",
    imageSrc:
      "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.bits-pilani.ac.in/wp-content/uploads/soumyo-mukherji-1.png",
    role: "Member",
  },
  {
    id: 6,
    name: "Prof. G. Sundar",
    title: "Director, Off Campus Programmes and Industry Engagement",
    profileUrl: "https://www.bits-pilani.ac.in/hyderabad/prof-g-sundar/",
    imageSrc:
      "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.bits-pilani.ac.in/wp-content/uploads/Prof-G-Sundar-657_469-1.jpg",
    role: "Member",
  },
];

const deans = [
  {
    id: 7,
    name: "Prof. Sanket Goel",
    title: "Dean (R & I)",
    profileUrl: "https://www.bits-pilani.ac.in/hyderabad/sanket-goel/",
    imageSrc:
      "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.bits-pilani.ac.in/wp-content/uploads/IMG_81242.jpg",
    role: "Member",
  },
  {
    id: 8,
    name: "Prof. Ajit Pratap Singh",
    title: "Dean (AUGSD)",
    profileUrl: "https://www.bits-pilani.ac.in/pilani/ajit-pratap-singh/",
    imageSrc: "https://i.ibb.co/VHLnnBq/yP61yO3.jpg",
    role: "Member",
  },
  {
    id: 9,
    name: "Prof. Vamsi Krishna Venuganti",
    title: "Dean (AGSRD)",
    profileUrl:
      "https://www.bits-pilani.ac.in/hyderabad/prof-venkata-vamsi-krishna-venuganti/",
    imageSrc: "https://i.ibb.co/LdsmHVW/1693788097224.jpg",
    role: "Member",
  },
  {
    id: 10,
    name: "Prof. Dharmarajan Sriram",
    title: "Dean (FAD)",
    profileUrl: "https://www.bits-pilani.ac.in/hyderabad/dharmarajan-sriram/",
    imageSrc: "https://www.bits-pilani.ac.in/wp-content/uploads/d-sriram.jpg",
    role: "Member",
  },
];

const teamMembers2 = [
  {
    id: 11,
    name: "Mr. Sachin Arya",
    title: "CEO, I & E",
    profileUrl: "https://www.linkedin.com/in/sachinarya/",
    imageSrc: "https://i.ibb.co/zPZKgM6/images.jpg",
    role: "Member",
  },
  {
    id: 12,
    name: "Mr. Manoj Chulliparambil",
    profileUrl: "",
    title: "Head – Strategy |New Areas & Knowledge Centre, ABSTCPL",
    imageSrc: "https://i.ibb.co/NFFmLgm/unnamed.jpg",
    role: "Member",
  },
  {
    id: 13,
    name: "Prof. Rajendra Singh",
    title: "Professor |Department of Physics, IIT Delhi",
    imageSrc: "https://i.imgur.com/Qnpc7kJ.jpeg",
    profileUrl: "https://web.iitd.ac.in/~rsingh/Default.html",
    role: "Member",
  },
  {
    id: 14,
    name: "Dr. Ramanan Laxminarayan",
    title: "Founder and President |One Health Trust",
    imageSrc:
      "https://onehealthtrust.org/wp-content/uploads/2017/06/RamananLaxminarayan-260x260.png",
    profileUrl: "https://onehealthtrust.org/researchers/ramanan_laxminarayan/",
    role: "Member",
  },
];

const teamMembers = [
  {
    id: 15,
    name: "Prof. Sameer Sonkusale",
    title: "Professor |Tufts University",
    imageSrc:
      "https://engineering.tufts.edu/ece/sites/g/files/lrezom581/files/styles/large/public/ssonku01.jpeg?itok=qek7uzjH",
    profileUrl: "https://www.ece.tufts.edu/~sameer/index.html",
    role: "Member",
  },

  {
    id: 16,
    name: "Prof. H.D. Mathur",
    title: "Head, SIRE",
    profileUrl: "https://www.bits-pilani.ac.in/pilani/hitesh-datt-mathur/",
    imageSrc:
      "https://www.bits-pilani.ac.in/wp-content/uploads/hitesh-mathur.jpeg",
    role: "Member",
  },
];

function App() {
  return (
    <div className="App">
      <Header title="Governing Council" />
      {/* <Divider /> */}

      <TeamGrid teamMembers={vc} />
      {/* <Divider /> */}
      <TeamGrid teamMembers={directors} />
      <DirectorsList directors={directors_2} />
      {/* <TeamGrid teamMembers={directors_2} /> */}

      {/* <Divider /> */}

      <TeamGrid teamMembers={deans} />
      {/* <Divider /> */}
      <TeamGrid teamMembers={teamMembers2} />
      <TeamGrid teamMembers={teamMembers} />
      {/* <Divider /> */}
    </div>
  );
}

export default App;
