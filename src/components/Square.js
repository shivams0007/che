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
import empty from "../icons/empty.svg";

function Square(props) {
  let icon = empty;
  if (props.piece) {
    if (props.piece.type === "pawn") {
      if (props.piece.color === "black") {
        icon = bp;
      } else {
        icon = wp;
      }
    } else if (props.piece.type === "rook") {
      if (props.piece.color === "black") {
        icon = br;
      } else {
        icon = wr;
      }
    } else if (props.piece.type === "knight") {
      if (props.piece.color === "black") {
        icon = bn;
      } else {
        icon = wn;
      }
    } else if (props.piece.type === "bishop") {
      if (props.piece.color === "black") {
        icon = bb;
      } else {
        icon = wb;
      }
    } else if (props.piece.type === "queen") {
      if (props.piece.color === "black") {
        icon = bq;
      } else {
        icon = wq;
      }
    } else if (props.piece.type === "king") {
      if (props.piece.color === "black") {
        icon = bk;
      } else {
        icon = wk;
      }
    }
  }

  return (
    <div
      className={`square ${props.color}`}
      onClick={props.onClick}
      style={{ backgroundImage: `url(${icon})` }}
    ></div>
  );
}

export default Square;
