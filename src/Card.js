export function Card({ children, classs }) {
  return <div className={classs ? classs : 'box'}>{children}</div>;
}
