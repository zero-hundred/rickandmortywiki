import Image from 'next/image';
import Link from 'next/link';
import Styles from './card.module.scss';

const Card = (props) => {
    const { name, image, id } = props;

  return (
    <li key={ id } className={`${Styles.card} txt_green`}>

      <Link href={`/character/[id]`} as={`/character/${id}`}><a>

        <div className={`${Styles.card_details}`}>
          <h3 className={`${Styles.card_details__name} txt_24`}>{ name }</h3>
        </div>

      </a></Link>

      <Image layout='fill' objectFit='cover' className={`${Styles.card_img}`}
        src={ image } alt={`${ name }'s closeup`}
        />

    </li>
  )
}

export default Card;