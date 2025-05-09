
const Carts = ({ Icon, title, para }) => {
  return (
    <div className="">
      {Icon && <Icon className="text-4xl" />}
      {title && <h3 className="">{title}</h3>}
      {para && <p className="">{para}</p>}
    </div>
  );
};

export default Carts;
