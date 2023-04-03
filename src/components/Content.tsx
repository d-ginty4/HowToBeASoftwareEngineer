import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export const Content = () => {
  const [content, setContent] = useState("");
  const [page, setPage] = useState("../pages/Home.md");

  // TODO Create custom tag to change page

  useEffect(() => {
    import(page).then((res) => {
      fetch(res.default)
        .then((response) => response.text())
        .then((text) => setContent(text));
    });
  }, []);

  useEffect(() => {
    import(page).then((res) => {
      fetch(res.default)
        .then((response) => response.text())
        .then((text) => setContent(text));
    });
  }, [page]);

  const changePage = (page: string) => {
    setPage(`../pages/${page}`);
  };

  return (
    <>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }) {
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
      >
        {content}
      </ReactMarkdown>
    </>
  );
};
