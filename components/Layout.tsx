import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: any) {
  return (
    <div className="bg-primary">
      <Header />

      <section className="min-h-screen text-gray-600 body-font flex flex-col items-center justify-center px-5 py-24 ">
        <div>{children}</div>
      </section>

      <Footer />
    </div>
  );
}
