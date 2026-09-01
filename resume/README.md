# Resume

This directory contains the Chinese and English resume pages and their
downloadable PDFs.

- `resume-data.js` is the content source used by both Chinese pages.
- `index.html` is the public web version. It intentionally does not render the
  phone number.
- `print.html` is the print layout used to generate the Chinese PDF.
- `resume-en-data.js`, `en.html`, and `print-en.html` are the corresponding
  English sources.
- `miao-dongxu-resume-zh.pdf` is the stable public download URL. The web page
  keeps this URL but suggests a downloaded filename with the access date, such
  as `miao-dongxu-resume-zh-260901.pdf`.
- `miao-dongxu-resume-zh-2026-09.pdf` is the current versioned archive. Older
  versioned PDFs remain available so existing links do not break.
- `miao-dongxu-resume-en.pdf` is the stable English download URL, and
  `miao-dongxu-resume-en-2026-09.pdf` is its current versioned archive.

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
  --print-to-pdf="$PWD/resume/miao-dongxu-resume-zh-2026-09.pdf" \
  http://127.0.0.1:8000/resume/print.html

cp resume/miao-dongxu-resume-zh-2026-09.pdf \
  resume/miao-dongxu-resume-zh.pdf

google-chrome \
  --headless \
  --disable-gpu \
  --no-pdf-header-footer \
  --print-to-pdf="$PWD/resume/miao-dongxu-resume-en-2026-09.pdf" \
  http://127.0.0.1:8000/resume/print-en.html

cp resume/miao-dongxu-resume-en-2026-09.pdf \
  resume/miao-dongxu-resume-en.pdf
```

On macOS, replace `google-chrome` with
`/Applications/Google Chrome.app/Contents/MacOS/Google Chrome`.

After regenerating:

1. Render the PDF to images and verify that it is exactly two A4 pages with no
   clipping, overlap, isolated headings, or unexpected blank areas.
2. Check that each data file points `pdfFile` to its stable PDF and
   `pdfArchiveFile` to its versioned archive.
3. Open `resume/index.html` and `resume/en.html`; verify language switching,
   Work Timeline, and both PDF download links.
