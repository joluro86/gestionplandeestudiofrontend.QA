import Kv from '@vercel/kv'

export async function POST(request: Request) {
  const { id, nombre, decano} = await request.json()

  if (id == null || nombre == null || decano == null) {
    return new Response('Missing parameter', { status: 400 })
  } 

  const uuid = crypto.randomUUID()
  const timestamp = Date.now()

  try {
    await Kv.set('contact-${uuid}', { id, nombre, decano, timestamp }) //await sendMessage({ id, nombre, decano, timestamp })
    return new Response('Guardado correctamente', { status: 200 })
  }catch (error) {
    return new Response('Error interno', { status: 500 })
  }
  
}
