export default function Button({ children, style, link }) {
  return (
    <button
      className={style}
      href={link}
    >
      {children}
    </button>
  )
}