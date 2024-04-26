import PropTypes from 'prop-types';
import Header from '../../components/header/Header';

const MainLayout = ({ children }) => {
  return (
    <div className="font-poppins">
      <Header />
      <div className="px-24 transform translate-y-14">{children}</div>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
