import React, { useState, useCallback, useEffect } from "react";
import { useDrop } from "react-dnd";
import { PetCard } from "./PetCard";
import PetCardDetail from "./PetCardDetail";
import { setDashboardList } from './slice/DashboardSlice'
import { useSelector, useDispatch } from 'react-redux'

const PETS = [
  { id: 1, name: "CandlestickChart", size:{}},
  { id: 2, name: "grid",size:{} },
  { id: 3, name: "ColumnChart", size:{} },
  { id: 4, name: "grid",size:{} },
];

export const Basket = () => {
  const dispatch = useDispatch()
   const dashboardList = useSelector((state) => state.dashboard.dashboardList)
  const [basket, setBasket] = useState(dashboardList);
  const [{ isOver }, dropRef] = useDrop({
    accept: "pet",
    drop: (item) =>
      setBasket((basket) =>
        !basket.includes(item) ? [...basket, item] : basket
      ),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  useEffect(() => {
    dispatch(setDashboardList(basket))
  },[basket, dispatch]);

  let array = basket.filter( (ele, ind) => ind === basket.findIndex( elem => elem.id === ele.id))
//  console.log('array', array);

  return (
    <React.Fragment>
      <div className="pets">
        {PETS.map((pet, index) => (
          <PetCard key={index} draggable id={pet.id} name={pet.name} size={pet.size} />
        ))}
      </div>
      <div className="basket" ref={dropRef}>
        {array.map((pet, index) => (
          <PetCardDetail
            key={index}
            index={index}
            id={pet.id}
            text={pet.name}
            size={pet.size}
          />
        ))}
        {isOver && <div>Drop Here!</div>}
      </div>
    </React.Fragment>
  );
};
