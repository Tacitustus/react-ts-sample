import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import "./Home.css";

const Home = () => {
  return (
    <Layout>
      <div className="home-left">
        <h3>ナビゲーション</h3>
        <ul className="nav-list">
          <li>
            <Link to="/news">お知らせ</Link>
          </li>
          <li>
            <Link to="/profile">プロフィール</Link>
          </li>
        </ul>
      </div>
      <div className="home-center">
        <h2>ようこそ！</h2>
        <p>React製ホームページのトップ画面です。</p>
      </div>
      <div className="home-right"></div>
    </Layout>
  );
};

export default Home;
