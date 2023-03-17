export default function convertDate(date: number): string {
  return new Date(date).toLocaleDateString('en', { dateStyle: 'medium' });
}
