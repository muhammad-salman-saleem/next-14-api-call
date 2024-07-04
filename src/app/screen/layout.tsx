import { NextPage } from 'next';

interface Props {
  children: React.ReactNode;
}

const RootLayout: NextPage<Props> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
}

export default RootLayout;
