#!/usr/bin/env python3
"""Generate 10 distinct logo concepts for Megnetora AI Solutions.

Output: logo/options/option-XX-<slug>.svg (full logo) and -icon.svg,
plus logo/options/index.html (side-by-side comparison sheet).
Text is outlined to paths. Fonts: Google Fonts (OFL) in tools/fonts/
(run tools/fetch_fonts.sh first) and Inter from the system.
"""
import math
from pathlib import Path
from functools import lru_cache
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.boundsPen import BoundsPen

ROOT = Path(__file__).resolve().parent.parent
FONTS = ROOT / "tools" / "fonts"
SYS = Path("/usr/share/fonts/opentype/inter")
OUT = ROOT / "logo" / "options"


@lru_cache(None)
def load(name, wght=None):
    path = FONTS / name if (FONTS / name).exists() else SYS / name
    f = TTFont(path)
    if wght is not None and "fvar" in f:
        from fontTools.varLib.instancer import instantiateVariableFont
        f = instantiateVariableFont(f, {"wght": wght})
    return f


def cap_ratio(font):
    os2 = font["OS/2"]
    cap = getattr(os2, "sCapHeight", 0) or int(font["head"].unitsPerEm * 0.7)
    return cap / font["head"].unitsPerEm


def text(s, font_name, cap_px, tracking=0.0, wght=None):
    """Outline text so its cap height is cap_px. Returns (d, width, size)."""
    font = load(font_name, wght)
    size = cap_px / cap_ratio(font)
    gs, cmap = font.getGlyphSet(), font.getBestCmap()
    scale = size / font["head"].unitsPerEm
    pen, x = SVGPathPen(gs), 0.0
    for i, ch in enumerate(s):
        g = gs[cmap[ord(ch)]]
        g.draw(TransformPen(pen, (scale, 0, 0, -scale, x, 0)))
        x += g.width * scale + (tracking * size if i < len(s) - 1 else 0)
    return pen.getCommands(), x, size


def glyph_bounds(ch, font_name, size, wght=None):
    font = load(font_name, wght)
    gs, cmap = font.getGlyphSet(), font.getBestCmap()
    bp = BoundsPen(gs)
    g = gs[cmap[ord(ch)]]
    s = size / font["head"].unitsPerEm
    g.draw(TransformPen(bp, (s, 0, 0, -s, 0, 0)))
    return bp.bounds, g.width * s


def grad(id_, a, b, x2=1, y2=1):
    return (f'<linearGradient id="{id_}" x1="0" y1="0" x2="{x2}" y2="{y2}">'
            f'<stop offset="0" stop-color="{a}"/><stop offset="1" stop-color="{b}"/></linearGradient>')


def sparkle(cx, cy, R, fill):
    return (f'<path d="M{cx} {cy-R} Q{cx} {cy} {cx+R} {cy} Q{cx} {cy} {cx} {cy+R} '
            f'Q{cx} {cy} {cx-R} {cy} Q{cx} {cy} {cx} {cy-R}Z" fill="{fill}"/>')


# ---------------------------------------------------------------- concepts
# Each returns dict(icon=<svg body in 240x240>, defs=..., font..., colours)

def c01():
    d = grad("g1", "#2563EB", "#7C3AED")
    m = ('<path d="M50 162 V60 L120 140 L190 60 V162" fill="none" stroke="url(#g1)" '
         'stroke-width="30" stroke-linejoin="round"/>'
         '<rect x="35" y="168" width="30" height="32" rx="4" fill="#EF4444"/>'
         '<rect x="175" y="168" width="30" height="32" rx="4" fill="#2563EB"/>')
    arcs = ""
    for r, op in [(50, 1), (74, .6)]:
        a0, a1 = math.radians(255), math.radians(285)
        arcs += (f'<path d="M{120+r*math.cos(a0):.1f} {140+r*math.sin(a0):.1f} A{r} {r} 0 0 1 '
                 f'{120+r*math.cos(a1):.1f} {140+r*math.sin(a1):.1f}" fill="none" stroke="#06B6D4" '
                 f'stroke-width="9" stroke-linecap="round" opacity="{op}"/>')
    arcs += '<circle cx="120" cy="40" r="10" fill="#06B6D4"/>'
    return dict(slug="magnetic-pulse", name="Magnetic Pulse",
                idea="Bold M whose legs are magnet poles (red/blue), sending an AI signal upward.",
                defs=d, icon=m + arcs, font=("Sora[wght].ttf", 700), track=0.02,
                name_c="#0B1033", sub_c="#2563EB", bg="#FFFFFF", tile="#0B1033")


