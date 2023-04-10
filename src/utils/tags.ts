import { visit } from "unist-util-visit";

export const linkTag = () => {
  return (tree: any) => {
    visit(tree, (node: any) => {
      if (
        node.type === "textDirective" ||
        node.type === "leafDirective" ||
        node.type === "containerDirective"
      ) {
        if (node.name !== "link") return;

        const data = node.data || (node.data = {});
        const attributes = node.attributes || {};

        data.hName = "a";
        data.hProperties = {
          class: attributes.class,
          href: attributes.id,
        };
      }
    });
  };
};
