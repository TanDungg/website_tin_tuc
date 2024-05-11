import { AppstoreOutlined, HomeOutlined } from "@ant-design/icons";

function Header() {
  return (
    <header className="container-header">
      <img
        src="src/assets/images/LogoTinTuc.png"
        alt="Logo tin tức"
        className="image-logo"
      />
      <nav className="header-nav">
        <ul>
          <a href="#">
            <HomeOutlined />
            Trang chủ
          </a>
        </ul>
        <ul>
          <a href="#">
            <AppstoreOutlined />
            Giới thiệu
          </a>
        </ul>
        <ul>
          <a href="#">
            <AppstoreOutlined />
            Giới thiệu
          </a>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
