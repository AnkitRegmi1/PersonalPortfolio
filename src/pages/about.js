export async function getServerSideProps() {
  return { redirect: { destination: '/', permanent: false } };
}

export default function About() {
  return null;
}
