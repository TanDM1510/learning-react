const Service = ({ id, type, description }) => {
  return (
    <article className="service" key={id}>
      <span className="service-icon">
        <i className="fas fa-wallet fa-fw"></i>
      </span>
      <div className="service-info">
        <h4 className="service-title">{type}</h4>
        <p className="service-text">{description}</p>
      </div>
    </article>
  );
};
export default Service;
