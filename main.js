import { save, open } from "./disk";

const element = document.getElementById("text");
new EasyMDE({
  element,
  toolbar: [
    "heading",
    "bold",
    "italic",
    "|",
    {
      name: "save",
      className: "fa fa-floppy-o",
      title: "Save",
      action: save,
    },
    {
      name: "open",
      className: "fa fa-folder-open-o",
      title: "Open",
      action: open,
    },
  ],
});
