import Counter from "./Counter";
import Logo from "./Logo";

export default function Header({ todos }) {
  return (
    <header className="col-[1/3] row-[1/2] bg-[#fbf5ed] border-b border-black/[0.08] flex items-center justify-between px-[28px]">
      <Logo />
      <Counter todos ={todos} />
    </header>
  );
}
