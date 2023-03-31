import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export const Page = () => {
  const [content, setContent] = useState("")
  useEffect(()=> {
    import("../data/AWS.md").then((res) => {
      fetch(res.default)
        .then((response) => response.text())
        .then((text) => setContent(text));
    });
  }, [])

  return (
    <>
      <ReactMarkdown>{content}</ReactMarkdown>
    </>
  );
};
