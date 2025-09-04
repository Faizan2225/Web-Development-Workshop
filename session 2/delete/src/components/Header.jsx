// Header component - simple presentational component with props
const Header = ({ title, subtitle }) => {
  return (
    <div className="header">
      <h1>{title}</h1>
      {subtitle && <p className="subtitle">{subtitle}</p>}
    </div>
  );
};

export default Header;
