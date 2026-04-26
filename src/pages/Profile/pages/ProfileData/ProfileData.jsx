import { useNavigate } from "react-router";

function ProfileData() {
  const navigate = useNavigate();
  const handleClick = () => navigate("/profile");

  return (
    <>
      <h1>Je suis la page de profile Data</h1>
      <ul>
        <li className="mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
          asperiores voluptatem architecto inventore hic voluptatibus, harum ex
          odit unde recusandae autem natus sed vel numquam animi ratione fugiat
          velit impedit? Ut aliquid dolorem neque? Maxime dignissimos qui
          aspernatur! Id tempore hic earum laudantium, accusantium neque illo
          repellat, quas laborum, assumenda placeat ipsa aliquid. Doloremque
          corporis deserunt labore illo beatae odit? Quo dolor vel soluta illum
          sapiente animi eius quod amet, sint ab quos, natus nobis? Eaque vitae
          itaque, fuga id non sapiente fugit tenetur nesciunt. Rem, asperiores.
          Iure, magnam corrupti! Iste, quasi laborum! Deleniti vel perferendis
          omnis facere incidunt! Voluptatum minima ipsum laudantium at repellat
          eius fugiat in dicta architecto dolores, et itaque dolorem. Numquam
          animi fuga voluptatibus iure doloribus? Quidem officiis quod
          accusantium doloribus esse voluptates, dolores dolorem, animi enim
          laboriosam deleniti. Unde fugit similique quos quidem quia illum modi
          facere veritatis nobis ipsum ut reiciendis dolores, odit neque!
        </li>
        <li className="mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
          asperiores voluptatem architecto inventore hic voluptatibus, harum ex
          odit unde recusandae autem natus sed vel numquam animi ratione fugiat
          velit impedit? Ut aliquid dolorem neque? Maxime dignissimos qui
          aspernatur! Id tempore hic earum laudantium, accusantium neque illo
          repellat, quas laborum, assumenda placeat ipsa aliquid. Doloremque
          corporis deserunt labore illo beatae odit? Quo dolor vel soluta illum
          sapiente animi eius quod amet, sint ab quos, natus nobis? Eaque vitae
          itaque, fuga id non sapiente fugit tenetur nesciunt. Rem, asperiores.
          Iure, magnam corrupti! Iste, quasi laborum! Deleniti vel perferendis
          omnis facere incidunt! Voluptatum minima ipsum laudantium at repellat
          eius fugiat in dicta architecto dolores, et itaque dolorem. Numquam
          animi fuga voluptatibus iure doloribus? Quidem officiis quod
          accusantium doloribus esse voluptates, dolores dolorem, animi enim
          laboriosam deleniti. Unde fugit similique quos quidem quia illum modi
          facere veritatis nobis ipsum ut reiciendis dolores, odit neque!
        </li>
        <button
          onClick={handleClick}
          type="button"
          className="btn btn-outline-success mt-5 d-block m-auto"
        >
          Naviguer vers la page profile
        </button>
        <li className="mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
          asperiores voluptatem architecto inventore hic voluptatibus, harum ex
          odit unde recusandae autem natus sed vel numquam animi ratione fugiat
          velit impedit? Ut aliquid dolorem neque? Maxime dignissimos qui
          aspernatur! Id tempore hic earum laudantium, accusantium neque illo
          repellat, quas laborum, assumenda placeat ipsa aliquid. Doloremque
          corporis deserunt labore illo beatae odit? Quo dolor vel soluta illum
          sapiente animi eius quod amet, sint ab quos, natus nobis? Eaque vitae
          itaque, fuga id non sapiente fugit tenetur nesciunt. Rem, asperiores.
          Iure, magnam corrupti! Iste, quasi laborum! Deleniti vel perferendis
          omnis facere incidunt! Voluptatum minima ipsum laudantium at repellat
          eius fugiat in dicta architecto dolores, et itaque dolorem. Numquam
          animi fuga voluptatibus iure doloribus? Quidem officiis quod
          accusantium doloribus esse voluptates, dolores dolorem, animi enim
          laboriosam deleniti. Unde fugit similique quos quidem quia illum modi
          facere veritatis nobis ipsum ut reiciendis dolores, odit neque!
        </li>
      </ul>
    </>
  );
}

export default ProfileData;
