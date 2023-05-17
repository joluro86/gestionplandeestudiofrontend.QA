'use client'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { toast } from 'sonner'

export const Form = () => {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const form = e.currentTarget
      const formData = new FormData(form)
      const { id, nombre, decano } = Object.fromEntries(formData.entries())

      //console.log({ id, nombre, decano })// luego componerlo con el backend
      fetch('http://54.91.170.218/unidadAcademica', {
        method: 'POST',
        body : JSON.stringify({ id, nombre, decano }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(() => {
        toast.success('Se guardo correctamente') //mensaje eviado con exito
        form.reset()
      }).catch((error) => {
        toast.error('No se pudo guardar') //hubo un error al enviar el mensaje
      })
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-8 border border-white/10 p-8 rounded">
        <Input 
          id="id"
          name="id"
          label="codigo"
          type="text"
          placeholder="Ingrese codigo"
        />

        <Input
          id="nombre"
          name="nombre"
          label="nombre"
          type="text"
          placeholder="Ingrese nombre"
        />

        <Input
          id="decano"
          name="decano"
          label="decano"
          type="text"
          placeholder="Ingrese decano"
        />
        <Button>Guardar</Button>
      </form>
    )
}