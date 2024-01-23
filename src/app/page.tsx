import CreateNotes from '@/components/create-notes'

export default function Home() {
  return (
    <div className="flex-grow">
      <div className="container py-5">
        <CreateNotes />
      </div>
    </div>
  )
}
