export default function ListSelection(editor, opts) {
  // ? Should the panel also be defined here?

  // Add a command that appends the target list to the page attributes.
  editor.Commands.add("lists:add-list-to-page", (editor, sender, options) => {
    const p = editor.Pages.get(options.targetPageId);
    p.set("targeList", options.targetList);
  });
}
