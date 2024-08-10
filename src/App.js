// Her bir butonun üzerine, içerikte yazan eyleme karşılık gelen satır içi/inline stiller ekleyin

export default function ButtonVariants() {
  return (
    <span class="wrapper flex gap-2">
      <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Create</button>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Update</button>
      <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
    </span>
  )
}
