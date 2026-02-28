export async function getServerSideProps() {
  return { redirect: { destination: '/#work', permanent: false } };
}

export default function Projects() {
  return null;
}
