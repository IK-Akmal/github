import { Item } from '../../Model/Repository';
import Card from '../Card/Card';
import ErrorAlert from '../ErrorAlert/ErrorAlert';

type CardListProps = {
  errorMessage: string;
  items: Item[] | undefined;
};

export default function CardList({ errorMessage, items }: CardListProps) {
  return (
    <>
      {
        errorMessage.length > 0
          ? <ErrorAlert message={errorMessage} />
          : items?.map((item) => (<Card key={item.id} {...item} />))
      }
    </>
  );
}
