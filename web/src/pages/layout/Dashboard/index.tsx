import { Menu } from "../../../components/Menu";

export const DashboardLayout: React.FC = ({ children }) => {
  return (
    <>
      <Menu />
      {children}
    </>
  );
}