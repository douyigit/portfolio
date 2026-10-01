import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

/**
 * Loads only the glyphs we need from Google Fonts so Turkish characters
 * (ğ, ı, ş…) render correctly. Falls back to the default font offline.
 */
async function loadFont(text: string, weight: number) {
  try {
    const css = await (
      await fetch(`https://fonts.googleapis.com/css2?family=Geist:wght@${weight}&text=${encodeURIComponent(text)}`, {
        cache: "force-cache",
      })
    ).text();
    const url = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/)?.[1];
    if (!url) return null;
    return await (await fetch(url, { cache: "force-cache" })).arrayBuffer();
  } catch {
    return null;
  }
}

export async function renderOgImage({
  kicker,
  title,
  subtitle,
  colors = ["#5eead4", "#818cf8"],
}: {
  kicker: string;
  title: string;
  subtitle: string;
  colors?: [string, string];
}) {
  const text = `${kicker}${title}${subtitle}doguy.online~/`;
  const [regular, bold] = await Promise.all([loadFont(text, 400), loadFont(text, 700)]);
  const fonts = [
    ...(regular ? [{ name: "Geist", data: regular, weight: 400 as const }] : []),
    ...(bold ? [{ name: "Geist", data: bold, weight: 700 as const }] : []),
  ];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#07080d",
          color: "#e8eaf2",
          fontFamily: "Geist",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -120,
            width: 560,
            height: 560,
            borderRadius: 9999,
            background: colors[0],
            opacity: 0.28,
            filter: "blur(100px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -200,
            left: -100,
            width: 520,
            height: 520,
            borderRadius: 9999,
            background: colors[1],
            opacity: 0.25,
            filter: "blur(100px)",
          }}
        />
        <div style={{ display: "flex", fontSize: 28, color: "#9aa1b5" }}>
          <span style={{ color: colors[0] }}>~/</span>doguy.online
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 30, color: colors[0] }}>{kicker}</div>
          <div
            style={{
              fontSize: title.length > 22 ? 72 : 96,
              fontWeight: 700,
              letterSpacing: -2,
              lineHeight: 1.05,
              marginTop: 12,
              backgroundImage: `linear-gradient(100deg, ${colors[0]}, ${colors[1]})`,
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {title}
          </div>
          <div style={{ fontSize: 32, color: "#9aa1b5", marginTop: 20, maxWidth: 980, lineHeight: 1.35 }}>{subtitle}</div>
        </div>
      </div>
    ),
    { ...ogSize, fonts: fonts.length ? fonts : undefined },
  );
}
