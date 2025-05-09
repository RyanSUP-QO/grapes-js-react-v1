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

    // Currently hard-coded to look for a specific input. Can be extended if we want to support more.
    const checkForInputOnCurrentPage = () => {
      const currentPage = editor.Pages.getSelected();
      const inputComponent = currentPage
        .getMainComponent()
        .findType("qo-modal-input");
      setHasInput(!!inputComponent);
    };

    // Set initial list in panel if the page has a targetList.
    const initialList = editor.Pages.getSelected().get("targetList");
    if (initialList) {
      setSelectedList(initialList);
    }

    // On initial load of the panel
    checkForInputOnCurrentPage();

    // Update on component changes
    editor.on("component:add", checkForInputOnCurrentPage);
    editor.on("component:remove", checkForInputOnCurrentPage);
    editor.on("component:update", checkForInputOnCurrentPage);

    // Update when changing between pages
    editor.on("page:select", checkForInputOnCurrentPage);

    // Cleanup
    return () => {
      editor.off("component:add", checkForInputOnCurrentPage);
      editor.off("component:remove", checkForInputOnCurrentPage);
      editor.off("component:update", checkForInputOnCurrentPage);
      editor.off("page:select", checkForInputOnCurrentPage);
    };
  }, [editor]);

  function handleSelectList(event) {
    editor.Commands.run("lists:add-list-to-page", {
      pageId: editor.Pages.getSelected().getId(),
      listId: event.target.value,
    });
    console.log({
      pageId: editor.Pages.getSelected().getId(),
      listId: event.target.value,
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
