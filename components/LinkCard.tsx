interface LinkCardInterface {
  name: string
  href: string
  icon: string
}

export default function LinkCard ({ name, href, icon }: LinkCardInterface): JSX.Element {
  return (
    <div
      className="rounded-xl bg-black text-white hover:scale-105 ease-in-out duration-300 flex gap-4 p-6">
      {name}
    </div>
  )
}
