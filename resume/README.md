# Resume

This directory contains the Chinese resume page and its downloadable PDF.

- `resume-data.js` is the content source used by both pages.
- `index.html` is the public web version. It intentionally does not render the
  phone number.
- `print.html` is the print layout used to generate the PDF.
- `miao-dongxu-resume-zh.pdf` is the stable public download URL.
- `miao-dongxu-resume-zh-2026-08.pdf` is the current versioned archive. Older
  versioned PDFs remain available so existing links do not break.

## Regenerate PDF

From the repository root:

```sh
python3 -m http.server 8000
```

Then in another shell:

```sh
google-chrome \
  --headless \
  --disable-gpu \
  --no-pdf-header-footer \
  --print-to-pdf="$PWD/resume/miao-dongxu-resume-zh-2026-08.pdf" \
  http://127.0.0.1:8000/resume/print.html

cp resume/miao-dongxu-resume-zh-2026-08.pdf \
  resume/miao-dongxu-resume-zh.pdf
```

On macOS, replace `google-chrome` with
`/Applications/Google Chrome.app/Contents/MacOS/Google Chrome`.

After regenerating:

1. Render the PDF to images and verify that it is exactly two A4 pages with no
   clipping, overlap, isolated headings, or unexpected blank areas.
2. Check that `resume-data.js` points `pdfFile` to the stable PDF and
   `pdfArchiveFile` to the versioned archive.
3. Open `resume/index.html` and verify the Resume, Work Timeline, and download
   links.
