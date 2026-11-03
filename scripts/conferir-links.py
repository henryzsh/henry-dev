"""Confere no dist/ que todo link interno (href/src) leva a um arquivo e que toda âncora (#id) existe.
Uso: python3 scripts/conferir-links.py [pasta]   (padrão: dist). Sai com erro se algum link estiver quebrado."""
import glob
import os
import re
import sys

raiz = sys.argv[1] if len(sys.argv) > 1 else "dist"
paginas = {f: open(f, encoding="utf8").read() for f in glob.glob(raiz + "/**/*.html", recursive=True)}


def arquivo(caminho):
    for c in (raiz + caminho, raiz + caminho.rstrip("/") + "/index.html"):
        if os.path.isfile(c):
            return c


quebrados = []
for f, html in paginas.items():
    for m in re.finditer(r'(?:href|src)="([^"]+)"', html):
        url = m.group(1)
        if url.startswith(("http", "mailto:", "tel:", "data:")):
            continue
        caminho, _, ancora = url.partition("#")
        caminho = caminho.split("?")[0]
        destino = f if not caminho else arquivo(caminho)
        if not destino or (ancora and f'id="{ancora}"' not in paginas.get(destino, "")):
            quebrados.append(f"{f}: {url}")

if quebrados:
    sys.exit("Links quebrados:\n" + "\n".join(sorted(set(quebrados))))
print(f"{len(paginas)} páginas, links internos ok")
