import { GetStaticProps } from "next";
import htmlize from "../src/htmlize";
import Layout from "../src/Layout";

interface Conf0523 {
  html: string;
}
export default function Conf0523({ html }: Conf0523) {
  return <Layout
    title="Workshop on Homology of Configuration Spaces and related topics | SHoCoS"
    description="An event organized as part of the ANR project 'Structure and Homotopy of Configuration Spaces' (SHoCoS)."
    location="conf0523"
  >
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </Layout>;
}

export const getStaticProps: GetStaticProps<Conf0523, {}> = () => ({
  props: {
    html: htmlize("conf0523"),
  },
});
