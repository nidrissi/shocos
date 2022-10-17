import { GetStaticProps } from "next";
import htmlize from "../src/htmlize";
import Layout from "../src/Layout";
import styles from "../styles/index.module.css";

interface HomeProps {
  html: string;
}
export default function Home({ html }: HomeProps) {
  return <Layout
    title="SHoCoS | ANR-22-CE40-0008"
    description="Structure and Homotopy of Configuration Spaces (SHoCoS), a project funded by the Agence Nationale de la Recherche (ANR-22-CE40-0008)."
    location=""
  >
    <nav className={styles["navbar"]}>
      <a href="#presentation">Presentation</a>
      <a href="#members">Members</a>
      <a href="#events">Events</a>
      <a href="#postdoctoral-position">Postdoc</a>
      <a href="#publications">Publications</a>
    </nav>

    <div className={styles["index"]}
      dangerouslySetInnerHTML={{ __html: html }} />
  </Layout>;

}

export const getStaticProps: GetStaticProps<HomeProps, {}> = () => ({
  props: {
    html: htmlize("index"),
  },
});
