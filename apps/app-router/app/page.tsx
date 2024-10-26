import { Metadata } from 'next'
import { Button } from 'ui'
import Item from '@/components/Item'

export default async function Home() {
  return (
    <main>
      <h1 className="px-2 py-4 text-4xl md:text-5xl">App Router</h1>
      <Button />
      <Item />
    </main>
  )
}

export const metadata: Metadata = {
  title: 'Title',
  description: ''
}
