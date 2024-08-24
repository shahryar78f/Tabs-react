const TabContent = ({ title, description }) => {
  return (
    <div>
      <h2 className="text-2xl mb-2">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default TabContent;
