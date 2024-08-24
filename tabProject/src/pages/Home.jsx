import Tabs from "../components/Tabs.jsx";
import TabContent from "../components/TabContent.jsx";

const Home = () => {
  const tabs = [
    {
      label: "Tab 1",
      content: (
        <TabContent title="Tab 1" description="This is the content for Tab 1" />
      ),
    },
    {
      label: "Tab 2",
      content: (
        <TabContent title="Tab 2" description="This is the content for Tab 2" />
      ),
    },
    {
      label: "Tab 3",
      content: (
        <TabContent title="Tab 3" description="This is the content for Tab 3" />
      ),
    },
  ];

  return <Tabs tabs={tabs} />;
};

export default Home;
