import React from "react";
import "./SuccessCard.css";
export default function SuccessCard({
  imgSrc,
  spanTag,
  contentHead,
  contentPara,
  views,
  reads,
  comment,
  color
}) {
  return (
    <div className="card">
      <div className="card__header">
        <img src={imgSrc} alt="sample1" />
      </div>
      <div className="card__body">
        <span style={{ color: color }} className="card__body__date">
          {spanTag}
        </span>
        <h1 className="card__body__head">{contentHead}</h1>
        <p className="card__body__content">{contentPara}</p>
      </div>
      <div style={{ backgroundColor: color }} className="card__footer">
        <div className="card__Footer__first">
          <div>
            <p>{views}</p>
          </div>
          <label>Reads</label>
        </div>
        <div className="card__Footer__second">
          <div>
            <p>{reads}</p>
          </div>
          <label>Views</label>
        </div>
        <div className="card__Footer__third">
          <div>
            <p>{comment}</p>
          </div>
          <label>Comments</label>
        </div>
      </div>
    </div>
  );
}
