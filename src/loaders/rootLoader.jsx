export async function rootLoader({ params, request }) {
  const user = { name: "Jean", age: 24 };

  return {
    user,
  };
}
