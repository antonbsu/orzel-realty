'use client';
import { getBlogPosts } from "@/libs/apis";
import { BlogPost } from "@/models/blogPost";
import { useEffect, useState } from "react";

import styles from "../../app/PageStyles.module.scss";
import Post from "@/components/Post/BlogPost";

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
        <div>
          <ul className={styles.blogPostsWrapper}>
            {blogPosts.map((post) => (
              <li key={post._id}>
                <Post post={post} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default NewsComponent;