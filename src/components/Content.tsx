import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import rehypeRaw from "rehype-raw";
import remarkDirective from "remark-directive";
import { useParams } from "react-router-dom";
import { linkTag } from "../utils/tags";

export const Content: React.FC = () => {
  const [content, setContent] = useState<string>("");
  const [page, setPage] = useState<string>("");

  const params = useParams();
  const pathPage = params.page;

  useEffect(() => {
    if (typeof pathPage !== "undefined") {
      setPage(`../pages/${pathPage}.md`);
    } else {
      setPage("../pages/Home.md");
    }
  }, [pathPage]);

  useEffect(() => {
    if (page !== ""){ // check for empty page string
      import(/* @vite-ignore */ page).then((res) => {
        fetch(res.default)
          .then((response) => response.text())
          .then((text) => setContent(text));
      });
    };
  }, [page]);

  return (
    <>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkDirective, linkTag]}
        rehypePlugins={[rehypeRaw]}
        components={{
          code({ node, inline, className, children, style, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                style={materialDark}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
        skipHtml={false}
      >
        {content}
      </ReactMarkdown>
    </>
  );
};
