export async function save(editor) {
  const handle = await showSaveFilePicker({
    types: [
      {
        description: "Markdown files",
        accept: { "text/plain": [".txt", ".md"] },
      },
    ],
  });
  const stream = await handle.createWritable();
  const content = editor.value();
  stream.write(content);
  stream.close();
}

export async function open(editor) {
  const [handle] = await showOpenFilePicker();
  const file = await handle.getFile();
  const content = await file.text();
  editor.value(content);
}
