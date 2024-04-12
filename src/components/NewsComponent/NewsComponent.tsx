'use client';
import { getBlogPosts } from "@/libs/apis";
import { BlogPost } from "@/models/blogPost";
import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/effect-coverflow";

import styles from "../../app/PageStyles.module.scss";
import Post from "@/components/Post/BlogPost";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const NewsComponent = () => {

  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const posts = await getBlogPosts();
        setBlogPosts(posts);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <section className={styles.blogPostsMainPage}>
      <div className="container">
        <h2 className="h2">Aktualności</h2>
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: '.nextBtnNews',
            prevEl: '.prevBtnNews',
          }}
          grabCursor={true}
          draggable={true}
          // centeredSlides={true}
          spaceBetween={20}
          breakpoints={{
            576: {
              slidesPerView: 1, // Override slidesPerView for screens >= 576px
            },
            768: {
              slidesPerView: 2,
            },
            980: {
              slidesPerView: 3,
            },
          }}
        >
          {blogPosts.map((post) => (
            <SwiperSlide key={post._id}>
              <Post post={post} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="navButtons">
          <button className="navButtonsBtn prevBtnNews">
            <FaChevronLeft color="#351949" fontSize="1.5em" />
          </button>
          <button className="navButtonsBtn nextBtnNews">
            <FaChevronRight color="#351949" fontSize="1.5em" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default NewsComponent;