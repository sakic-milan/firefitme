import Layout from "components/layout/Layout";

const SinglePost = ({ post }) => {
  const { title, content } = post;
  return (
    <Layout>
      <h1>{title}</h1>
      <p>{content}</p>
    </Layout>
  );
};

export async function getStaticPaths() {
  const res = await fetch("http://localhost:1337/posts");
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  //TODO: falback to true to regenerate new pages or revalidate.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const res = await fetch(`http://localhost:1337/posts?slug=${slug}`);
  const posts = await res.json();

  return { props: { post: posts[0] } };
}

export default SinglePost;
