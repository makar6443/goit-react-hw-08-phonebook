import { ThreeDots } from 'react-loader-spinner';

import css from './Loader.module.css'

const Loader = () => {
  return (
    <div className={css.loaderContainer}>
      <ThreeDots
        height="50"
        width="50"
        radius="5"
        color='#28328d'
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};
export default Loader;
