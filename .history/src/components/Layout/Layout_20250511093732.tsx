export const Layout = ({ children }) => {
  return (
    <div style={styles.wrapper}>
      {/* ヘッダー */}
      <header style={styles.header}>
        <h1>My Homepage</h1>
      </header>

      {/* メインコンテンツ */}
      <main style={styles.main}>{children}</main>

      {/* フッター */}
      <footer style={styles.footer}>
        <p>&copy; 2025 My Website</p>
      </footer>
    </div>
  );
};
