import type { GetServerSidePropsContext } from 'next';
import type { Session } from 'next-auth';
import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from './api/auth/[...nextauth]';

export default function Example({ session }: { session: Session }) {
  return (
    <>
      <h1>Bug with unstable_getServerSession()</h1>
      <p>
        Session type is a <strong>{typeof session}</strong>
      </p>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  console.log('Session type is a ' + typeof session);
  console.log(session);

  return {
    props: { session }
  };
}
