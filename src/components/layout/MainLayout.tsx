import Footer from "../footer/Footer";
import Header from "../header/Header";

interface MainLayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default MainLayout;
