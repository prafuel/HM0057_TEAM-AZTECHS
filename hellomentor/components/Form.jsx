import Link from "next/link"

const Form = ({
type,
search,
submitting,
setSearch,
handleSubmit
}) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-center">
        <span className="blue_gradient">Search for a Mentor</span>
      </h1>

      <form
       onSubmit={handleSubmit}
       className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your Query
          </span>
          <input
           value={search.data}
           onChange={(e) => setSearch({...search, data: e.target.value})}
           placeholder="Enter your query here..."
           required
           className="form_input"
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
        <button type="submit" disabled={submitting} 
          className={`px-5 py-1.5 text-sm ${submitting ? `border border-black bg-transparent text-black` : `bg-primary-violet text-white`} rounded-full `}
          >
          {submitting ? `${type}ing...` : type}
          </button>
          <Link href='/' className="text-gray-500 text-sm">
            Cancel
          </Link>
          
        </div>
      </form>
    </section>
  )
}

export default Form