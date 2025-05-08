import { useEffect, useState } from "react";
import { Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

/**
 * The purpose of this panel is to allow users to select a list which the form data will be submitted to. Each page (or "step") currently can only be dumped into 1 list.
 *
 */
export default function ListSelectionPanel({ editor }) {
  // It should be able to tap into rejoiners list API to populate the availableLists.
  const availableLists = ["List A", "List B"];
  const [hasInput, setHasInput] = useState();
  const [selectedList, setSelectedList] = useState(availableLists[0]);

  useEffect(() => {
    if (!editor) return;
    const lookForInputComponent = () => {
      const wrapper = editor.getWrapper();
      if (!wrapper) return;

      const hasInputComponent = (components) => {
        return components.some((comp) => {
          const tag = comp.get("tagName")?.toLowerCase();
          return (
            // Is this component an input?
            ["input", "textarea", "select"].includes(tag) ||
            // or is a child of this component an input?
            (comp.components().length > 0 &&
              hasInputComponent(comp.components()))
          );
        });
      };

      setHasInput(hasInputComponent(wrapper.components()));
    };

    // Update on initial load of the panel
    lookForInputComponent();

    // Set initial list if the page has it.
    const initialList = editor.Pages.getSelected().get("targetList");
    if (initialList) {
      setSelectedList(initialList);
    }

    // Bind once on load
    editor.on("load", lookForInputComponent);

    // Update on component changes
    editor.on("component:add", lookForInputComponent);
    editor.on("component:remove", lookForInputComponent);
    editor.on("component:update", lookForInputComponent);

    // Update when changing between pages
    editor.on("page:select", lookForInputComponent);

    // Cleanup
    return () => {
      editor.off("load", lookForInputComponent);
      editor.off("component:add", lookForInputComponent);
      editor.off("component:remove", lookForInputComponent);
      editor.off("component:update", lookForInputComponent);
      editor.off("page:select", lookForInputComponent);
    };
  }, [editor]);

  function handleSelectList(event) {
    editor.Commands.run("lists:add-list-to-page", {
      targetPageId: editor.Pages.getSelected().getId(),
      targetList: event.target.value,
    });
    setSelectedList(event.target.value);
  }

  return (
    <Box sx={{ p: 2 }}>
      {hasInput ? (
        <FormControl fullWidth>
          <InputLabel id="list-selection-label">Select List</InputLabel>
          <Select
            labelId="list-selection-label"
            value={selectedList}
            label="Select List"
            onChange={handleSelectList}
          >
            {availableLists.map((list) => (
              <MenuItem key={list} value={list}>
                {list}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ) : (
        "No input components found on this page"
      )}
    </Box>
  );
}
