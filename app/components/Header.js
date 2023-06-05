import Image from "next/image";

export default function Header({ onClickFunc, obiRe, odasRe }) {
  return (
    <header>
      <menu>
        <article id="obi-reason">
          <nav id="nav-obir">
            <h2>
              Reason #<span>{obiRe[0] + 1}</span> for Obi
            </h2>
            <h3>{obiRe[1]}</h3>
          </nav>
          <Image
            src="/images/pattern-divider-mobile.svg"
            alt=""
            width={295}
            height={16}
            id="pdm-obi"
          />
        </article>
        <article id="others-reason">
          <Image
            src="/images/pattern-divider-mobile.svg"
            alt=""
            width={295}
            height={16}
            id="pdm-others"
          />
          <nav id="nav-othersr">
            <h2>
              Reason #<span>{odasRe[0] + 1}</span> against others
            </h2>
            <h3>{odasRe[1]}</h3>
          </nav>
        </article>
      </menu>
      <aside>
        <div>
          <Image
            src="/images/icon-dice.svg"
            alt=""
            width={20}
            height={20}
            id="icon-dice"
            onClick={onClickFunc}
          />
        </div>
      </aside>
    </header>
  );
}
