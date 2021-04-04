import Link from "next/link";
import Layout from "components/layout/Layout";

const Blog = (props) => {
  console.log("!!props", props);
  const { posts } = props;
  return (
    <Layout>
      <h1>Blog</h1>

      {posts &&
        posts.map((post) => (
          <Link href={`blog/${post.slug}`}>
            <a>{post.title}</a>
          </Link>
        ))}
    </Layout>
  );
};

export async function getStaticProps(context) {
  const response = await fetch("http://localhost:1337/posts");
  const posts = await response.json();

  return {
    props: { posts },
  };
}

export default Blog;
