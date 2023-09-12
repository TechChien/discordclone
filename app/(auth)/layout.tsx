// type AuthLayoutProps = {
//   children: React.ReactNode;
// };

interface IAuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: IAuthLayoutProps) => {
  return (
    <div className="h-full flex justify-center items-center">{children}</div>
  );
};

export default AuthLayout;
