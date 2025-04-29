export default function (editor) {
  editor.Panels.addButton("options", {
    id: "save-template",
    className: "fa fa-save",
    command: "save-template",
    attributes: { title: "Save Template" },
  });

  editor.Panels.addButton("options", {
    id: "load-template",
    className: "fa fa-folder",
    command: "load-template",
    attributes: { title: "Load Template" },
  });

  editor.Commands.add("save-template", {
    run(editor) {
      const data = editor.getProjectData();
      const supabaseStorageManager = editor.Storage.get("supabase");
      // POST `data` to your server or save in localStorage
      // TODO Complete
      console.log("supa: ", supabaseStorageManager);
      console.log("Saving...", data);
    },
  });

  editor.Commands.add("load-template", {
    run(editor) {
      console.log("Firing load-template command");
      const supabaseStorageManager = editor.Storage.get("supabase");
      return supabaseStorageManager.load();
    },
  });
}
