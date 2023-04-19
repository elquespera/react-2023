import convertDate from '../../lib/convertDate';
import { useGetPropertyByIdQuery } from '../../services/properties';
import Loader from '../Loader/Loader';
import styles from './PropertyInfo.module.scss';

interface PropertyInfoProps {
  id: string | number;
}

export default function PropertyInfo({ id }: PropertyInfoProps) {
  const { data, error, isLoading } = useGetPropertyByIdQuery(id);

  return (
    <div className={styles.wrapper}>
      {error ? (
        <span>There was an error while loading property info</span>
      ) : isLoading ? (
        <Loader visible />
      ) : data ? (
        <>
          <img className={styles.image} src={data.image} alt={data.title} />
          <div className={styles.info}>
            <span className={styles.purpose}>For {data.purpose}</span>
            <span className={styles.price}>Price: ${data.price}</span>
            <span>{data.address}</span>
            <span>{`Rooms: ${data.rooms}`}</span>
            <span className={styles.date}>{`Available from ${convertDate(
              data.availableFrom
            )}`}</span>
          </div>
        </>
      ) : null}
    </div>
  );
}
