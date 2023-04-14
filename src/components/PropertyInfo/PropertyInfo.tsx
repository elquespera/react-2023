import convertDate from '../../lib/convertDate';
import { PropertyData } from '../../types';
import styles from './PropertyInfo.module.scss';

interface PropertyInfoProps {
  data: PropertyData;
}

export default function PropertyInfo({ data }: PropertyInfoProps) {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={data.image} alt={data.title} />
      <div className={styles.info}>
        <span className={styles.purpose}>For {data.purpose}</span>
        <span className={styles.price}>Price: ${data.price}</span>
        <span>{data.address}</span>
        <span>{`Rooms: ${data.rooms}`}</span>
        <span className={styles.date}>{`Available from ${convertDate(data.availableFrom)}`}</span>
      </div>
    </div>
  );
}
