import Styles from './buttons.module.scss';

const MoreResults = (props) => {
    const { onMoreResults } = props;
  return (
    <button className={`${Styles.moreResults} txt_18`} onClick={ onMoreResults }>
        More Results...
    </button>
  )
}

export default MoreResults