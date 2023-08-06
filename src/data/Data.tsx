export const Projects = [
  {
    project_id: 1,
    slug: "seaside-hotel-2022-guestrooms",
    category: "hotel_projects",
    year: 2022,
    project_title: "Seaside Hotel 2022 Guestrooms",
    project_description: "Bespoke production of loose furniture and lighting",
    location: "Pula, Croatia",
    cover_image: "/images/portfolio/p1_cover.webp",
    image_1: "/images/portfolio/p1_img1.webp",
    image_2: "/images/portfolio/p1_img2.webp",
    image_3: "/images/portfolio/p1_img3.webp",
  },
  {
    project_id: 2,
    slug: "seaside-hotel-2022-restaurants",
    category: "hotel_projects",
    year: 2022,
    project_title: "Seaside Hotel 2022 Restaurants",
    project_description: "Bespoke production of loose furniture and lighting",
    location: "Pula, Croatia",
    cover_image: "/images/portfolio/p2_cover.webp",
    image_1: "/images/portfolio/p2_img1.webp",
    image_2: "/images/portfolio/p2_img2.webp",
    image_3: "/images/portfolio/p2_img3.webp",
  },
  {
    project_id: 3,
    slug: "seaside-hotel-2022-public-areas",
    category: "hotel_projects",
    year: 2022,
    project_title: "Seaside Hotel 2022 Public Areas",
    project_description: "Bespoke production of loose furniture and lighting",
    location: "Pula, Croatia",
    cover_image: "/images/portfolio/p3_cover.webp",
    image_1: "/images/portfolio/p3_img1.webp",
    image_2: "/images/portfolio/p3_img2.webp",
    image_3: "/images/portfolio/p3_img3.webp",
  },
  {
    project_id: 4,
    slug: "seaside-hotel-2020-public-areas",
    category: "hotel_projects",
    year: 2020,
    project_title: "Seaside Hotel 2020 Public Areas",
    project_description: "Bespoke production of loose furniture",
    location: "Pula, Croatia",
    cover_image: "/images/portfolio/p4_cover.webp",
    image_1: "/images/portfolio/p4_img1.webp",
    image_2: "/images/portfolio/p4_img2.webp",
    image_3: "/images/portfolio/p4_img3.webp",
  },
  {
    project_id: 5,
    slug: "city-hotel-2020-guestrooms",
    category: "hotel_projects",
    year: 2020,
    project_title: "City Hotel 2020 Guestrooms",
    project_description: "Bespoke production of headboards and side tables",
    location: "Utrecht, Netherlands",
    cover_image: "/images/portfolio/p5_cover.webp",
    image_1: "/images/portfolio/p5_img1.webp",
    image_2: "/images/portfolio/p5_img2.webp",
    image_3: null,
  },
  {
    project_id: 6,
    slug: "seaside-hotel-2019-public-areas",
    category: "hotel_projects",
    year: 2019,
    project_title: "Seaside Hotel 2019 Public Areas",
    project_description: "Bespoke production of loose furniture and lighting",
    location: "Pula, Croatia",
    cover_image: "/images/portfolio/p6_cover.webp",
    image_1: "/images/portfolio/p6_img1.webp",
    image_2: "/images/portfolio/p6_img2.webp",
    image_3: "/images/portfolio/p6_img3.webp",
  },
  {
    project_id: 7,
    slug: "we-work-office-2022",
    category: "office_projects",
    year: 2022,
    project_title: "We Work Office 2022",
    project_description: "Bespoke production of loose furniture and lighting",
    location: "London, UK",
    cover_image: "/images/portfolio/p7_cover.webp",
    image_1: "/images/portfolio/p7_img1.webp",
    image_2: "/images/portfolio/p7_img2.webp",
    image_3: "/images/portfolio/p7_img3.webp",
  },
  {
    project_id: 8,
    slug: "we-work-office-2021",
    category: "office_projects",
    year: 2021,
    project_title: "We Work Office 2021",
    project_description: "Bespoke production of loose furniture and lighting",
    location: "London, UK",
    cover_image: "/images/portfolio/p8_cover.webp",
    image_1: "/images/portfolio/p8_img1.webp",
    image_2: "/images/portfolio/p8_img2.webp",
    image_3: "/images/portfolio/p8_img3.webp",
  },
];

export interface Project {
  project_id: number;
  slug: string;
  category: string;
  year: number;
  project_title: string;
  project_description: string;
  location: string;
  cover_image?: string;
  image_1?: string | null;
  image_2?: string | null;
  image_3?: string | null;
}
