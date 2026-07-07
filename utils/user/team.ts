"use server";

import { MemberProps } from "@/types";

const dummyTeam: MemberProps[] = [
  {
    id: 1,
    name: "Chittajit Nath",
    email: "chittajitnath@gmail.com",
    phone: "1234567890",
    year: 2028,
    poster_image:
      "https://scontent.cdninstagram.com/v/t51.82787-19/720207173_18102857261105678_8300256230052046442_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=103&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=cSuVXPFClcYQ7kNvwHGJ1_L&_nc_oc=AdrI3anNk4-oik71cPikgUBUdef9D4spNxVRsk9v8DxVRsUtJygLwlvqXak5k1UGQoo&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_gid=rygjeFdrl2iTEWXzHPJaMw&_nc_ss=7b6a8&oh=00_AQDHpJ0E6hNw5_q50HmigXz6PD6I07rhBGkEgtGfBj63ow&oe=6A4DE281",
    insta: "https://www.instagram.com/chittajitnath/",
    linkedin: "https://www.linkedin.com/in/chittajit-nath-1b0b6b23a/",
    position: "Senior Member",
    github: "https://github.com/iamchitta07",
    facebook: "https://www.facebook.com/chittajit.nath.7",
  },
  {
    id: 4,
    name: "Pratik Kuntia",
    email: "chittajitnath@gmail.com",
    phone: "1234567890",
    year: 2028,
    poster_image:
      "https://instagram.fccu5-1.fna.fbcdn.net/v/t51.82787-19/681879821_18077622302537977_648159541439660314_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fccu5-1.fna.fbcdn.net&_nc_cat=101&_nc_oc=Q6cZ2gFlvBzQyffGIC5YKP4uxrg9pRzwjkqKsIdIwaJYP1254g2UPN70wfVqhhQiQiL5U9M&_nc_ohc=AQFJ9KkGfIcQ7kNvwHqWGCx&_nc_gid=QgfiBcCOQXEj-DjcI82tjQ&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AQAHRx6G6caEGv3fU0urgXJz6NWXNwi5jPAWxA5YLVCncQ&oe=6A4DEAEA&_nc_sid=7a9f4b",
    insta: "https://www.instagram.com/pratikkuntia/",
    linkedin: "https://www.linkedin.com/in/pratik-kuntia-8b0b6b23a/",
    position: "Senior Member",
    github: "https://github.com/iamchitta07",
    facebook: "https://www.facebook.com/chittajit.nath.7",
  },
  {
    id: 2,
    name: "Abhisekh Majhi",
    email: "abhisekhmajhi@gmail.com",
    phone: "1234567890",
    year: 2027,
    poster_image:
      "https://scontent.cdninstagram.com/v/t51.82787-19/538889075_17957736887978697_7806392552778508017_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=100&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=rRrn3iasVTcQ7kNvwHWfcju&_nc_oc=AdpHO-OI-oUR8H7O41h3ZaAnWo7xt9KGaVV5raES8fQG84MpPhUqa6hIntKHNT45YYY&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_gid=Vk7YQ-v5AKgmJc6OCbnLmQ&_nc_ss=7b6a8&oh=00_AQDZcgsa7iHsGxckY17ldsZ3CqbMb-OxWBOYALvtomsj_Q&oe=6A4DEA3B",
    insta: "https://www.instagram.com/abhisekhmajhi/",
    linkedin: "https://www.linkedin.com/in/abhisekh-majhi-1b0b6b23a/",
    position: "RnD Head",
    github: "https://github.com/abhisekhmajhi",
    facebook: null,
  },
  {
    id: 5,
    name: "Arpan Chandra",
    email: "abhisekhmajhi@gmail.com",
    phone: "1234567890",
    year: 2027,
    poster_image:
      "https://instagram.fccu5-1.fna.fbcdn.net/v/t51.82787-19/683877106_18397017043157636_5535303933341499149_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fccu5-1.fna.fbcdn.net&_nc_cat=108&_nc_oc=Q6cZ2gFhODNTi9KnowaJv2USULgGQFQ7KViAWAR_UK_IbAtSl-0_P1m4pG3Wu2RfDzpnJEE&_nc_ohc=CJjwEUa7GbMQ7kNvwF2wC6D&_nc_gid=B519aWYF8mmyM7H76PiCow&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AQCjp6-Z_3o11cH6HIX-jdi6Ty4IYcWifkZ_yvPnkrxM7g&oe=6A4E02E5&_nc_sid=7a9f4b",
    insta: "https://www.instagram.com/arpanchandra07/",
    linkedin: "https://www.linkedin.com/in/arpan-chandra-1b0b6b23a/",
    position: "Execution Head",
    github: "https://github.com/arpanchandra07",
    facebook: null,
  },
  {
    id: 3,
    name: "Adriyo Gayen",
    email: "adriyogayen@gmail.com",
    phone: "1234567890",
    year: 2029,
    poster_image:
      "https://instagram.fccu5-1.fna.fbcdn.net/v/t51.82787-19/579990996_18041613482704779_6729085523501174002_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby45NjAuYzIifQ&_nc_ht=instagram.fccu5-1.fna.fbcdn.net&_nc_cat=103&_nc_oc=Q6cZ2gHoxJuuJtJ5NXtcIaFs56cKLJ_h0CPWb0wpKgPnQW4squeo5lAz1DFdI3TEX5S-cio&_nc_ohc=Nb8Kwx4jozoQ7kNvwGkxnRZ&_nc_gid=3Gx401JNhugtfN3e7lO1HQ&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AQD8AmKCh22W3hx88h1A2IXQEkLrGmrHup1xLe0ZHtXzXA&oe=6A4DFC98&_nc_sid=7a9f4b",
    insta: "https://www.instagram.com/adriyogayen/",
    linkedin: "https://www.linkedin.com/in/adriyo-gayen-1b0b6b23a/",
    position: "Junior Member",
    github: "https://github.com/adriyogayen",
    facebook: null,
  },
  {
    id: 4,
    name: "Surojit Dey",
    email: "surojitdey@gmail.com",
    phone: "1234567890",
    year: 2029,
    poster_image:
      "https://instagram.fccu5-1.fna.fbcdn.net/v/t51.82787-19/567649419_17852231352561472_7232584761020420542_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby43MjAuYzIifQ&_nc_ht=instagram.fccu5-1.fna.fbcdn.net&_nc_cat=104&_nc_oc=Q6cZ2gF1MvbHYD36rYRNTPttXO53SGd1Iw_UU6ygwQ1n79nc9k9chCYVLlDosjqA2JUgGvs&_nc_ohc=hvAZI7e6jvkQ7kNvwFjmBNm&_nc_gid=y1_4f9xmTX0hXKTNcJ0lcA&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AQAUtzPOg7C7aePGjfVyKYdizxnxlZUO1v9whaSK6Twj2Q&oe=6A4DE190&_nc_sid=7a9f4b",
    insta: "https://www.instagram.com/surojitdey/",
    linkedin: "https://www.linkedin.com/in/surojit-dey-1b0b6b23a/",
    position: "Junior Member",
    github: "https://github.com/surojitdey",
    facebook: null,
  },
  {
    id: 7,
    name: "Pritam Das",
    email: "pritamdas@gmail.com",
    phone: "1234567890",
    year: 2026,
    poster_image:
      "https://scontent.cdninstagram.com/v/t51.82787-19/570577329_18193019833324857_6919920375093668974_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=105&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=pFhsdGQFF9UQ7kNvwG_X1t0&_nc_oc=AdqM-nVEvbKStI20Blu4aXlinfNgWdXx2EigBw_Hksk9nCNkMAIqoW0fDLfmXZOtPMc&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_gid=5S5rgu57NJ_zUJDDPgrmQg&_nc_ss=7b6a8&oh=00_AQDyyIcDVC7JTpoKJn8DddszRSYWbqJamr9NOuFdOXCmjg&oe=6A4DE0D8",
    insta: "https://www.instagram.com/pritamdas/",
    linkedin: "https://www.linkedin.com/in/pritam-das-1b0b6b23a/",
    position: "Alumni",
    github: "https://github.com/pritamdas",
    facebook: null,
  },
  {
    id: 8,
    name: "Durba Sinha",
    email: "durbasinha@gmail.com",
    phone: "1234567890",
    year: 2026,
    poster_image:
      "https://scontent.cdninstagram.com/v/t51.2885-19/491492966_975786488049209_5654454726017326061_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=104&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=tRrJRnCV2OoQ7kNvwEoXUr-&_nc_oc=AdpheLq-y1DzMArVQ9i1MNMZU5tRfWIXxhaZ8WK3io-CW-Nhjl70vKWOhrN7LDtd_G8&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_ss=7b6a8&oh=00_AQCXvQvEjUzyhsynDuFG7kILGpoLBHKEuQb0fNMzPU4wFg&oe=6A4DD236",
    insta: "https://www.instagram.com/pritamdas/",
    linkedin: "https://www.linkedin.com/in/pritam-das-1b0b6b23a/",
    position: "Alumni",
    github: "https://github.com/pritamdas",
    facebook: null,
  },
];

export async function getTeam(): Promise<MemberProps[] | undefined> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dummyTeam);
    }, 2000);
  });
}
