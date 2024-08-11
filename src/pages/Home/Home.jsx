import { Header } from "../../components/Header/Header";
import Slide from "../../components/Slide";
import Article from "../../components/Article";
import SideBar from "../../components/SideBar";
import WidgetDiscord from "../../components/WidgetDiscord";
import { SideBarDownload } from "../../components/SideBarDownload/SideBarDownload";

const Home = () => {
  return (
    <div>
      <section className="main-content">
        <div className="content-area flex-sbs">
          <main className="main">
            <Slide />
            <Article />
          </main>

          <aside className="aside flex-sbs">
            <SideBar />
            <SideBarDownload />
            <WidgetDiscord />
          </aside>

          <aside className="aside flex-sbs"></aside>
        </div>
      </section>
    </div>
  );
};

export default Home;
