export default async function SignIn() {
  return (
    <form method="post">
      <label>
        Password
        <input name="password" type="password" />
      </label>
      <button type="submit">Sign in</button>
    </form>
  );
}