def c02():
    d = grad("g2", "#FF3B5C", "#FF7A3D")
    u = ('<g transform="translate(100 138) rotate(45)">'
         '<path d="M-40 -32 V10 A40 40 0 0 0 40 10 V-32" fill="none" stroke="url(#g2)" stroke-width="30"/>'
         '<rect x="-55" y="-64" width="30" height="28" rx="3" fill="#CBD5E1"/>'
         '<rect x="25" y="-64" width="30" height="28" rx="3" fill="#CBD5E1"/></g>')
    s = sparkle(184, 58, 28, "#FFB020") + sparkle(214, 104, 11, "#FFB020") + \
        '<circle cx="158" cy="30" r="5" fill="#FFB020"/>'
    return dict(slug="horseshoe-spark", name="Horseshoe Spark",
                idea="Classic horseshoe magnet pulling in an AI spark: we attract opportunities.",
                defs=d, icon=u + s, font=("Poppins-SemiBold.ttf", None), track=0.0, text="Megnetora",
                name_c="#1E1B2E", sub_c="#FF3B5C", bg="#FFFFFF", tile="#1E1B2E")


def c03():
    d = grad("g3", "#14B8A6", "#22C55E")
    ring = '<circle cx="120" cy="120" r="98" fill="none" stroke="url(#g3)" stroke-width="10"/>'
    a = math.radians(-40)
    orb = f'<circle cx="{120+98*math.cos(a):.1f}" cy="{120+98*math.sin(a):.1f}" r="15" fill="#0F172A"/>'
    orb += f'<circle cx="{120+98*math.cos(a):.1f}" cy="{120+98*math.sin(a):.1f}" r="8" fill="#22C55E"/>'
    pts = [(72, 165), (72, 82), (120, 132), (168, 82), (168, 165)]
    lines = "".join(f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" stroke="#0F172A" stroke-width="9" stroke-linecap="round"/>'
                    for (x1, y1), (x2, y2) in zip(pts, pts[1:]))
    nodes = "".join(f'<circle cx="{x}" cy="{y}" r="13" fill="#14B8A6" stroke="#0F172A" stroke-width="5"/>' for x, y in pts)
    return dict(slug="neural-orbit", name="Neural Orbit",
                idea="An M drawn as a neural network inside a magnetic aura ring with an orbiting data point.",
                defs=d, icon=ring + orb + lines + nodes, font=("Outfit[wght].ttf", 500), track=0.01,
                text="megnetora", sub="ai solutions", sub_track=0.35,
                name_c="#0F172A", sub_c="#14B8A6", bg="#FFFFFF", tile="#ECFDF5")


def c04():
    hexp = " ".join(f"{120+100*math.cos(math.radians(a-90)):.1f},{120+100*math.sin(math.radians(a-90)):.1f}"
                    for a in range(0, 360, 60))
    h = f'<polygon points="{hexp}" fill="none" stroke="#00E5FF" stroke-width="9" stroke-linejoin="round"/>'
    m = ('<path d="M74 160 V84 L120 128 L166 84 V160 M120 128 V170" fill="none" stroke="#FFFFFF" '
         'stroke-width="10" stroke-linejoin="round" stroke-linecap="round"/>')
    t = "".join(f'<circle cx="{x}" cy="{y}" r="10" fill="#050816" stroke="#00E5FF" stroke-width="6"/>'
                for x, y in [(74, 168), (166, 168), (120, 178), (74, 76), (166, 76)])
    return dict(slug="hex-circuit", name="Hex Circuit",
                idea="Futuristic hexagon chip with an M traced as a circuit: deep-tech AI company.",
                defs="", icon=h + m + t, font=("Orbitron[wght].ttf", 800), track=0.06,
                name_c="#FFFFFF", sub_c="#00E5FF", bg="#050816", tile="#050816")


