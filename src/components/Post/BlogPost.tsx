import { urlFor } from "@/libs/sanity";
import { BlogPost } from "@/models/blogPost";
import Image from "next/image";
import Link from "next/link";

import styles from './BlogPost.module.scss';


type PostProps = {
  post: BlogPost;
};

const Post: React.FC<PostProps> = ({ post }) => {

  const date = new Date(post.publishedAt);
  const formattedDate = date.toLocaleDateString('pl-PL', {
    day: 'numeric', month: 'long', year: 'numeric'
  });

  return (
    <Link
      href={`/news/${post.slug.current}`}
      className={styles.blogPost}
    >
      <Image
        src={urlFor(post.mainImage).url()}
        alt={post.title}
        width={500}
        height={400}
        className={styles.blogPostImage}
      />
      <div className={styles.blogPostData}>
        <h2 className={styles.blogPostTitle}>{post.title}</h2>
        <p className={styles.blogPostDate}>{formattedDate}</p>
        <p className={styles.blogPostExcerpt}>{post.excerpt.slice(0, 50)}...</p>
        <Link className={styles.blogPostLink} href={`/news/${post.slug.current}`}>Czytać →</Link>
      </div>
    </Link>
  );
};

export default Post;