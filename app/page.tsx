export default function Home() {
  async function handleSubmit(formData: FormData) {
    "use server";

    const name = formData.get("name");
    console.log("Name:", name);
  }

  return (
    <form action={handleSubmit}>
      <input name="name" placeholder="Enter name" />
      <button type="submit">Submit</button>
    </form>
  );
}
