import { Link } from 'react-router-dom';
import { Logo } from '@assets/brand/logo';

export default function Footer() {
  return (
    <footer className="px-5 py-10 mt-32 bg-slate-100 h-fit">
      <div className="flex flex-col items-center justify-between gap-3 xs:flex-row xs:gap-0">
        <Logo />

        <h3 className="font-semibold">© 2024</h3>
      </div>
    </footer>
  );
}
