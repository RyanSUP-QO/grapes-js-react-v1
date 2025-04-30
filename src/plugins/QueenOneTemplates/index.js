import panels from "./panels";
import commands from "./commands";
import storage from "./storage";

export default function QueenOneTemplates(editor, opts) {
  storage(editor, opts);
  commands(editor);
  panels(editor);
}
