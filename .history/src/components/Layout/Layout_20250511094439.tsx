import "./Layout.css"; // CSSをインポート
import { LayoutProps } from "./LayoutProps";

export const Layout = (props: LayoutProps) => {
  return (
    <div className="layout-wrapper">
      <header className="layout-header">
        <h1>My Homepage</h1>
      </header>

      <main className="layout-main">{children}</main>

      <footer className="layout-footer">
        <p>&copy; 2025 My Website</p>
      </footer>
    </div>
  );
};
