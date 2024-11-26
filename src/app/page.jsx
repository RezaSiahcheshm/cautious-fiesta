import { TiThMenu } from "react-icons/ti";

export default function Home() {
  const formatPersianDate = () => {
    return new Date().toLocaleDateString("fa-IR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      // hour: "2-digit",
      // minute: "2-digit",
      // second: "2-digit",
    });
  };
  console.log("formatPersianDate", formatPersianDate());

  return (
    <div
      className="flex justify-between items-center h-10 bg-gray-400"
      dir="rtl"
    >
      <sidebar>
        <div className="flex flex-row items-center space-x-10 space-x-reverse px-10">
          <span>Logo</span>
          <TiThMenu />
        </div>
        {/* <div className="flex flex-col space-y-2">
          <a href="#">Home</a>
          href="#">About</a>
          <a href="#">Contact</a>
        </div> */}
      </sidebar>
      <nav className="flex flex-row items-center justify-between w-full">
        <div className="">شرکت رهند</div>
        <div className="">
          {formatPersianDate()}
          {}
        </div>
        <div className="">رضا سیاه چشم</div>
      </nav>
    </div>
  );
}
