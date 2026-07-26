# Resume

This directory contains the Chinese resume page and its downloadable PDF.

- `resume-data.js` is the content source used by both pages.
- `index.html` is the public web version. It intentionally does not render the
  phone number.
- `print.html` is the print layout used to generate the PDF.
- `miao-dongxu-resume-zh-2026-07.pdf` is the downloadable static PDF. Older
  PDFs remain available so existing links do not break.

## Regenerate PDF

From the repository root:

```sh
python3 -m http.server 8000
```

Then in another shell:

```sh
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless \
  --disable-gpu \
  --no-pdf-header-footer \
  --print-to-pdf="$PWD/resume/miao-dongxu-resume-zh-2026-07.pdf" \
  http://127.0.0.1:8000/resume/print.html
```

After regenerating, open `resume/index.html` and check that the download button
points to the same PDF filename.
