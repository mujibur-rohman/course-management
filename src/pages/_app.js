import "@/styles/globals.css";
// import { useTheme } from "react-daisyui";

export default function App({ Component, pageProps }) {
  // const { theme, setTheme } = useTheme("night");
  // console.log(theme);
  return (
    <main data-theme={"night"} className="min-h-screen">
      <Component {...pageProps} />
    </main>
  );
}
