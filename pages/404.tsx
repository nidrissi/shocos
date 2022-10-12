import Link from "next/link";

import Layout from "../src/Layout";
import styles from "../styles/404.module.css";

export default function Error404() {
  return (
    <Layout title="404 Not Found" description="Not Found">
      <div className={styles["hero"]}>
        <div>
          <h1 role="banner">
            🗺️&nbsp;404 Not Found
          </h1>
          <p>There is no page at this address.</p>
          <Link href="/">
            <a>Click here to go back to the front page.</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
