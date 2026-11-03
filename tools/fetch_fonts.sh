#!/usr/bin/env bash
# Download the open-source (OFL) Google Fonts used by tools/build_options.py
set -e
cd "$(dirname "$0")" && mkdir -p fonts && cd fonts
B=https://raw.githubusercontent.com/google/fonts/main/ofl
for u in poppins/Poppins-SemiBold.ttf "montserrat/Montserrat%5Bwght%5D.ttf" "spacegrotesk/SpaceGrotesk%5Bwght%5D.ttf" \
  "sora/Sora%5Bwght%5D.ttf" "outfit/Outfit%5Bwght%5D.ttf" "orbitron/Orbitron%5Bwght%5D.ttf" \
  "playfairdisplay/PlayfairDisplay%5Bwght%5D.ttf" "lexend/Lexend%5Bwght%5D.ttf" \
  "manrope/Manrope%5Bwght%5D.ttf" "unbounded/Unbounded%5Bwght%5D.ttf"; do
  f=$(basename "$u" | sed 's/%5B/[/;s/%5D/]/'); curl -sfL "$B/$u" -o "$f" && echo "got $f"
done
