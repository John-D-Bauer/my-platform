interface PillListProps {
  items: string[]
  small?: boolean
}

function PillList({ items, small = false }: PillListProps) {
  return (
    <ul className={small ? 'pill-list pill-list-small' : 'pill-list'}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export default PillList
