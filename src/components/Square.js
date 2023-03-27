import React from "react";
import wp from "../icons/wp.svg";
import wro from "../icons/wr.svg";
import wkn from "../icons/wk.svg";
import wbi from "../icons/wb.svg";
import wki from "../icons/wki.svg";
import wqu from "../icons/wq.svg";
import bp from "../icons/bp.svg";
import bro from "../icons/br.svg";
import bkn from "../icons/bk.svg";
import bbi from "../icons/bb.svg";
import bki from "../icons/bki.svg";
import bqu from "../icons/bq.svg";

const iconMap = {
  wp,
  bp,
  wr: wro,
  br: bro,
  wn: wkn,
  bn: bkn,
  wb: wbi,
  bb: bbi,
  wq: wqu,
  bq: bqu,
  wk: wki,
  bk: bki,
};

const Square = ({ piece }) => {
  const PieceIcon = iconMap[piece];
  return (
    <div className="square">
      {PieceIcon && <img src={PieceIcon} alt="piece" style={{ height: "150px" }} />}
    </div>
  );
};

export default Square;
