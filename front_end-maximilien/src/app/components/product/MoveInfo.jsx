import React from "react";
import { BsFillCartFill } from "react-icons/bs";
import "../../assets/styles/index.css";
import Rien from "../../assets/images/rien.jpg";
import "../../assets/styles/moveinfo.css";
import Buy2 from "../Buy/Buy2";
import Favorites from "../Favorites/Favorites";
import("../../assets/styles/moveinfo.css");
export default function MoveInfo(props) {
  const options = { year: "numeric" };
  const button = true;
  return (
    <div>
      <div className="tryb bg-bg-start flex justify-center pb-24 pt-24 rounded-lg">
        <div className="film rounded-lg bg-white">
          {props.product.image ? (
            <img src={props.product.image} className="tourimgprom trya" />
          ) : (
            <img src={Rien} className="tourimgprom" />
          )}
        </div>
        <div className="filminfo flex flex-col bg-white ml-5 rounded-lg">
          <div className="filmtitle2 m-6">
            <h1 className="titreprod">{props.product.name}</h1>
            <Favorites product={props.product} />
          </div>
          <div className="ml-10">
            <ul>
              <li className="dateprod">
                {new Date(props.product.updatedAt).toLocaleDateString(
                  "fr-FR",
                  options
                )}
              </li>
              <li>
                {props.product.subCategoryId?.map((subcat) => (
                  <option
                    className="souscatprod"
                    key={subcat._id}
                    name="subcategory"
                    value={subcat._id}
                  >
                    {subcat.name}
                  </option>
                ))}
              </li>
              <li className="prixprod">{props.product.price}€</li>
              <li>
                <p className="titredescrpprod">Description</p>
              </li>
            </ul>
          </div>
          <div className="desccription bg-white rounded-lg">
            <li>
              <p className="text-center descriptionprod">
                {props.product.description}
              </p>
            </li>
          </div>
          <div>
            {props.product.stock > 0 ? (
              <div className="divstock">
                <p className="stock">En stock</p>
              </div>
            ) : (
              <div className="divunstock">
                <p className="stock">plus de stock</p>
              </div>
            )}
          </div>
          {props.product.stock > 0 ? <Buy2 product={props.product} /> : <p></p>}
        </div>
      </div>
    </div>
  );
}
