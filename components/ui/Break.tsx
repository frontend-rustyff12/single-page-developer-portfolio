export default function Break({ hideLarge }: { hideLarge: boolean }) {
  return <hr className={`break ${hideLarge ? "hide" : ""}`} />;
}
