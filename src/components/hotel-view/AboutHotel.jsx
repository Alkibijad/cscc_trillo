import React from "react";
import { BiRightArrow } from "react-icons/bi"

function AboutHotel() {
  return (
    <div className="about">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi
        dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut
        corporis incidunt deserunt quae architecto voluptate.
      </p>

      <p>
        Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto
        voluptate delectus, inventore iure aliquid aliquam..
      </p>

      <div className="ameneties">
        <ul class="list">
          <li class="list__item"><BiRightArrow/>Close to the beach</li>
          <li class="list__item"><BiRightArrow/>Breakfast included</li>
          <li class="list__item"><BiRightArrow/>Free airport shuttle</li>
          <li class="list__item"><BiRightArrow/>Free wifi in all rooms</li>
          <li class="list__item"><BiRightArrow/>Air conditioning and heating</li>
          <li class="list__item"><BiRightArrow/>Pets allowed</li>
          <li class="list__item"><BiRightArrow/>We speak all languages</li>
          <li class="list__item"><BiRightArrow/>Perfect for families</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutHotel;