def c05():
    segs = [((60, 182), (60, 72), "#FF4D8D"), ((60, 72), (120, 146), "#C13BFF"),
            ((120, 146), (180, 72), "#7B5CFF"), ((180, 72), (180, 182), "#3D8BFF")]
    body = "".join(f'<line x1="{a[0]}" y1="{a[1]}" x2="{b[0]}" y2="{b[1]}" stroke="{c}" stroke-width="38" '
                   f'stroke-linecap="round" opacity="0.92"/>' for a, b, c in segs)
    dot = '<circle cx="120" cy="56" r="15" fill="url(#g5)"/>'
    return dict(slug="ribbon-m", name="Gradient Ribbon",
                idea="A folded colourful ribbon M with an attracted dot: creative, marketing-first brand.",
                defs=grad("g5", "#FF4D8D", "#3D8BFF"), icon=body + dot,
                font=("Montserrat[wght].ttf", 800), track=0.03,
                name_c="#1A1036", sub_c="#C13BFF", bg="#FFFFFF", tile="#1A1036")


def c06():
    k = "#111111"
    ic = (f'<circle cx="120" cy="120" r="96" fill="none" stroke="{k}" stroke-width="7"/>'
          f'<path d="M88 84 V132 A32 32 0 0 0 152 132 V84" fill="none" stroke="{k}" stroke-width="10"/>'
          f'<line x1="78" y1="102" x2="98" y2="102" stroke="{k}" stroke-width="6"/>'
          f'<line x1="142" y1="102" x2="162" y2="102" stroke="{k}" stroke-width="6"/>'
          '<circle cx="120" cy="70" r="10" fill="#6C3BFF"/>')
    return dict(slug="minimal-monoline", name="Minimal Monoline",
                idea="Thin-line magnet in a circle with one violet dot: calm, premium consultancy feel.",
                defs="", icon=ic, font=("Manrope[wght].ttf", 500), track=0.02, text="megnetora",
                sub_c="#6B7280", name_c="#111111", bg="#FFFFFF", tile="#F4F4F5", sub_wght=600)


def c07():
    ux, uy = 90 / 134.5, -100 / 134.5
    nx, ny = -uy, ux
    tip = (205, 45)
    base = (tip[0] - 36 * ux, tip[1] - 36 * uy)
    p1 = (base[0] + 28 * nx, base[1] + 28 * ny)
    p2 = (base[0] - 28 * nx, base[1] - 28 * ny)
    ic = ('<rect x="152" y="128" width="30" height="72" rx="4" fill="#A7F3D0"/>'
          '<rect x="100" y="170" width="30" height="30" rx="4" fill="#A7F3D0"/>'
          f'<path d="M50 200 V76 L115 146 L{base[0]:.1f} {base[1]:.1f}" fill="none" stroke="#0B2545" '
          'stroke-width="30" stroke-linejoin="round"/>'
          f'<polygon points="{tip[0]},{tip[1]} {p1[0]:.1f},{p1[1]:.1f} {p2[0]:.1f},{p2[1]:.1f}" fill="#10B981"/>')
    return dict(slug="growth-arrow", name="Growth Arrow",
                idea="An M that turns into a rising arrow over bar charts: business growth & strategy.",
                defs="", icon=ic, font=("Lexend[wght].ttf", 600), track=0.02,
                name_c="#0B2545", sub_c="#10B981", bg="#FFFFFF", tile="#ECFDF5")


def c08():
    grid = ["X.....X", "XX...XX", "X.X.X.X", "X..X..X", "X.....X", "X.....X", "X.....X"]
    def mix(t):
        a, b = (124, 58, 237), (6, 182, 212)
        return "#%02X%02X%02X" % tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(3))
    cells = ""
    for r, row in enumerate(grid):
        for c, ch in enumerate(row):
            x, y = 18 + c * 30, 22 + r * 30
            if ch == "X":
                cells += f'<rect x="{x}" y="{y}" width="24" height="24" rx="6" fill="{mix((r + c) / 12)}"/>'
    # data being pulled in
    cells += '<rect x="111" y="-6" width="18" height="18" rx="5" fill="#7C3AED" opacity="0.35" transform="translate(0 6)"/>'
    cells += '<rect x="114" y="34" width="12" height="12" rx="3" fill="#7C3AED" opacity="0.6"/>'
    return dict(slug="data-pixel", name="Data Pixel",
                idea="An M built from data pixels, with new data points being pulled in: data-driven AI.",
                defs="", icon=cells, font=("SpaceGrotesk[wght].ttf", 700), track=0.0,
                name_c="#111827", sub_c="#7C3AED", bg="#FFFFFF", tile="#111827")


