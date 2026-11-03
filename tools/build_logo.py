#!/usr/bin/env python3
"""Generate the Megnetora AI Solutions logo set as self-contained SVGs.

Text is converted to outlines (paths) so the files render identically
everywhere, with no font dependency. Requires: fonttools, Inter Display font.
"""
from pathlib import Path
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "logo" / "svg"
FONT_DIR = Path("/usr/share/fonts/opentype/inter")

# Brand palette
MIDNIGHT = "#0B1033"   # Midnight Navy  - trust, depth
VIOLET = "#6C3BFF"     # Magnetic Violet - intelligence, innovation
CYAN = "#1FD2FF"       # Electric Cyan  - energy, data, AI
CORAL = "#FF4D8D"      # Aura Pink      - attraction, marketing pull
WHITE = "#FFFFFF"
SLATE = "#5B6283"


def text_path(text, font_file, size, tracking=0.0):
    """Return (svg path d, width) for text at baseline y=0, x=0."""
    font = TTFont(FONT_DIR / font_file)
    gs = font.getGlyphSet()
    cmap = font.getBestCmap()
    upm = font["head"].unitsPerEm
    scale = size / upm
    pen = SVGPathPen(gs)
    x = 0.0
    names = [cmap[ord(c)] for c in text]
    for i, name in enumerate(names):
        tp = TransformPen(pen, (scale, 0, 0, -scale, x, 0))
        gs[name].draw(tp)
        x += gs[name].width * scale
        if i < len(names) - 1:
            x += tracking * size
    return pen.getCommands(), x


def mark(tip_left=CORAL, tip_mid=CYAN, tip_right=CORAL, body="url(#mg-body)",
         field=CYAN, node=CYAN, mono=None, simple=False):
    """The symbol, drawn in a 240x240 box.

    A lowercase 'm' built from two horseshoe magnets (attraction / pull),
    with pole caps on each leg and an arc of connected nodes above it:
    the magnetic field rendered as a neural network (AI).
    simple=True drops the outer ring and links for favicon-size use.
    """
    if mono:
        tip_left = tip_mid = tip_right = body = field = node = mono
    sw = 34
    legs = [58, 120, 182]
    top = 124           # where legs meet arches
    body_end = 170      # body stops, small gap, then pole cap
    cap_start, cap_end = 176, 206
    r = 31
    m_path = (f"M{legs[0]} {body_end} V{top} A{r} {r} 0 0 1 {legs[1]} {top} "
              f"V{body_end} M{legs[1]} {top} A{r} {r} 0 0 1 {legs[2]} {top} V{body_end}")
    caps = "".join(
        f'<rect x="{x - sw/2}" y="{cap_start}" width="{sw}" height="{cap_end - cap_start}" '
        f'rx="5" fill="{c}"/>'
        for x, c in zip(legs, [tip_left, tip_mid, tip_right]))
    # Field / neural arc above the m
    import math
    cx, cy = 120, 124
    arcs = []
    nodes = []
    rings = [(90, 0.95, [208, 244, 296, 332]), (108, 0.55, [222, 270, 318])]
    if simple:
        rings = [(92, 1, [270])]
    for R, op, angs in rings:
        a0, a1 = math.radians(200), math.radians(340)
        x0, y0 = cx + R * math.cos(a0), cy + R * math.sin(a0)
        x1, y1 = cx + R * math.cos(a1), cy + R * math.sin(a1)
        arcs.append(f'<path d="M{x0:.2f} {y0:.2f} A{R} {R} 0 0 1 {x1:.2f} {y1:.2f}" '
                    f'fill="none" stroke="{field}" stroke-width="5" stroke-linecap="round" '
                    f'opacity="{op}"/>')
        for a in angs:
            ar = math.radians(a)
            nodes.append((cx + R * math.cos(ar), cy + R * math.sin(ar), R, op))
    # connect inner and outer nodes like a network
    inner = [n for n in nodes if n[2] == 90]
    outer = [n for n in nodes if n[2] == 108]
    links = []
    for o in outer:
        for i in inner:
            d = math.hypot(o[0] - i[0], o[1] - i[1])
            if d < 52:
                links.append(f'<line x1="{i[0]:.2f}" y1="{i[1]:.2f}" x2="{o[0]:.2f}" '
                             f'y2="{o[1]:.2f}" stroke="{field}" stroke-width="3" opacity="0.5"/>')
    dots = "".join(
        f'<circle cx="{x:.2f}" cy="{y:.2f}" r="{6.5 if R == 108 else (11 if simple else 8)}" '
        f'fill="{node}" opacity="{0.8 if R == 108 else 1}"/>' for x, y, R, op in nodes)
    sw_field = 9 if simple else 5
    arcs = [a.replace('stroke-width="5"', f'stroke-width="{sw_field}"') for a in arcs]
    return ('<g transform="translate(0 6)">' +
        "".join(arcs) + "".join(links) + dots +
        f'<path d="{m_path}" fill="none" stroke="{body}" stroke-width="{sw}" '
        f'stroke-linejoin="round"/>' + caps + '</g>')


