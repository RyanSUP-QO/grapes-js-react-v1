export default function ListSelection(editor, opts) {
  editor.Commands.add("lists:add-list-to-page", (editor, sender, options) => {
    const p = editor.Pages.get(options.pageId);
    p.set("listId", options.listId);
  });
}
