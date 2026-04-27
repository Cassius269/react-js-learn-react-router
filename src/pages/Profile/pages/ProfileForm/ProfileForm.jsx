import { useState } from "react";
import { Form, useActionData, useNavigate } from "react-router";

function ProfileForm() {
  // Etat local du composant
  const [name, setName] = useState("");

  // Récupération des données de formulaire
  const actionData = useActionData();
  console.log("Action data", actionData);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // try {
  //   //   const response = await fetch("url", {
  //   //     method: "POST",
  //   //     headers: {
  //   //       "Content-Type": "application/json",
  //   //     },
  //   //     body: JSON.stringify({ name }),
  //   //   });

  //   //   if (response.ok) {
  //   //     const data = await response.json();
  //   //     console.log(data);
  //   //   } else {
  //   //     console.log(`Ooops une erreur`);
  //   //   }
  //   // } catch (error) {
  //   //   console.log(`Erreur : ${error.message}`);
  //   // }
  // };

  const handleChange = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      <h1>Page de profile Form</h1>
      <Form method="POST">
        <div>
          <label htmlFor="title" className="form-label">
            Titre du cocktail
          </label>
          <input
            onChange={handleChange}
            type="text"
            id="title"
            name="title"
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Envoyer
        </button>
      </Form>
    </>
  );
}

export default ProfileForm;
