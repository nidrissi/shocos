import fs from "fs";
import path from "path";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify/lib";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import remarkSmartypants from "remark-smartypants";

const processor = remark()
    .use(remarkGfm)
    .use(remarkSmartypants, { dashes: "oldschool" })
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeSlug)
    .use(rehypeStringify, { allowDangerousHtml: true });

export default function htmlize(item: string): string {
    const fullPath = path.join(process.cwd(), "content", item + ".md");
    const md = fs.readFileSync(fullPath);
    const result = processor.processSync(md);
    return result.toString();
}
