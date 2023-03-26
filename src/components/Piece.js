import React from "react";

import bp from "../icons/bp.svg";
import br from "../icons/br.svg";
import bn from "../icons/bn.svg";
import bb from "../icons/bb.svg";
import bq from "../icons/bq.svg";
import bki from "../icons/bki.svg";
import wp from "../icons/wp.svg";
import wr from "../icons/wr.svg";
import wn from "../icons/wn.svg";
import wb from "../icons/wb.svg";
import wq from "../icons/wq.svg";
import wki from "../icons/wki.svg";
import blank from "../icons/blank.svg";

const Piece = ({ piece }) => {
  const pieces = {
    "bp": bp,
    "br": br,
    "bn": bn,
    "bb": bb,
    "bq": bq,
    "bki": bki,
    "wp": wp,
    "wr": wr,
    "wn": wn,
    "wb": wb,
    "wq": wq,
    "wki": wki,
    "blank": blank
  };
  return (
    <div className="piece">
      <img src={pieces[piece]} alt={piece} />
    </div>
  );
};

export default Piece;
