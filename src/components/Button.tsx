interface Props {
    className: string,
    onClick: () => void,
    label: string
}

export default function Button({ className, onClick, label}: Props) {
  return <button className={className} onClick={onClick}>{label}</button>
}
