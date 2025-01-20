import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const BlogLayout = ({ children }) => {
  return (
    <section>
      <Header />
      <main>{children}</main>
      <Footer />
    </section>
  );
};

export default BlogLayout;
