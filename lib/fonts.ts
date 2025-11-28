import localFont from "next/font/local";

const spaceGrotesk = localFont({
  src: "../public/fonts/SpaceGrotesk-VariableFont_wght.ttf", // single file is enough
  variable: "--main-font",
  display: "swap",
});

export default spaceGrotesk;
