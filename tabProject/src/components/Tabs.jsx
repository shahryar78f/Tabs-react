import { useEffect, useState } from "react";
import "./Tabs.css";

const Tabs = () => {
  const savedTabs = JSON.parse(localStorage.getItem("tabs")) || [
    { id: 1, title: "Tab 1", content: "Content of Tab 1" },
    { id: 2, title: "Tab 2", content: "Content of Tab 2" },
    { id: 3, title: "Tab 3", content: "Content of Tab 3" },
  ];

  const savedTab = localStorage.getItem("activeTab");
  const [tabs, setTabs] = useState(savedTabs);
  const [activeTab, setActiveTab] = useState(savedTab ? parseInt(savedTab) : 1);
  const [newTabTitle, setNewTabTitle] = useState("");
  const [newTabContent, setNewTabContent] = useState("");

  useEffect(() => {
    localStorage.setItem("tabs", JSON.stringify(tabs));
  }, [tabs]);

  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  const addNewTab = () => {
    const newTabId = tabs.length + 1;
    const newTab = {
      id: newTabId,
      title: newTabTitle || `Tab ${newTabId}`,
      content: newTabContent || `Content of ${newTabTitle || `Tab ${newTabId}`}`,
    };

    setTabs([...tabs, newTab]);
    setActiveTab(newTabId);
    setNewTabTitle("");
    setNewTabContent("");
  };

  return (
    <div className="tabs-container">
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`tab tab-${tab.id} ${
              activeTab === tab.id ? "active" : ""
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className={`tab-content tab-content-${activeTab}`}>
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <div key={tab.id} className="content">
                {tab.content}
              </div>
            )
        )}
      </div>
      <div className="add-tab-form">
        <input
          type="text"
          placeholder="New Tab Title"
          value={newTabTitle}
          onChange={(e) => setNewTabTitle(e.target.value)}
        />
        <textarea
          placeholder="New Tab Content"
          value={newTabContent}
          onChange={(e) => setNewTabContent(e.target.value)}
        />
        <button onClick={addNewTab}>Add New Tab</button>
      </div>
    </div>
  );
};

export default Tabs;
