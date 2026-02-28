export async function getServerSideProps() {
  return { redirect: { destination: '/#about', permanent: false } };
}

export default function About() {
  return null;
}
