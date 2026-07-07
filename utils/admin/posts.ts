"use server";

import { PosterProps } from "@/types";

export interface PostSubmitErrorProps {
  posters: string | null;
  title: string | null;
  comment: string | null;
}

export async function handlePostSubmit(_prevState: PostSubmitErrorProps, formData: FormData) {
  // TODO: Implement post submission logic
  // For now, just return the form data as is
  console.log(formData);

  return new Promise((resolve) => {
    resolve({
      posters: null,
      title: null,
      comment: null,
    });
  });
}

const dummyPosters: PosterProps[] = [
  {
    id: 1,
    blog_title: "A Major Leap For Clean Water! Bioengineered Algae Trap Microplastics Effectively.",
    blog_thumbnail: [
      {
        id: 1,
        type: "IMAGE",
        url: "https://instagram.fccu5-1.fna.fbcdn.net/v/t51.82787-15/589946071_18086710721031891_197059505726648732_n.webp?_nc_cat=110&ig_cache_key=Mzc5NTIwMjkxNzM3Mjg3NTg1OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=2EpnojH_B6QQ7kNvwELoLeK&_nc_oc=AdpbGNcN7tIy_Lk8QRkM-MbVMdi2PWoGDzrQ6ba6AFDq-v31G0CMCm8Uz366-cI7CVw&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fccu5-1.fna&_nc_gid=CGr48RZn-NkUa9sLTYIgSw&_nc_ss=7a22e&oh=00_AQDysbdFkEotevOQaiOfVrj-HsEBEMX0aSgC1QClmCtUMA&oe=6A4D0C78",
      },
    ],
    publisher_id: 1,
    published_date: new Date(2026, 5, 12, 11, 30, 30),
    blog_description:
      "Researchers at the University of Missouri-Columbia have developed an innovative method to remove microplastics from drinking water using genetically engineered algae. Led by Susie Dai, the team discovered that the modified algae produce limonene, a natural oil similar to substances found in orange peels. Because limonene repels water like plastic does, it attracts and traps tiny microplastic particles, causing them to clump together and making them easier to remove from water. Microplastics have become a global environmental concern, as they are found in oceans, rivers, food, and even the human body. Conventional filtration systems often struggle to capture these extremely small particles. In laboratory tests, the algae removed significant amounts of microplastics quickly and efficiently.",
    editor_id: null,
    edited_date: null,
    deleted: false,
  },
  {
    id: 2,
    blog_title: "How Drones Stay Stable ! The Power of PID Control.",
    blog_thumbnail: [
      {
        id: 1,
        type: "IMAGE",
        url: "https://instagram.fccu5-1.fna.fbcdn.net/v/t51.82787-15/719519485_17889938754549872_8767630551261783053_n.webp?_nc_cat=110&ig_cache_key=MzkxNjIyODc2NjgyNDQ2ODc4Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=v0K2scD5mb4Q7kNvwGAovwv&_nc_oc=AdrtkY7BILJHpIQsSJw_3MG9MdkaWXIaWwvxHSYh45ZYRdjwbklrardJt3I7HKuNS8o&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fccu5-1.fna&_nc_gid=CGr48RZn-NkUa9sLTYIgSw&_nc_ss=7a22e&oh=00_AQBpVneffheL1tI1aRdnwj-ETbPIa2qoACvxlAt91mi9wA&oe=6A4D1FF1",
      },
      {
        id: 2,
        type: "IMAGE",
        url: "https://instagram.fccu5-1.fna.fbcdn.net/v/t51.82787-15/718648862_17889938793549872_861973895317290964_n.webp?_nc_cat=102&ig_cache_key=MzkxNjIyODc2ODYyNzk1NjA4Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=YeHPc45OXAkQ7kNvwF0ppqv&_nc_oc=AdrC2qYhS_AtGXsRm5PPiPXEHabihGaOvPckSdLCOYjejnTAaOUj6diGPiTiOfqdC4s&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fccu5-1.fna&_nc_gid=CGr48RZn-NkUa9sLTYIgSw&_nc_ss=7a22e&oh=00_AQBIhMScOhCeF9mSxeA-0L7FnL77w9eiVd_udoD7GPwVvA&oe=6A4D2CBC",
      },
    ],
    publisher_id: 2,
    published_date: new Date(2026, 4, 12, 11, 30, 30),
    blog_description:
      "A PID controller is the hidden brain that keeps a drone calm and steady in the air. It balances three actions Proportional, Integral, and Derivative to constantly correct the drone’s motion.",
    editor_id: 1,
    edited_date: new Date(2026, 4, 15, 11, 30, 30),
    deleted: false,
  },
  {
    id: 3,
    blog_title:
      "Researchers Have Developed Next-Generation Plant Immune System to Combat Bacterial Diseases.",
    blog_thumbnail: [
      {
        id: 4,
        type: "VIDEO",
        url: "https://www.image2url.com/r2/default/videos/1783065329162-f8be89aa-1048-434d-8f8a-de587be0a936.mp4",
      },
    ],
    publisher_id: 2,
    published_date: new Date(2026, 2, 12, 13, 30, 30),
    blog_description:
      "Researchers at the University of California, Davis have used artificial intelligence to boost plant immunity, helping crops like tomatoes and potatoes resist bacterial infections. Using AlphaFold, an AI system that predicts protein structures, they redesigned the immune receptor FLS2, which identifies flagellin, a bacterial movement protein. Since bacteria mutate flagellin to escape detection, the AI-guided redesign enabled plants to recognize more bacterial variants and strengthen their defenses.",
    editor_id: 1,
    edited_date: new Date(2026, 4, 15, 11, 30, 30),
    deleted: false,
  },
];

export const getPosts = async (): Promise<PosterProps[]> => {
  // TODO: Implement get posts logic
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dummyPosters);
    }, 2000);
  });
};

const example: PosterProps = {
  id: 2,
  blog_title: "How Drones Stay Stable ! The Power of PID Control.",
  blog_thumbnail: [
    {
      id: 1,
      type: "IMAGE",
      url: "https://instagram.fccu5-1.fna.fbcdn.net/v/t51.82787-15/729655019_18105367706031891_2414497507664458224_n.jpg?stp=dst-jpg_e35_s1080x1080_tt6&_nc_cat=107&ig_cache_key=MzkzMDk4NTExNTUzMjIzNjEyMQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuNDA5Ni5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=fIFRQZqx9cAQ7kNvwHKNt9-&_nc_oc=AdqyhaKt5SSW3xQfoXVk4VNGZrNqdf54B8mN36RbqGgn9lstJarT8dF0eQdsE15JinI&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fccu5-1.fna&_nc_gid=Njns34YhsHL-5hIZ3-bY7Q&_nc_ss=7a22e&oh=00_AQB-8w8WYEUzdlJ3fX2JZ51GFLkxejlNX_b4KSHVP95VJw&oe=6A4D1D1E",
    },
  ],
  publisher_id: 2,
  published_date: new Date(2026, 4, 12, 11, 30, 30),
  blog_description:
    "A PID controller is the hidden brain that keeps a drone calm and steady in the air. It balances three actions Proportional, Integral, and Derivative to constantly correct the drone’s motion.",
  editor_id: 1,
  edited_date: new Date(2026, 4, 15, 11, 30, 30),
  deleted: false,
};

export const getPost = async (id: number): Promise<PosterProps | undefined> => {
  // TODO: Implement get post logic
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(example);
    }, 2000);
  });
};


