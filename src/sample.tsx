import React from "react";
import ReactMarkdown from "react-markdown";
import remarkCustomSyntax from "remark-custom-syntax";
import remarkGfm from "remark-gfm";

const mySyntax1 = {
  // Define the syntax for the first custom rule
  tokenize: (eat, value, silent) => {
    if (value.startsWith("%%")) {
      const match = value.match(/^%%([a-zA-Z0-9]+)%%/);
      if (match) {
        return eat(match[0])({
          type: "mySyntax1",
          value: match[1],
        });
      }
    }
  },
  resolve: (node, file) => {
    const value = node.value;
    const transformedValue = value.toUpperCase();
    node.type = "html";
    node.value = `<div>${transformedValue}</div>`;
  },
};

const mySyntax2 = {
  // Define the syntax for the second custom rule
  tokenize: (eat, value, silent) => {
    if (value.startsWith("!!")) {
      const match = value.match(/^!!([a-zA-Z0-9]+)!!/);
      if (match) {
        return eat(match[0])({
          type: "mySyntax2",
          value: match[1],
        });
      }
    }
  },
  resolve: (node, file) => {
    const value = node.value;
    const transformedValue = value.toLowerCase();
    node.type = "html";
    node.value = `<span>${transformedValue}</span>`;
  },
};

const markdown =
  "This is some %%custom%% syntax and !!another!! syntax.\n\nIt also supports **GitHub Flavored Markdown**.";

const MyCustomComponent = ({ value }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkCustomSyntax, [mySyntax1, mySyntax2], remarkGfm]}
      escapeHtml={false}
    >
      {value}
    </ReactMarkdown>
  );
};

export default MyCustomComponent;
