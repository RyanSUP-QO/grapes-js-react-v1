export default function (editor) {
  editor.Commands.add("save-template", {
    run(editor) {
      const data = editor.getProjectData();
      const supabaseStorageManager = editor.Storage.get("supabase");
      supabaseStorageManager.store(data);
    },
  });
}
