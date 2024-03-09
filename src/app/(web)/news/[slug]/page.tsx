'use client';
import { getBlogPost } from "@/libs/apis";
import LoadingSpinner from "../../loading";
import useSWR from "swr";
import styles from "../../../PageStyles.module.scss";
import Image from "next/image";
import { urlFor } from "@/libs/sanity";
import { PortableText } from "@portabletext/react";
import { RichText } from "@/components/RichText/RichText";

const PostPage = (props: { params: { slug: string } }) => {
  const {
    params: { slug },
  } = props;

  const fetchPost = async () => getBlogPost(slug);

  const { data: post, error, isLoading } = useSWR('/api/post', fetchPost);

  if (error) throw new Error('Cannot fetch data');
  if (typeof post === 'undefined' && !isLoading)
    throw new Error('Cannot fetch data');

  if (!post) return <LoadingSpinner />;

    const date = new Date(post.publishedAt);
    const formattedDate = date.toLocaleDateString('pl-PL', {
      day: 'numeric', month: 'long', year: 'numeric'
    });

  return (
    <div className={styles.blogPost}>
      <div className="container">
        <div className={styles.wrapper}>
          <article className={styles.mainContent}>
            <h1 className={styles.blogPostTitle}>
              {post.title}
            </h1>
            <p className={styles.blogPostDate}>{formattedDate}</p>
            <section>
              <Image
                src={urlFor(post.mainImage).url()}
                alt={post.title}
                width={700}
                height={500}
                className={styles.blogPostImage}
              />
            </section>
            <section className={styles.blogPostContent}>
              <PortableText
                value={post?.body}
                components={RichText}
              />
            </section>
          </article>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
