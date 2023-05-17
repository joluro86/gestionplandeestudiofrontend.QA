import { Form } from '@/components/Form'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={"${inter.className} flex flex-col min-h-screen items-center justify-center p-24"}>
      <h1 className='text-4xl font-bold tracking-light text-center mb-4'>Gestionar unidad academica</h1>

      <Form />

    </main>
  )
}
