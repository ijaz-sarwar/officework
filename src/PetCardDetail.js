import React, { useState, useEffect } from "react";
import CandlestickChart from "./charts/CandlestickChart";
import ColumnChart from "./charts/ColumnChart";
import Grid from "./grid/Grid";
import { Rnd } from "react-rnd";
import { useSelector, useDispatch } from 'react-redux'
import {setDashboardCardSize, setDashboardCardPosition} from './slice/DashboardSlice'

const PetCardDetail = ({ text,id, index,size }) => {
  const dispatch = useDispatch()
  const dashboardCardSize = useSelector((state) => state.dashboard.dashboardCardSize)
  const dashboardCardPosition = useSelector((state) => state.dashboard.dashboardCardPosition)

  const [cardSize, setCardSize] = useState(dashboardCardSize);
  const [cardPosition, setCardPosition] = useState(dashboardCardPosition);

  // console.log('cardPosition', cardPosition);
    console.log('dashboardCardSize', dashboardCardSize);

  // useEffect(() => {
  //   dispatch(setDashboardCardPosition({...dashboardCardPosition, cardPosition}))
  // },[cardPosition, dispatch]);

  //  console.log('dashboardCardPosition', dashboardCardPosition);
  console.log('>>>>>',id);
  return (
    
    <div className="pet-card-details">
      <Rnd
        className="pet-card-detail"
        bounds="window"
        onDragStop={(e, d) => { setCardPosition({ x: d.x, y: d.y, index })}}
        onResizeStop={(e, direction, ref, delta, position) => {
          dispatch(setDashboardCardSize({
            width: ref.style.width,
            height: ref.style.height,
            ...position,
            id
          }));
        }}
      >
        {text === "CandlestickChart" ? (
          <CandlestickChart />
        ) : text === "ColumnChart" ? (
          <ColumnChart />
        ) : (
          <Grid />
        )}
      </Rnd>
    </div>
  );
};

export default PetCardDetail;