def c09():
    gold = "#C9A54C"
    d, w, size = text("M", "PlayfairDisplay[wght].ttf", 92, wght=700)
    (x0, y0, x1, y1), adv = glyph_bounds("M", "PlayfairDisplay[wght].ttf", size, 700)
    tx = 120 - (x0 + x1) / 2
    ty = 120 - (y0 + y1) / 2 + 8
    dots = "".join(f'<circle cx="{120+76*math.cos(math.radians(a)):.1f}" cy="{132+76*math.sin(math.radians(a)):.1f}" '
                   f'r="{5 if a != 270 else 7}" fill="{gold}"/>' for a in (238, 254, 270, 286, 302))
    ic = (f'<circle cx="120" cy="120" r="112" fill="#0E1A3A"/>'
          f'<circle cx="120" cy="120" r="98" fill="none" stroke="{gold}" stroke-width="3"/>'
          f'<path transform="translate({tx:.1f} {ty:.1f})" d="{d}" fill="{gold}"/>' + dots)
    return dict(slug="royal-emblem", name="Royal Emblem",
                idea="Navy & gold serif crest: established, premium, trusted advisory brand.",
                defs="", icon=ic, font=("PlayfairDisplay[wght].ttf", 700), track=0.01, text="Megnetora",
                sub_font=("Inter-SemiBold.otf", None), sub_track=0.4,
                name_c="#0E1A3A", sub_c=gold, bg="#FFFFFF", tile="#F7F3E8")


def c10():
    lime = "#B4F000"
    ic = (f'<circle cx="120" cy="120" r="70" fill="none" stroke="{lime}" stroke-width="30"/>'
          f'<circle cx="{120+70*math.cos(math.radians(-45)):.1f}" cy="{120+70*math.sin(math.radians(-45)):.1f}" r="26" fill="#0A0A0A"/>'
          f'<circle cx="{120+70*math.cos(math.radians(-45)):.1f}" cy="{120+70*math.sin(math.radians(-45)):.1f}" r="15" fill="#FFFFFF"/>'
          f'<circle cx="120" cy="120" r="16" fill="#FFFFFF"/>')
    return dict(slug="bold-orbit", name="Bold Orbit",
                idea="Loud startup wordmark; the O is a magnetic orbit with a satellite node (also the icon).",
                defs="", icon=ic, font=("Unbounded[wght].ttf", 700), track=0.0, special_o=True,
                name_c="#FFFFFF", sub_c=lime, bg="#0A0A0A", tile="#0A0A0A")


CONCEPTS = [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10]


def wordmark(c, x, cap=60):
    txt = c.get("text", "MEGNETORA")
    fn, wg = c["font"]
    name_d, name_w, size = text(txt, fn, cap, c["track"], wg)
    sfn, swg = c.get("sub_font", (fn, c.get("sub_wght", wg)))
    sub_txt = c.get("sub", "AI SOLUTIONS")
    sub_cap = cap * 0.30
    sub_d, sub_w, _ = text(sub_txt, sfn, sub_cap, c.get("sub_track", 0.45), swg)
    base = 120 + cap / 2 - 10
    extra = ""
    if c.get("special_o"):
        # replace the O with the orbit ring
        pre_d, pre_w, _ = text("MEGNET", fn, cap, c["track"], wg)
        (ox0, oy0, ox1, oy1), oadv = glyph_bounds("O", fn, size, wg)
        post_d, post_w, _ = text("RA", fn, cap, c["track"], wg)
        gap = c["track"] * size
        ocx = x + pre_w + gap + oadv / 2
        r = cap / 2 - cap * 0.11
        sw = cap * 0.22
        oy = base - cap / 2
        a = math.radians(-45)
        extra = (f'<path transform="translate({x:.1f} {base:.1f})" d="{pre_d}" fill="{c["name_c"]}"/>'
                 f'<circle cx="{ocx:.1f}" cy="{oy:.1f}" r="{r:.1f}" fill="none" stroke="{c["sub_c"]}" stroke-width="{sw:.1f}"/>'
                 f'<circle cx="{ocx + r*math.cos(a):.1f}" cy="{oy + r*math.sin(a):.1f}" r="{sw*0.85:.1f}" fill="{c["bg"]}"/>'
                 f'<circle cx="{ocx + r*math.cos(a):.1f}" cy="{oy + r*math.sin(a):.1f}" r="{sw*0.5:.1f}" fill="{c["name_c"]}"/>'
                 f'<path transform="translate({x + pre_w + gap + oadv + gap:.1f} {base:.1f})" d="{post_d}" fill="{c["name_c"]}"/>')
        name_svg = extra
        name_w = pre_w + gap + oadv + gap + post_w
    else:
        name_svg = f'<path transform="translate({x:.1f} {base:.1f})" d="{name_d}" fill="{c["name_c"]}"/>'
    sub_svg = (f'<path transform="translate({x + 3:.1f} {base + cap * 0.75:.1f})" d="{sub_d}" '
               f'fill="{c["sub_c"]}"/>')
    return name_svg + sub_svg, max(name_w, sub_w)


