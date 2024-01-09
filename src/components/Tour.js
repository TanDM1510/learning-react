const Tour = ({ id, img, date, title, description, place, day, prices }) => {
  return (
    <article className="tour-card" key={id}>
      <div className="tour-img-container">
        <img src={img} className="tour-img" alt="" />
        <p className="tour-date">{date}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{title}</h4>
        </div>
        <p>{description}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>{" "}
            {place}
          </p>
          <p>{day}</p>
          <p>{prices}</p>
        </div>
      </div>
    </article>
  );
};
export default Tour;
