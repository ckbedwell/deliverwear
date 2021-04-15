export const SignIn = () => {
  return (
    <button onClick={handleClick}>
      {`Sign in`}
    </button>
  )

  function handleClick() {
    console.log(`signing in`)
    // get jwt
  }
}