def svg(w, h, body, defs="", bg=None):
    b = f'<rect width="{w}" height="{h}" fill="{bg}"/>' if bg else ""
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}" '
            f'role="img" aria-label="Megnetora AI Solutions"><defs>{defs}</defs>{b}{body}</svg>')


def build():
    OUT.mkdir(parents=True, exist_ok=True)
    cards = []
    for i, fn in enumerate(CONCEPTS, 1):
        c = fn()
        wm, wm_w = wordmark(c, 270)
        W = int(270 + wm_w + 50)
        logo = svg(W, 240, f'<g transform="translate(10 0)">{c["icon"]}</g>' + wm, c["defs"],
                   c["bg"] if c["bg"] != "#FFFFFF" else None)
        icon = svg(240, 240, f'<rect width="240" height="240" rx="52" fill="{c["tile"]}"/>'
                   f'<g transform="translate(30 30) scale(0.75)">{c["icon"]}</g>', c["defs"])
        stem = f"option-{i:02d}-{c['slug']}"
        (OUT / f"{stem}.svg").write_text(logo + "\n")
        (OUT / f"{stem}-icon.svg").write_text(icon + "\n")
        cards.append((i, c, logo, icon))
        print("wrote", stem)

    html = ['<!doctype html><html><head><meta charset="utf-8"><title>Megnetora logo options</title>'
            '<style>body{margin:0;background:#E9EBF2;font-family:Inter,system-ui,sans-serif;color:#0B1033}'
            'h1{margin:0;padding:28px 32px 4px;font-size:28px}p.lead{margin:0;padding:0 32px 20px;color:#555}'
            '.grid{display:grid;grid-template-columns:1fr 1fr;gap:20px;padding:0 32px 32px}'
            '.card{background:#fff;border-radius:18px;overflow:hidden;box-shadow:0 1px 3px #0001}'
            '.stage{height:200px;display:flex;align-items:center;justify-content:center;padding:0 24px}'
            '.stage svg{max-width:100%;max-height:150px;height:auto;width:auto}'
            '.meta{display:flex;gap:16px;align-items:center;padding:14px 20px;border-top:1px solid #eee}'
            '.num{font-size:34px;font-weight:800;color:#6C3BFF;min-width:52px}'
            '.meta h2{margin:0;font-size:18px}.meta p{margin:2px 0 0;font-size:13px;color:#555}'
            '.meta svg{width:56px;height:56px;margin-left:auto;flex:none}</style></head><body>'
            '<h1>Megnetora AI Solutions: 10 logo options</h1>'
            '<p class="lead">Pick a number. The chosen option will be developed into a full logo kit.</p><div class="grid">']
    for i, c, logo, icon in cards:
        html.append(f'<div class="card"><div class="stage" style="background:{c["bg"]}">{logo}</div>'
                    f'<div class="meta"><div class="num">{i:02d}</div><div><h2>{c["name"]}</h2>'
                    f'<p>{c["idea"]}</p></div>{icon}</div></div>')
    html.append('</div></body></html>')
    (OUT / "index.html").write_text("".join(html))


if __name__ == "__main__":
    build()
