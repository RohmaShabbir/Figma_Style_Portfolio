import Link from "next/link";

type HeaderProps = {
  font: {
    className: string;
  };
};

export default function Header(data: HeaderProps) {
  return (
    <>
      <div className={`${data.font.className} links-parent`}>
        <ul className="links">
          <li className="link"><Link href="">Works</Link></li>
          <li className="link"><Link href="">Blog</Link></li>
          <li className="link"><Link href="">Contact</Link></li>
        </ul>
      </div>
    </>
  );
}