def defs(dark=False):
    a, b = (VIOLET, "#3D5BFF") if not dark else ("#8B66FF", "#4F7BFF")
    return (f'<defs><linearGradient id="mg-body" x1="0" y1="0" x2="1" y2="1">'
            f'<stop offset="0" stop-color="{a}"/><stop offset="1" stop-color="{b}"/>'
            f'</linearGradient></defs>')


def svg(w, h, body, title):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" '
            f'width="{w}" height="{h}" role="img" aria-label="{title}">'
            f'<title>{title}</title>{body}</svg>\n')


def wordmark(x, y, size, color_name, color_sub, align="left", total_w=None):
    name_d, name_w = text_path("MEGNETORA", "InterDisplay-Bold.otf", size, tracking=0.04)
    sub_size = size * 0.36
    sub_d, sub_w = text_path("AI SOLUTIONS", "InterDisplay-SemiBold.otf", sub_size, tracking=0.42)
    if align == "center":
        nx, sx = x - name_w / 2, x - sub_w / 2
    else:
        nx, sx = x, x
        # stretch sub-line to the name width for a locked-up block
    sub_y = y + size * 0.62
    return (f'<path transform="translate({nx:.2f} {y:.2f})" d="{name_d}" fill="{color_name}"/>'
            f'<path transform="translate({sx:.2f} {sub_y:.2f})" d="{sub_d}" fill="{color_sub}"/>',
            max(name_w, sub_w))


def build():
    OUT.mkdir(parents=True, exist_ok=True)
    T = "Megnetora AI Solutions"
    files = {}

    # Icon (transparent)
    files["megnetora-icon.svg"] = svg(240, 240, defs() + mark(), T)
    files["megnetora-icon-dark.svg"] = svg(240, 240, defs(True) + mark(), T)

    # App icon / avatar (rounded square)
    app = (defs(True) + f'<rect width="240" height="240" rx="54" fill="{MIDNIGHT}"/>'
           f'<g transform="translate(24 22) scale(0.8)">{mark()}</g>')
    files["megnetora-app-icon.svg"] = svg(240, 240, app, T)

    # Favicon (simplified mark, legible at 16-48 px)
    fav = (defs(True) + f'<rect width="240" height="240" rx="54" fill="{MIDNIGHT}"/>'
           f'<g transform="translate(18 14) scale(0.85)">{mark(simple=True)}</g>')
    files["megnetora-favicon.svg"] = svg(240, 240, fav, T)

    # Horizontal lockups
    for variant, bg, name_c, sub_c, dk in [("light", None, MIDNIGHT, VIOLET, False),
                                           ("dark", MIDNIGHT, WHITE, CYAN, True)]:
        wm, wm_w = wordmark(250, 138, 86, name_c, sub_c)
        W = int(250 + wm_w + 40)
        H = 240
        bgr = f'<rect width="{W}" height="{H}" fill="{bg}"/>' if bg else ""
        body = defs(dk) + bgr + f'<g>{mark()}</g>' + wm
        files[f"megnetora-logo-horizontal-{variant}.svg"] = svg(W, H, body, T)

    # Stacked lockups
    for variant, bg, name_c, sub_c, dk in [("light", None, MIDNIGHT, VIOLET, False),
                                           ("dark", MIDNIGHT, WHITE, CYAN, True)]:
        W, H = 560, 400
        wm, _ = wordmark(W / 2, 318, 72, name_c, sub_c, align="center")
        bgr = f'<rect width="{W}" height="{H}" fill="{bg}"/>' if bg else ""
        body = (defs(dk) + bgr + f'<g transform="translate({W/2 - 120} 12)">{mark()}</g>' + wm)
        files[f"megnetora-logo-stacked-{variant}.svg"] = svg(W, H, body, T)

    # One-colour versions (print, embroidery, stamps)
    for variant, c in [("black", MIDNIGHT), ("white", WHITE)]:
        wm, wm_w = wordmark(250, 138, 86, c, c)
        W = int(250 + wm_w + 40)
        files[f"megnetora-logo-mono-{variant}.svg"] = svg(W, 240, mark(mono=c) + wm, T)

    for name, content in files.items():
        (OUT / name).write_text(content)
        print("wrote", OUT / name)


if __name__ == "__main__":
    build()
