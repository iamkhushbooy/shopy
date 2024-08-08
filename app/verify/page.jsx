
const verify = async (token) => {
  const res = await fetch(`${process.env.DEV}/api/verify`, {
    headers: {
      auth: token
    },
    cache: 'no-store'
  })
  return await res.json()
}
const page = async (context) => {
  const token = context.searchParams.token
  const msg = await verify(token);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Welcome🤗 </h1>
      <h2>Thankyou for sign up...</h2>
      <p className="ml-8 text-blue-600">{msg}</p>
    </div>
  )
}
export default page;






// <div className="container mx-auto p-4">
// <h1 className="text-2xl font-bold">Welcome🤗 </h1>
// <h2>Thankyou for sign up...</h2>
// <p className="ml-8 text-blue-600">{msg}</p>
// </div>