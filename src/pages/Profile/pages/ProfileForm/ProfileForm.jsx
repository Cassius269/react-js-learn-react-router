import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Form, useActionData, useSubmit } from "react-router";
import * as yup from "yup";

function ProfileForm() {
  // Récupération des données de formulaire
  const actionData = useActionData();
  // console.log("Action data", actionData?.recipe);

  // Schéma de validation des données avec yup
  const recipeSchema = yup.object({
    title: yup
      .string()
      .required("Titre requis")
      .min(3, "Minimum 3 caractères")
      .max(20, "Maximum requis 20 caractères"),
  });

  // Gestion du formulaire

  const defaultValues = {
    title: "",
  };
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(recipeSchema), // lier le schéma de validation au formulaire à l'aide du resolver
    mode: "onSubmit",
  });

  const submit = useSubmit();

  const onSubmit = (data) => submit(data, { method: "POST" });

  return (
    <>
      <h1>Page de profile Form</h1>
      <form method="POST" onSubmit={handleSubmit((data) => onSubmit(data))}>
        <div>
          <label htmlFor="title" className="form-label">
            Titre du cocktail
          </label>
          <input
            {...register("title")}
            type="text"
            id="title"
            className="form-control"
          />
          {errors?.title && (
            <p className="text-danger mt-1">{errors.title.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="btn btn-primary mt-3"
          disabled={isSubmitting}
        >
          Envoyer
        </button>
      </form>
    </>
  );
}

export default ProfileForm;
