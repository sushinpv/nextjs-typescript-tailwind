
import HomeLayoutView from "./home-layout-view";
import useHomeLayoutViewController from "./home-layout-view-controller";

interface IHomeLayoutProps {}

/**
 * 
 * @param props
 * @returns
 */
const HomeLayout: React.FunctionComponent<IHomeLayoutProps> = (props) => {
    const { } = useHomeLayoutViewController({});
  
    return <HomeLayoutView />;
};
  
export default HomeLayout;