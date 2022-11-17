import { GetStaticProps } from "next";
import htmlize from "../src/htmlize";
import Layout from "../src/Layout";
import styles from "../styles/index.module.css";

interface HomeProps {
  html: string;
}
export default function Home({ html }: HomeProps) {
  return <Layout
    title="Structure and Homotopy of Configuration Spaces | SHoCoS"
    description="Structure and Homotopy of Configuration Spaces (SHoCoS), a project funded by the Agence Nationale de la Recherche (ANR-22-CE40-0008)."
    location=""
  >

    <div className={styles["index"]}
      dangerouslySetInnerHTML={{ __html: html }} />
  </Layout>;
}

export const getStaticProps: GetStaticProps<HomeProps, {}> = () => ({
  props: {
    html: htmlize("index"),
  },
});
