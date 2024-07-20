import { PostInfo } from "@/types/postInfo";

import PostImage1 from "@/assets/featured_post_1.png";
import PostImage2 from "@/assets/featured_post_2.png";
import PostImage3 from "@/assets/featured_post_3.png";

const posts: PostInfo[] = [
  {
    image: PostImage1.src,
    id: "1",
    title: "UX review presentations",
    author: "Olivia Rhye",
    date: "20 Jan 2022",
    abstract:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et alias ad asperiores corporis distinctio blanditiis nisi deserunt neque voluptate minima!",
    tags: ["Design", "Research", "Presentation"],
  },
  {
    image: PostImage2.src,
    id: "2",
    title: "Migrating to Linear 101",
    author: "Phoenix Baker",
    date: "19 Jan 2022",
    abstract:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et alias ad asperiores corporis distinctio blanditiis nisi deserunt neque voluptate minima!",
    tags: ["Design", "Research"],
  },
  {
    image: PostImage3.src,
    id: "3",
    title: "UX review presentations",
    author: "Lana Steiner",
    date: "18 Jan 2022",
    abstract:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et alias ad asperiores corporis distinctio blanditiis nisi deserunt neque voluptate minima!",
    tags: ["Design", "Research"],
  },
  {
    image: PostImage1.src,
    id: "4",
    title: "UX review presentations",
    author: "Olivia Rhye",
    date: "20 Jan 2022",
    abstract:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et alias ad asperiores corporis distinctio blanditiis nisi deserunt neque voluptate minima!",
    tags: ["Design", "Research", "Presentation"],
  },
  {
    image: PostImage2.src,
    id: "5",
    title: "Migrating to Linear 101",
    author: "Phoenix Baker",
    date: "19 Jan 2022",
    abstract:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et alias ad asperiores corporis distinctio blanditiis nisi deserunt neque voluptate minima!",
    tags: ["Design", "Research"],
  },
  {
    image: PostImage3.src,
    id: "6",
    title: "UX review presentations",
    author: "Lana Steiner",
    date: "18 Jan 2022",
    abstract:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et alias ad asperiores corporis distinctio blanditiis nisi deserunt neque voluptate minima!",
    tags: ["Design", "Research"],
  },
];

export default function getAllPosts() {
  return new Promise<PostInfo[]>((resolve) =>
    setTimeout(() => resolve(posts), 500)
  );
}
